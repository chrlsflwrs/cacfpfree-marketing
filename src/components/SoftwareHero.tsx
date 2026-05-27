export default function SoftwareHero() {
  return (
    <section className="py-20 px-4 bg-[#fafafc] text-center">
      <div className="max-w-3xl mx-auto">
        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-[#fffee5] text-[#ca8a04] mb-8">
          ⏰ Coming Soon
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
          Full CACFP software that doesn&apos;t feel like software
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed max-w-[60ch] mx-auto mb-10">
          Enrollment, meal counts, meal production records, and compliance
          reporting — all handled the same way: the system asks, you confirm.
          No data entry. No menus to navigate. No training required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="px-7 py-3.5 text-base font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] inline-flex items-center"
          >
            Join the waitlist
          </a>
          <a
            href="#available-now"
            className="px-7 py-3.5 text-base font-semibold text-[#48195d] border border-[#48195d] rounded-lg hover:bg-white transition-colors min-h-[44px] inline-flex items-center text-center"
          >
            Already using our other tools? You&apos;re first in line
          </a>
        </div>
      </div>
    </section>
  );
}
