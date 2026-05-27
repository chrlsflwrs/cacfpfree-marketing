export default function ReceiptsHero() {
  return (
    <section className="bg-[#fafafc] px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column — text */}
          <div className="flex-1 lg:w-[55%] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] leading-tight mb-5">
              Snap a photo. AI handles the rest.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[55ch] mx-auto lg:mx-0">
              Stop drowning in CACFP receipts. Take a picture, and our AI
              extracts the data, categorizes expenses for compliance, and keeps
              you audit-ready — all month, every month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/receipts"
                className="px-7 py-3.5 text-base font-semibold text-white bg-[#48195d] rounded-lg hover:bg-[#3a1449] transition-colors min-w-[260px] min-h-[44px] flex items-center justify-center"
              >
                Start free — upload your first receipt
              </a>
              <a
                href="#how-it-works"
                className="px-7 py-3.5 text-base font-semibold text-[#48195d] border border-[#48195d] rounded-lg hover:bg-white transition-colors min-w-[180px] min-h-[44px] flex items-center justify-center"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right column — receipt scan mockup */}
          <div className="w-full lg:w-[45%] max-w-sm mx-auto lg:mx-0">
            {/* Raw receipt */}
            <div className="bg-white border border-dashed border-gray-300 rounded-xl shadow-sm p-5 mb-3">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest text-center mb-3">
                Receipt
              </p>
              <div className="text-center mb-3">
                <p className="font-bold text-[#1a1a2e] font-mono">H-E-B Grocery</p>
                <p className="text-xs text-gray-400 font-mono">May 14, 2026</p>
              </div>
              <div className="font-mono text-xs text-[#1a1a2e] space-y-1">
                <div className="flex justify-between">
                  <span>Whole milk 1gal</span>
                  <span>$4.29</span>
                </div>
                <div className="flex justify-between">
                  <span>Chicken nuggets</span>
                  <span>$8.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Green beans (3)</span>
                  <span>$5.37</span>
                </div>
                <div className="flex justify-between">
                  <span>Paper towels</span>
                  <span>$6.49</span>
                </div>
                <div className="flex justify-between">
                  <span>Apple juice</span>
                  <span>$3.79</span>
                </div>
                <div className="border-t border-dotted border-gray-300 pt-1 mt-1 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$28.93</span>
                </div>
              </div>
            </div>

            {/* Transform indicator */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-[#48195d] font-semibold px-2">
                ↓ AI categorized ↓
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Categorized result */}
            <div className="bg-[#f8f4fb] border border-[#e0d6e8] rounded-xl shadow-sm p-5">
              <p className="text-[11px] font-semibold text-[#48195d] uppercase tracking-widest mb-3">
                Categorized
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Food items</span>
                  <span className="text-sm font-bold text-[#1a1a2e]">$22.44</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Supply items</span>
                  <span className="text-sm text-[#1a1a2e]">$6.49</span>
                </div>
                <div className="border-t border-[#e0d6e8] pt-2 mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Milk Purchased</span>
                  <span className="text-sm font-semibold text-[#48195d]">1 Gallon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
