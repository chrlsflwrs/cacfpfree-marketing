"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the free plan really free forever?",
    answer:
      "Yes. The free tier never expires and never requires a credit card. You can use it as long as you want with the included limits.",
  },
  {
    question: "Can I use different plans for different tools?",
    answer:
      "Yes. Each tool has its own plan. You might be on the free plan for time reports and the professional plan for receipts — they're independent.",
  },
  {
    question: "What happens if I downgrade or cancel?",
    answer:
      "You keep access through the end of your billing period. After that, you revert to the free plan with its limits. Your data is never deleted.",
  },
  {
    question: "Do you offer discounts for sponsors managing multiple sites?",
    answer:
      "Yes. Contact us for sponsor pricing — we'll build a plan based on how many sites you manage and which tools you need.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          Pricing questions
        </h2>

        <div className="flex flex-col divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors min-h-[44px]"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#1a1a2e] pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <span
                  className="shrink-0 text-[#48195d] transition-transform duration-200"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
