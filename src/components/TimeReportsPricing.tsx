const freeFeatures = [
  "Up to 2 staff members",
  "Daily SMS confirmations",
  "Electronic signatures",
  "PDF report downloads",
  "Full app access",
];

const paidFeatures = [
  "Everything in free",
  "Unlimited staff members",
  "Compliance dashboard",
  "Advanced reporting",
  "Priority support",
];

export default function TimeReportsPricing() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          Simple pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free tier — featured */}
          <div className="flex flex-col bg-white border-2 border-[#48195d] rounded-2xl overflow-hidden shadow-md hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.12)] transition-all duration-200">
            {/* Gradient top stripe */}
            <div
              style={{
                background: "linear-gradient(90deg, #48195d, #E8734A)",
                height: "4px",
              }}
            />
            <div className="p-8 flex flex-col flex-1">
              <div className="mb-5">
                <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-[#48195d] rounded-full uppercase tracking-wide">
                  Start Here
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Free</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-[#1a1a2e]">$0</span>
                <span className="text-gray-400 text-sm">/ forever</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Perfect for small daycares getting started
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {freeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#1a1a2e]"
                  >
                    <span
                      className="text-[#48195d] font-bold shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://cacfp-free-tdr.vercel.app/setup"
                className="w-full py-3 text-sm font-semibold text-center text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Get started free
              </a>
            </div>
          </div>

          {/* Paid tier */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
            <div className="mb-5 h-6" />
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Paid</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-bold text-[#1a1a2e]">$X</span>
              <span className="text-gray-400 text-sm">/ month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              For centers with more staff
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {paidFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[#1a1a2e]"
                >
                  <span
                    className="text-[#48195d] font-bold shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://cacfp-free-tdr.vercel.app/setup"
              className="w-full py-3 text-sm font-semibold text-center text-[#48195d] border border-[#48195d] rounded-xl hover:bg-[#fafafc] transition-colors min-h-[44px] flex items-center justify-center"
            >
              Start free, upgrade anytime
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
