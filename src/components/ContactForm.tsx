"use client";

import { useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!values.name.trim()) errs.name = "Name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Enter a valid email address";
    if (!values.message.trim()) errs.message = "Message is required";
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
          "form-name": "contact",
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

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-green-700 font-semibold text-lg mb-1">Message sent!</p>
        <p className="text-gray-600 text-sm">
          Thanks! We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 text-sm border rounded-lg bg-white text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48195d] focus:border-[#48195d] min-h-[44px] transition-colors ${
      hasError ? "border-red-400" : "border-[#e5e7eb]"
    }`;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={values.name}
          onChange={(e) => {
            setValues((v) => ({ ...v, name: e.target.value }));
            setErrors((er) => ({ ...er, name: undefined }));
          }}
          className={inputClass(!!errors.name)}
          placeholder="Jane Smith"
          autoComplete="name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[#1a1a2e] mb-1.5">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => {
            setValues((v) => ({ ...v, email: e.target.value }));
            setErrors((er) => ({ ...er, email: undefined }));
          }}
          className={inputClass(!!errors.email)}
          placeholder="jane@example.com"
          autoComplete="email"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[#1a1a2e] mb-1.5"
        >
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => {
            setValues((v) => ({ ...v, message: e.target.value }));
            setErrors((er) => ({ ...er, message: undefined }));
          }}
          className={`w-full px-4 py-3 text-sm border rounded-lg bg-white text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#48195d] focus:border-[#48195d] resize-y transition-colors ${
            errors.message ? "border-red-400" : "border-[#e5e7eb]"
          }`}
          placeholder="Tell us what's on your mind..."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 px-6 text-sm font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
