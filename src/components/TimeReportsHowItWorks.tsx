const steps = [
  {
    number: 1,
    title: "Create account",
    description:
      "Enter staff, schedules, and food service hours. One-time guided setup, about 5 minutes.",
  },
  {
    number: 2,
    title: "Staff get a daily text",
    description:
      "Every morning, each staff member gets a text with pre-filled hours. Tap YES if nothing changed.",
  },
  {
    number: 3,
    title: "Sign at month end",
    description:
      "Staff and supervisors sign electronically — right from a text link. No printing, no scanning.",
  },
  {
    number: 4,
    title: "Download for audits",
    description:
      "Pull the signed PDF anytime. Same format auditors trust. Show it on your phone when the state visits.",
  },
];

export default function TimeReportsHowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col bg-[#fafafc] border border-gray-200 rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#48195d] text-white flex items-center justify-center font-bold text-base mb-4 shrink-0">
                {step.number}
              </div>
              <h3 className="text-base font-bold text-[#1a1a2e] mb-2">
                {step.title}
              </h3>
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
