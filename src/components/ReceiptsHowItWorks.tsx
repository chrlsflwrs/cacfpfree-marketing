const steps = [
  {
    number: 1,
    title: "Snap or upload",
    description:
      "Take a photo with your phone or upload a file. It's that simple.",
  },
  {
    number: 2,
    title: "AI extracts & categorizes",
    description:
      "Store name, date, line items, totals — all pulled automatically. Gives totals for food, supply items, AND milk.",
  },
  {
    number: 3,
    title: "Review your report",
    description:
      "See a simple breakdown of food & supply items purchased, including milk. Unallowable items are deducted automatically.",
  },
];

export default function ReceiptsHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          Three steps, every receipt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#48195d] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
