"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type AppLink = { label: string; href: string; external: boolean };

const appLinks: AppLink[] = [
  { label: "Time reports", href: "https://cacfp-free-tdr.vercel.app/setup", external: true },
  // TODO: Update to deployed receipts app URL when ready
  { label: "Receipts", href: "/receipts", external: false },
  { label: "CACFP software", href: "/software", external: false },
];

const pills = ["No app to download", "Free to start", "Audit-ready"];

const stats = [
  { number: "30+", label: "years CACFP experience" },
  { number: "20%", label: "avg. reimbursement increase" },
  { number: "20hrs", label: "saved per month" },
  { number: "100%", label: "free to start" },
];

function HeroDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-2">
      <p className="px-4 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
        Choose an app
      </p>
      {appLinks.map((link) =>
        link.external ? (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center px-4 py-2.5 text-sm text-[#1a1a2e] hover:bg-[#fafafc] hover:text-[#48195d] transition-colors"
            onClick={onClose}
          >
            {link.label}
          </a>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center px-4 py-2.5 text-sm text-[#1a1a2e] hover:bg-[#fafafc] hover:text-[#48195d] transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  );
}

export default function HeroSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #48195d 0%, #6b2d7b 40%, #8b3fa0 100%)",
          borderRadius: "0 0 24px 24px",
        }}
        className="px-4 py-16 sm:py-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left column */}
            <div className="flex-1 text-center lg:text-left">
              {/* Pill badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                    className="rounded-full px-3.5 py-1.5 text-[13px] text-white flex items-center gap-1.5"
                  >
                    <span aria-hidden="true">✓</span>
                    {pill}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Free CACFP tools that actually save you time
              </h1>
              <p
                className="text-lg leading-relaxed mb-8 max-w-[55ch] mx-auto lg:mx-0"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Time reports, receipt processing, and CACFP software — built
                for daycare providers who&apos;d rather focus on kids than
                paperwork.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Orange CTA with dropdown */}
                <div ref={ref} className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-[#E8734A] rounded-lg hover:bg-[#d4663f] transition-colors min-h-[44px]"
                  >
                    Get started free
                  </button>
                  {dropdownOpen && (
                    <HeroDropdown onClose={() => setDropdownOpen(false)} />
                  )}
                </div>

                {/* White outline secondary CTA */}
                <a
                  href="#products"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center hover:bg-white/20"
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Right column — SMS phone mockup */}
            <div className="w-full lg:w-2/5 max-w-[320px] mx-auto lg:mx-0 hidden sm:block">
              <div
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
                className="bg-white rounded-[20px] overflow-hidden"
              >
                {/* Status bar */}
                <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">
                    Messages
                  </span>
                  <span className="text-xs text-gray-400">9:41 AM</span>
                </div>

                {/* Contact header */}
                <div className="border-b border-gray-100 px-4 py-3 text-center">
                  <p className="text-xs text-gray-400">
                    CACFP Free · Today 7:02 AM
                  </p>
                </div>

                {/* Message thread */}
                <div className="flex flex-col gap-1 p-4">
                  {/* Incoming */}
                  <div className="flex justify-start">
                    <div
                      style={{
                        background: "#f3e8ff",
                        borderRadius: "14px 14px 14px 4px",
                      }}
                      className="text-[#1a1a2e] px-4 py-3 max-w-[85%] text-sm leading-relaxed"
                    >
                      Good morning Maya. Your hours for today: 7:00–5:00 | 3
                      hrs food | 7 hrs other. Same as usual?
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 text-center my-1">
                    7:02 AM
                  </p>

                  {/* Outgoing */}
                  <div className="flex justify-end">
                    <div
                      style={{
                        background: "#48195d",
                        borderRadius: "14px 14px 4px 14px",
                      }}
                      className="text-white px-4 py-3 max-w-[85%] text-sm font-medium"
                    >
                      YES
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 text-center my-1">
                    7:03 AM
                  </p>

                  {/* Confirmation */}
                  <div className="flex justify-start">
                    <div
                      style={{
                        background: "#ecfdf5",
                        color: "#065f46",
                        borderRadius: "14px 14px 14px 4px",
                      }}
                      className="px-4 py-3 max-w-[85%] text-sm leading-relaxed"
                    >
                      ✓ You&apos;re all set for today. Have a great day!
                    </div>
                  </div>
                </div>

                {/* Reply bar */}
                <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                    Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof stats bar */}
      <section className="bg-white py-10 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#48195d]">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
