"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of receipts can I upload?",
    answer:
      "Any receipt from any store — grocery, food service suppliers, warehouse clubs. Photos or PDFs are acceptable. The AI can read both.",
  },
  {
    question: "How accurate is the AI categorization?",
    answer:
      "Very accurate for common grocery items. When the AI isn't sure, it flags it for you to confirm rather than guessing. You always have the final say.",
  },
  {
    question: "Can I use this alongside my existing CACFP software?",
    answer:
      "Yes. Works as a standalone tool. If you're using KidKare or another platform for meal counts, you can still use this just for receipts — no conflicts.",
  },
  {
    question: "Will my auditor accept these reports?",
    answer:
      "Reports show categorized expenses with the original receipt images attached. Auditors can see both the summary and source documents in one place.",
  },
  {
    question: "What about receipts from earlier this year?",
    answer:
      "Upload them anytime. You can backfill previous months by uploading old receipts and assigning them to the correct month.",
  },
];

export default function ReceiptsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          Common questions
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
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
