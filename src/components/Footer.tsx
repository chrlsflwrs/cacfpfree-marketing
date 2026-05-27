export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
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
          <a
            href="mailto:support@cacfpsolutions.com"
            className="text-gray-500 hover:text-[#48195d] transition-colors"
          >
            support@cacfpsolutions.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
