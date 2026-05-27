"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type AppLink = { label: string; href: string; external: boolean };

const loginLinks: AppLink[] = [
  { label: "Time reports", href: "https://cacfp-free-tdr.vercel.app/login", external: true },
  // TODO: Update to deployed receipts app URL when ready
  { label: "Receipts", href: "/receipts", external: false },
  { label: "CACFP software", href: "/software", external: false },
];

const signupLinks: AppLink[] = [
  { label: "Time reports", href: "https://cacfp-free-tdr.vercel.app/setup", external: true },
  // TODO: Update to deployed receipts app URL when ready
  { label: "Receipts", href: "/receipts", external: false },
  { label: "CACFP software", href: "/software", external: false },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Time Reports", href: "/time-reports" },
  { label: "Receipts", href: "/receipts" },
  { label: "CACFP Software", href: "/software" },
  { label: "Pricing", href: "/pricing" },
];

function AppDropdown({ links, onClose }: { links: AppLink[]; onClose: () => void }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-2 overflow-hidden">
      <p className="px-4 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
        Choose an app
      </p>
      {links.map((link) =>
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

function ButtonWithDropdown({
  label,
  variant,
  links,
}: {
  label: string;
  variant: "outline" | "solid";
  links: AppLink[];
}) {
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
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={
          variant === "solid"
            ? "px-4 py-2 text-sm font-medium text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px]"
            : "px-4 py-2 text-sm font-medium text-[#48195d] border border-[#48195d] rounded-lg hover:bg-[#fafafc] transition-colors min-h-[44px]"
        }
      >
        {label}
      </button>
      {open && <AppDropdown links={links} onClose={() => setOpen(false)} />}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex flex-col leading-snug shrink-0">
            <span className="text-lg font-bold text-[#48195d]">CACFP Free</span>
            <span className="text-[11px] text-gray-500 leading-none">
              powered by CACFP Solutions
            </span>
          </a>

          {/* Center nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#48195d] border-b-2 border-[#48195d] pb-0.5"
                    : "text-gray-500 hover:text-[#1a1a2e]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <ButtonWithDropdown label="Log in" variant="outline" links={loginLinks} />
            {pathname === "/software" ? (
              <a
                href="#waitlist"
                className="px-4 py-2 text-sm font-medium text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] inline-flex items-center"
              >
                Join the waitlist
              </a>
            ) : (
              <ButtonWithDropdown label="Sign up free" variant="solid" links={signupLinks} />
            )}
          </div>

          {/* Mobile: signup button + hamburger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {pathname === "/software" ? (
              <a
                href="#waitlist"
                className="px-4 py-2 text-sm font-medium text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] inline-flex items-center"
              >
                Join the waitlist
              </a>
            ) : (
              <ButtonWithDropdown label="Sign up free" variant="solid" links={signupLinks} />
            )}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 text-gray-500 hover:text-[#1a1a2e] min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-3 rounded-lg text-sm font-medium min-h-[44px] flex items-center ${
                  pathname === link.href
                    ? "text-[#48195d] bg-purple-50"
                    : "text-[#1a1a2e] hover:bg-gray-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="https://cacfp-free-tdr.vercel.app/login"
              className="w-full px-4 py-3 text-sm font-medium text-center text-[#48195d] border border-[#48195d] rounded-lg min-h-[44px] flex items-center justify-center"
            >
              Log in
            </a>
            <a
              href="https://cacfp-free-tdr.vercel.app/setup"
              className="w-full px-4 py-3 text-sm font-medium text-center text-white bg-[#48195d] rounded-lg min-h-[44px] flex items-center justify-center hover:bg-[#3a1449] transition-colors"
            >
              Sign up free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
