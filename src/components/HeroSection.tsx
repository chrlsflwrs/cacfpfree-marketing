"use client";

import { useState, useRef, useEffect } from "react";

const appLinks = [
  { label: "Time reports", href: "/time-reports" },
  { label: "Receipts", href: "/receipts" },
  { label: "CACFP software", href: "/software" },
];

function HeroDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-2">
      <p className="px-4 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
        Choose an app
      </p>
      {appLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="flex items-center px-4 py-2.5 text-sm text-[#1a1a2e] hover:bg-[#fafafc] hover:text-[#48195d] transition-colors"
          onClick={onClose}
        >
          {link.label}
        </a>
      ))}
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
    <section className="bg-[#fafafc] px-4 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
          Free CACFP tools that actually save you time
        </h1>
        <p className="text-lg text-gray-500 mx-auto mb-10 leading-relaxed max-w-[60ch]">
          Time reports, receipt processing, and CACFP software — built for
          daycare providers who&apos;d rather focus on kids than paperwork.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Get started free — opens app picker dropdown */}
          <div ref={ref} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="px-7 py-3.5 text-base font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-w-[190px] min-h-[44px]"
            >
              Get started free
            </button>
            {dropdownOpen && (
              <HeroDropdown onClose={() => setDropdownOpen(false)} />
            )}
          </div>

          {/* See how it works — scrolls to product cards */}
          <a
            href="#products"
            className="px-7 py-3.5 text-base font-semibold text-[#48195d] border border-[#48195d] rounded-lg hover:bg-white transition-colors min-w-[190px] min-h-[44px] flex items-center justify-center"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
