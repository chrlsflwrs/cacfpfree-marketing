const modules = [
  {
    icon: "👥",
    title: "Enrollment management",
    description:
      "Digital enrollment forms, income eligibility tracking, and electronic signatures. No more paper files in a cabinet you hope the auditor never opens.",
    features: [
      "Digital enrollment forms",
      "Income eligibility tracking",
      "Electronic parent signatures",
      "Expiration reminders",
    ],
    borderColor: "#E8734A",
  },
  {
    icon: "🍲",
    title: "Meal counts & attendance",
    description:
      "Record which children ate which meals — fast, accurate, and audit-ready. The system knows your roster and asks about who's missing, not who's present.",
    features: [
      "Daily meal count by child",
      "Attendance tracking built in",
      "SMS-based daily confirmations",
      "Missing child alerts",
    ],
    borderColor: "#48195d",
  },
  {
    icon: "📋",
    title: "Meal production records",
    description:
      "Track what was prepared, how much, and for how many. Linked to your menu so you're not re-entering food items every day.",
    features: [
      "Pre-filled from your menu",
      "Quantity and leftover tracking",
      "Food component compliance",
      "Monthly production reports",
    ],
    borderColor: "#6b8f8a",
  },
];

export default function SoftwareModules() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            What&apos;s included
          </h2>
          <p className="text-gray-500 text-lg max-w-[60ch] mx-auto leading-relaxed">
            Three core modules that cover the daily CACFP workflows your center
            needs — without the complexity of traditional software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              style={{ borderTop: `3px solid ${mod.borderColor}` }}
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{mod.icon}</div>
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {mod.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                      <span className="text-[#16a34a] font-bold mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
