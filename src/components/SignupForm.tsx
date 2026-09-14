"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";

/*
 * MKT-1 -- public signup form + immediate handoff trigger.
 *
 * Flow: supabase.auth.signUp() (publishable/anon key, password-based,
 * profile fields carried in options.data) -> with the hosted project's
 * "Confirm email" setting disabled (OPS-1, a prerequisite of this design --
 * see the Public Signup & Onboarding planning packet), signUp() returns an
 * active session synchronously -> that session's access token is POSTed to
 * CACFP Free's POST /api/auth/handoff immediately, no intermediate
 * confirmation page -> on success, redirect via URL fragment (never a query
 * string) to https://www.freecacfp.com/auth/complete.
 *
 * Deliberately NOT in this component (per the approved MKT-1 task record):
 * no TDR lookup, no ecosystem_source, no prefill-confirmation notice -- that
 * is CF-1-TDR, still blocked.
 */

const CACFP_FREE_APP_URL = "https://www.freecacfp.com";
const SUPPORT_EMAIL = "support@cacfpfree.com";

type FieldErrors = {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  position?: string;
  center_name?: string;
  mobile?: string;
};

type Values = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  position: string;
  center_name: string;
  mobile: string;
};

type ViewState = "form" | "submitting" | "account_exists" | "error";

const EMPTY_VALUES: Values = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  position: "",
  center_name: "",
  mobile: "",
};

const MIN_PASSWORD_LENGTH = 8;

function normalizeMobile(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  return digits.length === 10 ? digits : null;
}

