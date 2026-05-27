export default function SoftwareComparison() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            Not another login-and-navigate platform
          </h2>
          <p className="text-gray-500 text-lg max-w-[55ch] mx-auto leading-relaxed">
            Traditional CACFP software makes you do the work. We flip that
            around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
            <h3 className="text-lg font-semibold text-[#1a1a2e] mb-5">
              Traditional CACFP software
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Log in every day to enter data",
                "Navigate menus to find the right screen",
                "Manual data entry for meal counts",
                "Staff need training to use it",
                "Desktop-first, painful on a phone",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#1a1a2e]"
                >
                  <span className="text-[#dc2626] font-bold shrink-0 mt-0.5">
                    ✗
                  </span>
                  {item}
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-[#1a1a2e] mt-1">
                <span className="text-[#ca8a04] font-bold shrink-0 mt-0.5">
                  ⚠
                </span>
                $100–$2,000+/month
              </li>
            </ul>
          </div>

          {/* CACFP Free */}
          <div className="bg-[#f3e8ff] border-2 border-[#48195d] rounded-2xl p-6 shadow-md hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.15)] transition-all duration-200">
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-lg font-semibold text-[#1a1a2e]">
                CACFP Free software
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white bg-[#48195d] rounded">
                Our approach
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "System texts you — no login needed",
                "One text, one response — done",
                "Pre-filled from your roster and menu",
                "No training — just reply to a text",
                "Mobile-first, works on any phone",
                "Free tier available",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#1a1a2e]"
                >
                  <span className="text-[#16a34a] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
