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

function AppDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-2 overflow-hidden">
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

export default function PricingCTA() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <section
      style={{ background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)" }}
      className="py-20 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start free today
        </h2>
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Every tool starts with a free plan. No credit card. No commitment.
          Just pick a tool and go.
        </p>
        <div ref={ref} className="relative w-full sm:w-auto sm:inline-block">
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#E8734A] rounded-xl hover:bg-[#d4663f] transition-colors min-h-[44px]"
          >
            Get started free
          </button>
          {open && <AppDropdown onClose={() => setOpen(false)} />}
        </div>
      </div>
    </section>
  );
}
