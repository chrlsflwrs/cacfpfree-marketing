export default function TimeReportsHero() {
  return (
    <section className="bg-[#fafafc] px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — text */}
          <div className="flex-1 lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-5">
              Track CACFP time in 1 tap
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[55ch] mx-auto lg:mx-0">
              Your staff get a daily text. They tap YES. The time report is
              done. Electronic signatures, audit-ready PDFs, zero paperwork.
              Free for up to 2 staff members.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/time-reports"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Start free — takes 5 minutes
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-[#48195d] border border-[#48195d] rounded-lg hover:bg-white transition-colors min-h-[44px] flex items-center justify-center"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right column — SMS mockup */}
          <div className="w-full lg:w-2/5 max-w-sm mx-auto lg:mx-0">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
                SMS Preview
              </p>

              {/* Incoming message bubble */}
              <div className="flex justify-start mb-4">
                <div className="bg-[#f3f0f5] text-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] text-sm leading-relaxed">
                  Good morning Maya. Your hours for today: 7:00–5:00 | 3 hrs
                  food program | 7 hrs other. Same as usual?
                </div>
              </div>

              {/* Reply buttons */}
              <div className="flex gap-3 mt-2">
                <button className="flex-1 py-2.5 text-sm font-semibold text-gray-500 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors min-h-[44px]">
                  NO
                </button>
                <button className="flex-1 py-2.5 text-sm font-semibold text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px]">
                  YES ✓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
