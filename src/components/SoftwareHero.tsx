export default function SoftwareHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #48195d 0%, #6b2d7b 40%, #8b3fa0 100%)",
        borderRadius: "0 0 24px 24px",
      }}
      className="py-20 px-4 text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-[#fffee5] text-[#ca8a04] mb-8">
          ⏰ Coming Soon
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Full CACFP software that doesn&apos;t feel like software
        </h1>

        <p
          className="text-lg leading-relaxed max-w-[60ch] mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Enrollment, meal counts, meal production records, and compliance
          reporting — all handled the same way: the system asks, you confirm.
          No data entry. No menus to navigate. No training required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-[#E8734A] rounded-lg hover:bg-[#d4663f] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Join the waitlist
          </a>
          <a
            href="#available-now"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center text-center"
          >
            Already using our other tools? You&apos;re first in line
          </a>
        </div>
      </div>
    </section>
  );
}
