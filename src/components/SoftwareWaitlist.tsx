"use client";

import { useState } from "react";

export default function SoftwareWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section id="waitlist" className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
          Be the first to know when it&apos;s ready
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          We&apos;ll email you as soon as CACFP software launches. No spam —
          just one email when it&apos;s time.
        </p>

        {submitted ? (
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-6 py-5 inline-block">
            <p className="text-[#16a34a] font-semibold text-lg">
              ✓ You&apos;re on the list!
            </p>
            <p className="text-gray-500 text-sm mt-1">
              We&apos;ll reach out as soon as it&apos;s ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 text-sm border border-gray-200 rounded-lg bg-white text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#48195d] focus:ring-1 focus:ring-[#48195d] min-h-[44px]"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] whitespace-nowrap"
              >
                Join waitlist
              </button>
            </div>
          </form>
        )}

        <p className="text-sm text-gray-400 italic mt-5">
          Already using time reports or receipts? You&apos;re automatically on
          the list.
        </p>
      </div>
    </section>
  );
}
