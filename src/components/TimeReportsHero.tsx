export default function TimeReportsHero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #48195d 0%, #6b2d7b 40%, #8b3fa0 100%)",
        borderRadius: "0 0 24px 24px",
      }}
      className="px-4 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — text */}
          <div className="flex-1 lg:w-3/5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Track CACFP time in 1 tap
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-[55ch] mx-auto lg:mx-0"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Your staff get a daily text. They tap YES. The time report is
              done. Electronic signatures, audit-ready PDFs, zero paperwork.
              Free for up to 2 staff members.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://cacfp-free-tdr.vercel.app/setup"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-[#E8734A] rounded-lg hover:bg-[#d4663f] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Start free — takes 5 minutes
              </a>
              <a
                href="#how-it-works"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white rounded-lg transition-colors min-h-[44px] flex items-center justify-center"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right column — SMS phone mockup */}
          <div className="w-full lg:w-2/5 max-w-sm mx-auto lg:mx-0">
            <div
              style={{
                transform: "rotate(2deg)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
              className="bg-white rounded-[20px] overflow-hidden"
            >
              {/* Status bar */}
              <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">
                  Messages
                </span>
                <span className="text-xs text-gray-400">9:41 AM</span>
              </div>

              {/* Contact header */}
              <div className="border-b border-gray-100 px-4 py-3 text-center">
                <p className="text-xs text-gray-400">
                  CACFP Free · Today 7:02 AM
                </p>
              </div>

              {/* Message thread */}
              <div className="flex flex-col gap-1 p-4">
                {/* Incoming */}
                <div className="flex justify-start">
                  <div
                    style={{
                      background: "#f3e8ff",
                      borderRadius: "14px 14px 14px 4px",
                    }}
                    className="text-[#1a1a2e] px-4 py-3 max-w-[85%] text-sm leading-relaxed"
                  >
                    Good morning Maya. Your hours for today: 7:00–5:00 | 3 hrs
                    food | 7 hrs other. Same as usual?
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 text-center my-1">
                  7:02 AM
                </p>

                {/* Outgoing */}
                <div className="flex justify-end">
                  <div
                    style={{
                      background: "#48195d",
                      borderRadius: "14px 14px 4px 14px",
                    }}
                    className="text-white px-4 py-3 max-w-[85%] text-sm font-medium"
                  >
                    YES
                  </div>
                </div>
                <p className="text-[11px] text-gray-400 text-center my-1">
                  7:03 AM
                </p>

                {/* Confirmation */}
                <div className="flex justify-start">
                  <div
                    style={{
                      background: "#ecfdf5",
                      color: "#065f46",
                      borderRadius: "14px 14px 14px 4px",
                    }}
                    className="px-4 py-3 max-w-[85%] text-sm leading-relaxed"
                  >
                    ✓ You&apos;re all set for today. Have a great day!
                  </div>
                </div>
              </div>

              {/* Reply bar (decorative) */}
              <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                  Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
