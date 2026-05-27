const menuItems = [
  { label: "Chicken nuggets", status: "ok" },
  { label: "Green beans", status: "ok" },
  { label: "Apple juice", status: "ok" },
  { label: "Whole milk", status: "warn" },
  { label: "Fruit cups", status: "ok" },
];

const receiptItems = [
  { label: "Chicken nuggets", status: "ok" },
  { label: "Green beans", status: "ok" },
  { label: "Apple juice", status: "ok" },
  { label: "No milk receipt found", status: "warn" },
  { label: "Fruit cups", status: "ok" },
];

export default function ReceiptsMenuMatch() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-4">
            Menu vs. receipts matching
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Upload your menu alongside your receipts, and AI checks whether what
            you bought matches what you planned to serve. Catch problems before
            the auditor does.
          </p>

          {/* Comparison */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Menu column */}
              <div className="flex-1 p-6 sm:border-r border-gray-200">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  This week&apos;s menu
                </p>
                <ul className="space-y-3">
                  {menuItems.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-sm">
                      {item.status === "ok" ? (
                        <span className="text-[#16a34a] font-bold shrink-0" aria-label="ok">
                          ✓
                        </span>
                      ) : (
                        <span className="text-[#ca8a04] font-bold shrink-0" aria-label="warning">
                          ⚠
                        </span>
                      )}
                      <span
                        className={
                          item.status === "warn"
                            ? "text-[#ca8a04] font-medium"
                            : "text-[#1a1a2e]"
                        }
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center arrow */}
              <div className="flex items-center justify-center px-4 py-3 sm:py-0 bg-[#fafafc] sm:bg-white border-t border-b sm:border-none border-gray-100">
                <span className="text-gray-400 text-lg font-bold">↔</span>
              </div>

              {/* Receipts column */}
              <div className="flex-1 p-6">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Receipts this week
                </p>
                <ul className="space-y-3">
                  {receiptItems.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-sm">
                      {item.status === "ok" ? (
                        <span className="text-[#16a34a] font-bold shrink-0" aria-label="ok">
                          ✓
                        </span>
                      ) : (
                        <span className="text-[#ca8a04] font-bold shrink-0" aria-label="warning">
                          ⚠
                        </span>
                      )}
                      <span
                        className={
                          item.status === "warn"
                            ? "text-[#ca8a04] font-medium"
                            : "text-[#1a1a2e]"
                        }
                      >
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Warning alert */}
            <div className="border-t border-amber-200 bg-[#fffbeb] px-6 py-4 flex items-start gap-3">
              <span className="text-[#ca8a04] text-base shrink-0 mt-0.5" aria-hidden="true">
                ⚠
              </span>
              <p className="text-sm text-[#92400e] leading-relaxed">
                <span className="font-semibold">1 item needs attention:</span> Whole milk
                is on your menu but no matching receipt was found this week. Did you
                purchase it elsewhere or use existing stock?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
