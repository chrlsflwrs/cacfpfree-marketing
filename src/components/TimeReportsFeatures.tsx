const features = [
  {
    emoji: "💬",
    name: "Daily SMS confirmations",
    description: "Staff confirm hours with one tap. No app needed.",
  },
  {
    emoji: "✍️",
    name: "Electronic signatures",
    description: "Staff and supervisor sign from a text link at month end.",
  },
  {
    emoji: "📄",
    name: "Audit-ready PDF reports",
    description: "Download signed reports in the format auditors expect.",
  },
  {
    emoji: "🧮",
    name: "Auto-calculated hours",
    description: "Food service, non-food, breaks — math always balances.",
  },
  {
    emoji: "📅",
    name: "Closed days built in",
    description:
      "Mark holidays or closures — system skips texts automatically.",
  },
];

export default function TimeReportsFeatures() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — feature list */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">
              Everything you need
            </h2>
            <ul className="flex flex-col gap-6">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                    {feature.emoji}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1a2e] mb-1">
                      {feature.name}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — personas */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-8">
              Built for two people
            </h2>

            <div className="flex flex-col gap-8">
              {/* Director */}
              <div>
                <p className="text-2xl mb-3" aria-hidden="true">
                  👩‍💼
                </p>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">
                  The director
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  You set it up once, then the system runs itself. You see who&apos;s
                  submitted, who&apos;s missing, and when reports are ready to sign.
                  Pull audit-ready PDFs whenever you need them.
                </p>
              </div>

              {/* Staff member */}
              <div>
                <p className="text-2xl mb-3" aria-hidden="true">
                  👩‍🏫
                </p>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">
                  The staff member
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  You get one text each morning. If your hours are the same, tap
                  YES and go back to work. The whole thing takes 2 seconds. No
                  app, no login, no forms.
                </p>
              </div>
            </div>

            <blockquote className="mt-8 border-l-4 border-[#48195d] pl-4 text-gray-500 italic text-sm leading-relaxed">
              &ldquo;If your staff have to open an app every day, something is broken.
              The text IS the product.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
