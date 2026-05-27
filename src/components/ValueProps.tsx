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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-200"
            >
              <span className="text-3xl mb-3" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="text-base font-bold text-[#1a1a2e] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
