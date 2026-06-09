import { Fragment } from "react";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      className="mx-auto"
      aria-label="Included"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="#16a34a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <span className="block text-center text-[#d1d5db] font-bold text-lg" aria-label="Not included">
      —
    </span>
  );
}

type CellValue = "check" | "dash" | string;

function Cell({ value }: { value: CellValue }) {
  if (value === "check") return <CheckIcon />;
  if (value === "dash") return <DashIcon />;
  return <span className="text-sm text-[#1a1a2e]">{value}</span>;
}

interface Row {
  feature: string;
  free: CellValue;
  paid: CellValue;
  sponsor: CellValue;
}

interface Section {
  title: string;
  rows: Row[];
}

const sections: Section[] = [
  {
    title: "CACFP TIME REPORTS",
    rows: [
      { feature: "Daily SMS confirmations", free: "check", paid: "check", sponsor: "check" },
      { feature: "Electronic signatures", free: "check", paid: "check", sponsor: "check" },
      { feature: "PDF report downloads", free: "check", paid: "check", sponsor: "check" },
      { feature: "Staff members", free: "Up to 2", paid: "Unlimited", sponsor: "Unlimited" },
      { feature: "Compliance dashboard", free: "dash", paid: "check", sponsor: "check" },
      { feature: "Multi-site management", free: "dash", paid: "dash", sponsor: "check" },
    ],
  },
];

const receiptsRows = [
  "AI receipt scanning",
  "Auto-categorization",
  "Monthly summaries",
  "Receipts per month",
  "Menu vs. receipt matching",
  "Multi-site dashboard",
];

const softwareRows = [
  "Enrollment management",
  "Meal counts & attendance",
  "Meal production records",
];

export default function PricingComparison() {
  return (
    <section className="py-20 px-4 bg-[#fafafc]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-12">
          What&apos;s included at every level
        </h2>

        <p className="text-xs text-gray-400 text-center mb-2 sm:hidden">← Scroll to see all features →</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm bg-white" style={{ minWidth: "500px" }}>
            <thead>
              <tr className="bg-[#fafafc] border-b border-gray-200">
                <th
                  className="text-left px-4 py-4 font-semibold text-[#1a1a2e]"
                  style={{
                    position: "sticky",
                    left: 0,
                    background: "#fafafc",
                    zIndex: 2,
                    minWidth: "140px",
                    boxShadow: "2px 0 4px rgba(0,0,0,0.06)",
                  }}
                >
                  Feature
                </th>
                <th className="text-center px-4 py-4 font-semibold text-[#1a1a2e]" style={{ minWidth: "100px" }}>
                  Free
                </th>
                <th className="text-center px-4 py-4 font-semibold text-[#1a1a2e]" style={{ minWidth: "100px" }}>
                  Paid
                </th>
                <th className="text-center px-4 py-4 font-semibold text-[#1a1a2e]" style={{ minWidth: "100px" }}>
                  Sponsor
                </th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <Fragment key={section.title}>
                  <tr className="bg-[#fafafc] border-t border-b border-gray-200">
                    <td
                      colSpan={4}
                      className="px-4 py-3 text-xs font-bold text-[#48195d] uppercase tracking-widest"
                      style={{
                        position: "sticky",
                        left: 0,
                        background: "#fafafc",
                        zIndex: 1,
                      }}
                    >
                      {section.title}
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td
                        className="px-4 py-4 text-[#1a1a2e]"
                        style={{
                          position: "sticky",
                          left: 0,
                          background: "white",
                          zIndex: 1,
                          boxShadow: "2px 0 4px rgba(0,0,0,0.06)",
                        }}
                      >
                        {row.feature}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={row.free} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={row.paid} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <Cell value={row.sponsor} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}

              {/* Receipts — coming soon */}
              <tr className="bg-[#fafafc] border-t border-b border-gray-200">
                <td
                  colSpan={4}
                  className="px-4 py-3 text-xs font-bold text-[#48195d] uppercase tracking-widest"
                  style={{
                    position: "sticky",
                    left: 0,
                    background: "#fafafc",
                    zIndex: 1,
                  }}
                >
                  CACFP RECEIPTS (coming soon)
                </td>
              </tr>
              {receiptsRows.map((row, i) => (
                <tr
                  key={row}
                  className="border-b border-gray-100"
                >
                  <td
                    className="px-4 py-4 text-[#1a1a2e]"
                    style={{
                      position: "sticky",
                      left: 0,
                      background: "white",
                      zIndex: 1,
                      boxShadow: "2px 0 4px rgba(0,0,0,0.06)",
                    }}
                  >
                    {row}
                  </td>
                  <td
                    colSpan={3}
                    className="px-4 py-4 text-center text-gray-400 italic text-sm"
                  >
                    {i === 0 ? "Pricing announced at launch" : ""}
                  </td>
                </tr>
              ))}

              {/* Software — coming soon */}
              <tr className="bg-[#fafafc] border-t border-b border-gray-200">
                <td
                  colSpan={4}
                  className="px-4 py-3 text-xs font-bold text-[#48195d] uppercase tracking-widest"
                  style={{
                    position: "sticky",
                    left: 0,
                    background: "#fafafc",
                    zIndex: 1,
                  }}
                >
                  CACFP SOFTWARE (coming soon)
                </td>
              </tr>
              {softwareRows.map((row, i) => (
                <tr
                  key={row}
                  className={`border-b border-gray-100 ${i === softwareRows.length - 1 ? "border-b-0" : ""}`}
                >
                  <td
                    className="px-4 py-4 text-[#1a1a2e]"
                    style={{
                      position: "sticky",
                      left: 0,
                      background: "white",
                      zIndex: 1,
                      boxShadow: "2px 0 4px rgba(0,0,0,0.06)",
                    }}
                  >
                    {row}
                  </td>
                  <td
                    colSpan={3}
                    className="px-4 py-4 text-center text-gray-400 italic text-sm"
                  >
                    {i === 0 ? "Pricing announced at launch" : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