function validate(values: Values): FieldErrors {
  const errs: FieldErrors = {};
  if (!values.email.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errs.email = "Enter a valid email address";
  if (!values.password) errs.password = "Password is required";
  else if (values.password.length < MIN_PASSWORD_LENGTH)
    errs.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  if (!values.first_name.trim()) errs.first_name = "First name is required";
  if (!values.last_name.trim()) errs.last_name = "Last name is required";
  if (!values.position.trim()) errs.position = "Position is required";
  if (!values.center_name.trim()) errs.center_name = "Center name is required";
  if (!values.mobile.trim()) errs.mobile = "Mobile number is required";
  else if (!normalizeMobile(values.mobile))
    errs.mobile = "Enter a 10-digit mobile number";
  return errs;
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 text-sm border rounded-lg bg-white text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48195d] focus:border-[#48195d] min-h-[44px] transition-colors ${
    hasError ? "border-red-400" : "border-[#e5e7eb]"
  }`;

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function SignupForm() {
  const [values, setValues] = useState<Values>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [view, setView] = useState<ViewState>("form");

  function setField<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setView("submitting");
    const mobile = normalizeMobile(values.mobile)!;
    const profile = {
      first_name: values.first_name.trim(),
      last_name: values.last_name.trim(),
      position: values.position.trim(),
      center_name: values.center_name.trim(),
      mobile,
    };

    try {
      const supabase = getSupabaseClient();
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: values.email.trim(),
        password: values.password,
        options: { data: profile },
      });

      if (signUpError) {
        // Supabase's own "already registered" wording varies by version;
        // matched loosely on purpose. Anything else falls through to the
        // generic error state, never the account-exists one.
        if (/registered|already exists|already been registered/i.test(signUpError.message)) {
          setView("account_exists");
        } else {
          setView("error");
        }
        return;
      }

      const accessToken = signUpData.session?.access_token;
      if (!accessToken) {
        // With the "Confirm email" setting disabled (this design's
        // prerequisite -- see OPS-1), signUp() should always return an
        // active session synchronously. If it doesn't, something in the
        // hosted Auth configuration doesn't match this design; fail
        // generically rather than guess at a confirmation flow that this
        // sprint deliberately does not build.
        setView("error");
        return;
      }

      const handoffResponse = await fetch(`${CACFP_FREE_APP_URL}/api/auth/handoff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          email: values.email.trim(),
          ...profile,
        }),
      });

      if (handoffResponse.status === 409) {
        setView("account_exists");
        return;
      }
      if (!handoffResponse.ok) {
        setView("error");
        return;
      }

      const handoffBody = (await handoffResponse.json()) as {
        session_token?: string;
        refresh_token?: string;
      };
      if (!handoffBody.session_token || !handoffBody.refresh_token) {
        setView("error");
        return;
      }

      // Fragment only, never a query string -- never sent to any server,
      // same pattern CACFP Free's own password-recovery link already uses.
      const fragment = new URLSearchParams({
        access_token: handoffBody.session_token,
        refresh_token: handoffBody.refresh_token,
      }).toString();
      window.location.href = `${CACFP_FREE_APP_URL}/auth/complete#${fragment}`;
    } catch {
      setView("error");
    }
  }

  if (view === "account_exists") {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <p className="text-[#1a1a2e] font-semibold text-lg mb-1">
          This email is already associated with a CACFP Free account.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          You don&apos;t need to sign up again.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`${CACFP_FREE_APP_URL}/login`}
            className="inline-flex justify-center items-center py-3 px-6 text-sm font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px]"
          >
            Sign in
          </a>
          <a
            href={`${CACFP_FREE_APP_URL}/forgot-password`}
            className="inline-flex justify-center items-center py-3 px-6 text-sm font-semibold text-[#48195d] border border-[#48195d] rounded-lg hover:bg-[#fafafc] transition-colors min-h-[44px]"
          >
            Forgot your password?
          </a>
        </div>
        <p className="text-gray-500 text-xs mt-4">
          Still need help? Contact{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="underline hover:text-[#48195d]">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  if (view === "error") {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <p className="text-[#1a1a2e] font-semibold text-lg mb-1">Something went wrong.</p>
        <p className="text-gray-600 text-sm mb-4">
          We couldn&apos;t finish setting up your account. Please try again.
        </p>
        <button
          type="button"
          onClick={() => setView("form")}
          className="py-3 px-6 text-sm font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px]"
        >
          Try again
        </button>
      </div>
    );
  }

  const submitting = view === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="signup-first-name" label="First name" error={errors.first_name}>
          <input
            id="signup-first-name"
            name="first_name"
            type="text"
            required
            value={values.first_name}
            onChange={(e) => setField("first_name", e.target.value)}
            className={inputClass(!!errors.first_name)}
            autoComplete="given-name"
          />
        </Field>
        <Field id="signup-last-name" label="Last name" error={errors.last_name}>
          <input
            id="signup-last-name"
            name="last_name"
            type="text"
            required
            value={values.last_name}
            onChange={(e) => setField("last_name", e.target.value)}
            className={inputClass(!!errors.last_name)}
            autoComplete="family-name"
          />
        </Field>
      </div>

      <Field id="signup-email" label="Email address" error={errors.email}>
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          className={inputClass(!!errors.email)}
          placeholder="jane@example.com"
          autoComplete="email"
        />
      </Field>

      <Field id="signup-password" label="Password" error={errors.password}>
        <input
          id="signup-password"
          name="password"
          type="password"
          required
          value={values.password}
          onChange={(e) => setField("password", e.target.value)}
          className={inputClass(!!errors.password)}
          placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
          autoComplete="new-password"
        />
      </Field>

      <Field id="signup-position" label="Your position" error={errors.position}>
        <input
          id="signup-position"
          name="position"
          type="text"
          required
          value={values.position}
          onChange={(e) => setField("position", e.target.value)}
          className={inputClass(!!errors.position)}
          placeholder="Director"
        />
      </Field>

      <Field id="signup-center-name" label="Center / daycare name" error={errors.center_name}>
        <input
          id="signup-center-name"
          name="center_name"
          type="text"
          required
          value={values.center_name}
          onChange={(e) => setField("center_name", e.target.value)}
          className={inputClass(!!errors.center_name)}
          placeholder="Sunshine Kids Academy"
        />
      </Field>

      <Field id="signup-mobile" label="Mobile phone number" error={errors.mobile}>
        <input
          id="signup-mobile"
          name="mobile"
          type="tel"
          required
          value={values.mobile}
          onChange={(e) => setField("mobile", e.target.value)}
          className={inputClass(!!errors.mobile)}
          placeholder="(512) 555-1234"
          autoComplete="tel"
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 px-6 text-sm font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Setting up your account…" : "Sign up free"}
      </button>
    </form>
  );
}
