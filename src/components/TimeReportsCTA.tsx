export default function TimeReportsCTA() {
  return (
    <section
      style={{ background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)" }}
      className="py-20 px-4"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Stop chasing paper time sheets
        </h2>
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Set it up in 5 minutes. Your staff get their first text tomorrow
          morning.
        </p>
        <a
          href="https://cacfp-free-tdr.vercel.app/setup"
          className="flex sm:inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#E8734A] rounded-xl hover:bg-[#d4663f] transition-colors min-h-[44px]"
        >
          Start free — no credit card needed
        </a>
      </div>
    </section>
  );
}
