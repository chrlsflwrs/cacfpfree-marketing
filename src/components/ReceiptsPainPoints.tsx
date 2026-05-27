const painPoints = [
  {
    title: "Receipts everywhere",
    description:
      "Shoeboxes, car consoles, kitchen drawers. Half of them are faded by the time you need them.",
  },
  {
    title: "Month-end scramble",
    description:
      "Every month you spend nights and weekends sorting and entering receipts manually.",
  },
  {
    title: "Audit anxiety",
    description:
      "Missing or incomplete records could mean paying back reimbursements you already spent.",
  },
  {
    title: "Manual data entry",
    description:
      "Typing every line item from every receipt into a spreadsheet. Errors happen. Things get missed.",
  },
];

export default function ReceiptsPainPoints() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          Sound familiar?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-[#fafafc] border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-lg font-bold text-[#dc2626] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  ✗
                </span>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-1">{point.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
