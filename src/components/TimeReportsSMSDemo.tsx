export default function TimeReportsSMSDemo() {
  return (
    <section id="sms-demo" className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            What your staff actually sees
          </h2>
          <p className="text-gray-500 text-lg max-w-[52ch] mx-auto leading-relaxed">
            The entire daily experience is one text message. No app to download,
            no password to remember, no forms to fill out.
          </p>
        </div>

        {/* Phone mockup */}
        <div className="max-w-[400px] mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
            {/* Status bar */}
            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500">
                Messages
              </span>
              <span className="text-xs text-gray-400">9:41 AM</span>
            </div>

            {/* Contact header */}
            <div className="border-b border-gray-100 px-4 py-3 text-center">
              <p className="text-xs text-gray-400">
                CACFP Free · Today 7:02 AM
              </p>
            </div>

            {/* Message thread */}
            <div className="flex flex-col gap-1 p-4">
              {/* Incoming */}
              <div className="flex justify-start">
                <div className="bg-[#f3f0f5] text-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm leading-relaxed">
                  Good morning Maya. Your hours for today: 7:00 AM – 5:00 PM |
                  3 hrs food | 7 hrs other. Same as usual?
                </div>
              </div>
              <p className="text-[11px] text-gray-400 text-center my-1">
                7:02 AM
              </p>

              {/* Outgoing */}
              <div className="flex justify-end">
                <div className="bg-[#48195d] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm font-medium">
                  YES
                </div>
              </div>
              <p className="text-[11px] text-gray-400 text-center my-1">
                7:03 AM
              </p>

              {/* Incoming confirmation */}
              <div className="flex justify-start">
                <div className="bg-[#f3f0f5] text-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm leading-relaxed">
                  ✓ You&apos;re all set for today. Have a great day!
                </div>
              </div>
            </div>

            {/* Reply bar (decorative) */}
            <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
