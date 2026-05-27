"use client";

import { useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
};

export default function SoftwareWaitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({ name: "", email: "" });

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!values.name.trim()) errs.name = "Name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Enter a valid email address";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "waitlist",
          interest: "CACFP Software waitlist",
          ...values,
        }).toString(),
      });
    } catch {
      // Submission attempted — show success regardless to not block the user
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  return (
    <section
      id="waitlist"
      style={{ background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)" }}
      className="py-20 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Be the first to know when it&apos;s ready
        </h2>
        <p
          className="text-lg leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          We&apos;ll email you as soon as CACFP software launches. No spam —
          just one email when it&apos;s time.
        </p>

        {/* Hidden form for Netlify detection on static build */}
        <form name="waitlist" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="waitlist" />
          <input type="hidden" name="interest" value="CACFP Software waitlist" />
          <input type="text" name="name" />
          <input type="email" name="email" />
        </form>

        {submitted ? (
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl px-6 py-6 text-center">
            <p className="text-[#16a34a] font-semibold text-xl mb-1">
              🎉 You&apos;re on the list!
            </p>
            <p className="text-gray-500 text-sm mt-1">
              We&apos;ll email you as soon as CACFP software launches.
            </p>
          </div>
        ) : (
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            noValidate
            className="w-full"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <input
              type="hidden"
              name="interest"
              value="CACFP Software waitlist"
            />

            <div className="flex flex-col gap-3 w-full max-w-lg mx-auto">
              <div className="text-left">
                <label
                  htmlFor="waitlist-name"
                  className="block text-sm font-medium text-white mb-1.5"
                >
                  Your name
                </label>
                <input
                  id="waitlist-name"
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, name: e.target.value }));
                    setErrors((er) => ({ ...er, name: undefined }));
                  }}
                  placeholder="Jane Smith"
                  autoComplete="name"
                  className={`w-full px-4 py-3 text-sm border rounded-lg bg-white text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#E8734A] focus:ring-1 focus:ring-[#E8734A] min-h-[44px] ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="text-left">
                <label
                  htmlFor="waitlist-email"
                  className="block text-sm font-medium text-white mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, email: e.target.value }));
                    setErrors((er) => ({ ...er, email: undefined }));
                  }}
                  placeholder="jane@example.com"
                  autoComplete="email"
                  className={`w-full px-4 py-3 text-sm border rounded-lg bg-white text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#E8734A] focus:ring-1 focus:ring-[#E8734A] min-h-[44px] ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1 text-left">
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 text-sm font-semibold text-white bg-[#E8734A] rounded-lg hover:bg-[#d4663f] transition-colors min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Joining…" : "Join the waitlist"}
              </button>
            </div>
          </form>
        )}

        <p
          className="text-sm italic mt-5"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Already using time reports or receipts? You&apos;re automatically on
          the list.
        </p>
      </div>
    </section>
  );
}
