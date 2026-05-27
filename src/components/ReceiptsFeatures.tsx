const features = [
  {
    icon: "🤖",
    title: "AI-powered scanning",
    description:
      "Extracts store name, date, line items, and totals from any receipt photo. No manual entry needed.",
  },
  {
    icon: "🗂️",
    title: "Auto-categorization",
    description:
      "AI separates food and supply items. Unallowable program expenses are deducted automatically.",
  },
  {
    icon: "📊",
    title: "Monthly reports",
    description:
      "Categorized expense summaries by month — ready to hand to your auditor or attach to your claim.",
  },
  {
    icon: "📱",
    title: "Works on any phone",
    description:
      "Snap a receipt right after you shop. No special app to download — just your phone's camera and a browser.",
  },
];

export default function ReceiptsFeatures() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          What you get
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#fafafc] border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-3xl mb-3" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
