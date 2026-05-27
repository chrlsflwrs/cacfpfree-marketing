const values = [
  {
    icon: "📱",
    title: "No app to download",
    subtitle: "Works on any phone or tablet",
  },
  {
    icon: "🤖",
    title: "AI does the work",
    subtitle: "Confirm, don't re-enter",
  },
  {
    icon: "🛡️",
    title: "Audit-ready",
    subtitle: "Always compliant",
  },
  {
    icon: "💰",
    title: "Free to start",
    subtitle: "No credit card needed",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 px-4 bg-[#fafafc]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row border border-gray-200 rounded-2xl overflow-hidden bg-white">
          {values.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-1 flex-col items-center text-center p-6 ${
                index < values.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-gray-200"
                  : ""
              }`}
            >
              <span
                className="text-2xl mb-3 bg-[#f3e8ff] rounded-xl w-12 h-12 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <h3 className="text-sm font-bold text-[#1a1a2e] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
