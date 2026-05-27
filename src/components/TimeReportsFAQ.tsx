"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a time report?",
    answer:
      "A time distribution report tracks how much time each staff member spends on food service tasks versus other work. It's required by CACFP and reviewed during state audits.",
  },
  {
    question: "Do my staff need to download an app?",
    answer:
      "No. Staff interact entirely through text messages. The app exists only as a backup for directors who need to manage settings, review past months, or pull reports for auditors.",
  },
  {
    question: "Will auditors accept this format?",
    answer:
      "Yes. The PDF report uses the same layout and calculations the state already trusts. The auditor sees a completed, signed form — they don't know or care that staff confirmed via text.",
  },
  {
    question: "What happens if a staff member doesn't respond?",
    answer:
      "Their default hours stand. Nothing breaks. The system alerts the director if texts fail to deliver for 3+ days so you can follow up.",
  },
  {
    question: "Can I switch from paper TDRs mid-year?",
    answer:
      "Yes. Start any month. Your report begins from the month you sign up — no need to backfill previous months.",
  },
];

export default function TimeReportsFAQ() {
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
