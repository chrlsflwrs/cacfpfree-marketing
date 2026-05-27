import Link from "next/link";

export default function SoftwareAvailableNow() {
  return (
    <section id="available-now" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            Start with what&apos;s available now
          </h2>
          <p className="text-gray-500 text-lg max-w-[60ch] mx-auto leading-relaxed">
            CACFP software is coming soon. But you can get started today with
            our other free tools — and you&apos;ll be first in line when the
            full platform launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">
              CACFP time reports
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Automated daily tracking with SMS confirmations, electronic
              signatures, and audit-ready PDFs. Free for up to 2 staff.
            </p>
            <a
              href="https://cacfp-free-tdr.vercel.app/setup"
              className="text-sm font-semibold text-[#E8734A] hover:underline"
            >
              Start free now →
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🧾</div>
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">
              CACFP receipts
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Snap a photo, AI handles the rest. Organized by month,
              categorized for compliance, ready for any audit.
            </p>
            {/* TODO: Update to deployed receipts app URL when ready */}
            <Link
              href="/receipts"
              className="text-sm font-semibold text-[#E8734A] hover:underline"
            >
              Start free now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
