function SMSCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ boxShadow: "0 4px 20px rgba(72,25,93,0.06)" }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
    >
      <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
          {label}
        </span>
        <span className="text-xs text-gray-400">SMS</span>
      </div>
      <div className="flex flex-col gap-2 p-4">{children}</div>
    </div>
  );
}

function IncomingBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div
        style={{
          background: "#f3e8ff",
          borderRadius: "14px 14px 14px 4px",
        }}
        className="text-[#1a1a2e] px-4 py-3 max-w-[90%] text-sm leading-relaxed"
      >
        {children}
      </div>
    </div>
  );
}

function OutgoingBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div
        style={{
          background: "#48195d",
          borderRadius: "14px 14px 4px 14px",
        }}
        className="text-white px-4 py-3 max-w-[90%] text-sm font-medium"
      >
        {children}
      </div>
    </div>
  );
}

function ConfirmationBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div
        style={{
          background: "#ecfdf5",
          color: "#065f46",
          borderRadius: "14px 14px 14px 4px",
        }}
        className="px-4 py-3 max-w-[90%] text-sm leading-relaxed"
      >
        {children}
      </div>
    </div>
  );
}

export default function SoftwareSMSExamples() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            Same philosophy, same daily experience
          </h2>
          <p className="text-gray-500 text-lg max-w-[55ch] mx-auto leading-relaxed">
            Just like time reports — the system texts you, you confirm or
            correct, and you&apos;re done. No app to open. No forms to fill out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Enrollment */}
          <SMSCard label="Enrollment">
            <IncomingBubble>
              Reminder: 3 enrollment forms expire in 14 days. Tap to send
              renewal links to parents:
            </IncomingBubble>
            <div className="flex flex-wrap gap-2 pl-1">
              <span className="px-3 py-1.5 text-xs font-medium text-[#48195d] border border-[#48195d] rounded-lg bg-white">
                Send all 3
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-[#48195d] border border-[#48195d] rounded-lg bg-white">
                Review first
              </span>
            </div>
          </SMSCard>

          {/* Meal counts */}
          <SMSCard label="Meal Counts">
            <IncomingBubble>
              Good morning! All 12 Little Roosters children here for lunch
              today?
            </IncomingBubble>
            <OutgoingBubble>NO</OutgoingBubble>
            <IncomingBubble>Who&apos;s missing? Tap the names:</IncomingBubble>
            <div className="flex flex-wrap gap-2 pl-1">
              <span className="px-3 py-1.5 text-xs font-medium text-[#48195d] border border-[#48195d] rounded-lg bg-white">
                Emma W.
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-[#48195d] border border-[#48195d] rounded-lg bg-white">
                Jayden R.
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-[#48195d] border border-[#48195d] rounded-lg bg-white">
                Sofia M.
              </span>
            </div>
          </SMSCard>

          {/* Meal production */}
          <SMSCard label="Meal Production">
            <IncomingBubble>
              Today&apos;s lunch menu: chicken nuggets, green beans, milk, fruit
              cup. Prepared for 12 children. All correct?
            </IncomingBubble>
            <OutgoingBubble>YES</OutgoingBubble>
            <ConfirmationBubble>
              ✓ Recorded. Have a great lunch!
            </ConfirmationBubble>
          </SMSCard>
        </div>
      </div>
    </section>
  );
}
