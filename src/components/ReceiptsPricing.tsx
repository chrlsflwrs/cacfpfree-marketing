const freeFeatures = [
  "Up to X receipts/mo",
  "AI extraction",
  "Monthly summary",
  "Single-site",
];

const proFeatures = [
  "Everything in free",
  "Unlimited receipts",
  "Menu matching",
  "Detailed exports",
];

const sponsorFeatures = [
  "Everything in pro",
  "Multi-site dashboard",
  "Per-site views",
  "Consolidated reports",
];

function CheckIcon() {
  return (
    <span className="text-[#48195d] font-bold shrink-0 mt-0.5" aria-hidden="true">
      ✓
    </span>
  );
}

export default function ReceiptsPricing() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-3">
          Plans that grow with you
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Start free. Upgrade when you need more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  Start here
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Free</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-[#1a1a2e]">$0</span>
                <span className="text-gray-400 text-sm">/ forever</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">For getting started</p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {freeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#1a1a2e]"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/receipts"
                className="w-full py-3 text-sm font-semibold text-center text-white bg-[#48195d] rounded-xl hover:bg-[#3a1449] transition-colors min-h-[44px] flex items-center justify-center"
              >
                Get started free
              </a>
            </div>
          </div>

          {/* Professional tier */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
            <div className="mb-5 h-6" />
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">
              Professional
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-bold text-[#1a1a2e]">$X</span>
              <span className="text-gray-400 text-sm">/ month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">For more volume</p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {proFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[#1a1a2e]"
                >
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="/receipts"
              className="w-full py-3 text-sm font-semibold text-center text-[#48195d] border border-[#48195d] rounded-xl hover:bg-[#fafafc] transition-colors min-h-[44px] flex items-center justify-center"
            >
              Start free, upgrade later
            </a>
          </div>

          {/* Sponsor tier */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200">
            <div className="mb-5 h-6" />
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">Sponsor</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-bold text-[#1a1a2e]">$X</span>
              <span className="text-gray-400 text-sm">/ month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">For multi-site orgs</p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {sponsorFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[#1a1a2e]"
                >
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="w-full py-3 text-sm font-semibold text-center text-[#48195d] border border-[#48195d] rounded-xl hover:bg-[#fafafc] transition-colors min-h-[44px] flex items-center justify-center"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
