"use client";

import { useState } from "react";
import Link from "next/link";

type Tab = "time-reports" | "receipts" | "software";

const tabs: { id: Tab; label: string }[] = [
  { id: "time-reports", label: "Time reports" },
  { id: "receipts", label: "Receipts" },
  { id: "software", label: "CACFP software" },
];

function CheckMark() {
  return (
    <span className="text-[#48195d] font-bold shrink-0 mt-0.5" aria-hidden="true">
      ✓
    </span>
  );
}

function GradientStripe() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #48195d, #E8734A)",
        height: "4px",
      }}
    />
  );
}

function TimeReportsCards() {
  const freeFeatures = [
    "Up to 2 staff members",
    "Daily SMS confirmations",
    "Electronic signatures",
    "PDF report downloads",
    "Full app access",
  ];
  const paidFeatures = [
    "Everything in free",
    "Unlimited staff members",
    "Compliance dashboard",
    "Advanced reporting",
    "Priority support",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Free — featured */}
      <div className="flex flex-col bg-white border-2 border-[#48195d] rounded-2xl overflow-hidden shadow-md hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.12)] transition-all duration-200">
        <GradientStripe />
        <div className="flex flex-col flex-1 p-8">
          <div className="mb-5">
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#48195d] bg-[#f3e8ff] rounded-full uppercase tracking-wide">
              Start here
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Free</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold text-[#1a1a2e]">$0</span>
            <span className="text-gray-400 text-sm">/ forever</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Perfect for small daycares getting started
          </p>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                <CheckMark />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="https://cacfp-free-tdr.vercel.app/setup"
            className="w-full py-3 text-sm font-semibold text-center text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Get started free
          </a>
        </div>
      </div>

      {/* Paid */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
        <div className="mb-5 h-6" />
        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Paid</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold text-[#1a1a2e]">$X</span>
          <span className="text-gray-400 text-sm">/ month</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">For centers with more staff</p>
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {paidFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
              <CheckMark />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="https://cacfp-free-tdr.vercel.app/setup"
          className="w-full py-3 text-sm font-semibold text-center text-[#48195d] border border-[#48195d] rounded-xl hover:bg-[#fafafc] transition-colors min-h-[44px] flex items-center justify-center"
        >
          Start free, upgrade anytime
        </a>
      </div>

      {/* Custom / contact */}
      <div className="flex flex-col bg-[#fafafc] border border-gray-200 rounded-2xl p-8 shadow-sm items-center justify-center text-center hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
          Need a custom plan?
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Multi-site sponsors or large centers — let&apos;s talk about what you
          need.
        </p>
        <Link
          href="/contact"
          className="w-full py-3 text-sm font-semibold text-center text-[#E8734A] border border-[#E8734A] rounded-xl hover:bg-orange-50 transition-colors min-h-[44px] flex items-center justify-center"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

function ReceiptsCards() {
  const freeFeatures = [
    "Up to X receipts/mo",
    "AI extraction",
    "Monthly summary",
    "Single-site",
  ];
  const proFeatures = [
    "Everything in free",
    "Unlimited receipts",
    "Menu matching",
    "Detailed exports",
  ];
  const sponsorFeatures = [
    "Everything in pro",
    "Multi-site dashboard",
    "Per-site views",
    "Consolidated reports",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Free — featured */}
      <div className="flex flex-col bg-white border-2 border-[#48195d] rounded-2xl overflow-hidden shadow-md hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.12)] transition-all duration-200">
        <GradientStripe />
        <div className="flex flex-col flex-1 p-8">
          <div className="mb-5">
            <span className="inline-block px-3 py-1 text-xs font-bold text-[#48195d] bg-[#f3e8ff] rounded-full uppercase tracking-wide">
              Start here
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Free</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-5xl font-bold text-[#1a1a2e]">$0</span>
            <span className="text-gray-400 text-sm">/ forever</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">For getting started</p>
          <ul className="flex flex-col gap-3 mb-8 flex-1">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                <CheckMark />
                {f}
              </li>
            ))}
          </ul>
          {/* TODO: Update to deployed receipts app URL when ready */}
          <Link
            href="/receipts"
            className="w-full py-3 text-sm font-semibold text-center text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Get started free
          </Link>
        </div>
      </div>

      {/* Professional */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
        <div className="mb-5 h-6" />
        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Professional</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold text-[#1a1a2e]">$X</span>
          <span className="text-gray-400 text-sm">/ month</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">For more volume</p>
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {proFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
              <CheckMark />
              {f}
            </li>
          ))}
        </ul>
        {/* TODO: Update to deployed receipts app URL when ready */}
        <Link
          href="/receipts"
          className="w-full py-3 text-sm font-semibold text-center text-[#48195d] border border-[#48195d] rounded-xl hover:bg-[#fafafc] transition-colors min-h-[44px] flex items-center justify-center"
        >
          Start free, upgrade later
        </Link>
      </div>

      {/* Sponsor */}
      <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
        <div className="mb-5 h-6" />
        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Sponsor</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold text-[#1a1a2e]">$X</span>
          <span className="text-gray-400 text-sm">/ month</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">For multi-site orgs</p>
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {sponsorFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
              <CheckMark />
              {f}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="w-full py-3 text-sm font-semibold text-center text-[#E8734A] border border-[#E8734A] rounded-xl hover:bg-orange-50 transition-colors min-h-[44px] flex items-center justify-center"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

function SoftwareComingSoon() {
  return (
    <div className="flex justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm text-center max-w-xl w-full">
        <div className="mb-5">
          <span className="inline-block px-3 py-1 text-xs font-bold text-[#ca8a04] bg-[#fffee5] rounded-full uppercase tracking-wide">
            ⏰ Coming soon
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#1a1a2e] mb-3">
          CACFP software pricing coming soon
        </h3>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          Enrollment, meal counts, and meal production records — pricing will be
          announced when the platform launches. Join the waitlist to be first to
          know.
        </p>
        <a
          href="/software"
          className="inline-flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px]"
        >
          Join the waitlist
        </a>
        <p className="mt-4 text-xs text-gray-400 italic">
          Already using time reports or receipts? You&apos;re automatically on
          the list.
        </p>
      </div>
    </div>
  );
}

export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("time-reports");

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tab nav */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm whitespace-nowrap transition-colors min-h-[44px] -mb-px ${
                  activeTab === tab.id
                    ? "text-[#48195d] font-bold border-b-2 border-[#48195d]"
                    : "text-[#6b7280] font-medium hover:text-[#1a1a2e]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards swap on tab click */}
        {activeTab === "time-reports" && <TimeReportsCards />}
        {activeTab === "receipts" && <ReceiptsCards />}
        {activeTab === "software" && <SoftwareComingSoon />}
      </div>
    </section>
  );
}
