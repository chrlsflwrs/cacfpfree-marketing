export default function SoftwareEcosystem() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            Better together — one account, all your CACFP tools
          </h2>
          <p className="text-gray-500 text-lg max-w-[60ch] mx-auto leading-relaxed">
            Already using CACFP Free time reports or receipts? Your CACFP
            software account connects to the same dashboard. One login. One
            place for everything.
          </p>
        </div>

        {/* Three tool cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              icon: "⏰",
              title: "CACFP Time Reports",
              desc: "Staff hours tracked daily via text",
            },
            {
              icon: "🧾",
              title: "CACFP Receipts",
              desc: "AI-powered receipt scanning",
            },
            {
              icon: "🏢",
              title: "CACFP Software",
              desc: "Enrollment, menus, meal tracking, compliance",
            },
          ].map((tool) => (
            <div
              key={tool.title}
              className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <p className="font-semibold text-[#1a1a2e] text-sm mb-1">
                {tool.title}
              </p>
              <p className="text-xs text-gray-500">{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="text-center text-2xl text-gray-400 mb-6">↓</div>

        {/* Result card */}
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🛡️</div>
          <p className="font-semibold text-[#1a1a2e] text-lg mb-2">
            One compliance dashboard
          </p>
          <p className="text-gray-500 text-sm max-w-[55ch] mx-auto leading-relaxed">
            See your entire CACFP operation in one view — what&apos;s complete,
            what&apos;s missing, what needs your attention
          </p>
        </div>
      </div>
    </section>
  );
}
