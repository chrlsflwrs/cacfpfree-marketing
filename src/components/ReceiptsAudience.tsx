const audiences = [
  {
    icon: "🏢",
    title: "Multi-site sponsors",
    description:
      "See receipts from all your centers in one place. Each site uploads their own. You see it all on a dashboard.",
  },
  {
    icon: "🏠",
    title: "Single-site daycares",
    description:
      "One center, one person managing receipts. Upload as you shop. No more shoeboxes.",
  },
  {
    icon: "👥",
    title: "After-school programs",
    description:
      "At-risk programs with tight budgets and strict compliance. Every dollar accounted for, automatically.",
  },
];

export default function ReceiptsAudience() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          Built for everyone in CACFP
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-[#fafafc] border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {audience.icon}
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{audience.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
