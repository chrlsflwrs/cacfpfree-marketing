export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4" style={{ paddingTop: "2rem", paddingBottom: "calc(env(safe-area-inset-bottom) + 2rem)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          © 2026 CACFP Solutions. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <a href="/privacy" className="text-gray-500 hover:text-[#48195d] transition-colors">
            Privacy policy
          </a>
          <a href="/terms" className="text-gray-500 hover:text-[#48195d] transition-colors">
            Terms of service
          </a>
          <a href="/contact" className="text-gray-500 hover:text-[#48195d] transition-colors">
            Contact us
          </a>
        </nav>
      </div>
    </footer>
  );
}
