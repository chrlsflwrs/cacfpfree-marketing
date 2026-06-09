import Link from "next/link";

type BadgeStyle = {
  label: string;
  bg: string;
  text: string;
};

type Product = {
  badge: BadgeStyle;
  icon: string;
  name: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  ctaExternal: boolean;
  ctaVariant: "solid" | "outline";
  priceNote: string;
  featured: boolean;
};

const products: Product[] = [
  {
    badge: { label: "Live now", bg: "bg-green-100", text: "text-green-700" },
    icon: "🕐",
    name: "CACFP Time Reports",
    description:
      "Automated daily time tracking with text message reminders, electronic signatures, and audit-ready PDF reports.",
    features: [
      "Daily SMS confirmations",
      "Electronic signatures",
      "PDF downloads for audits",
      "Free for up to 2 staff",
    ],
    cta: "Start free →",
    ctaHref: "https://cacfp-free-tdr.vercel.app/setup",
    ctaExternal: true,
    ctaVariant: "solid",
    priceNote: "Free forever · Paid plans from $X/mo",
    featured: true,
  },
  {
    badge: { label: "Coming soon", bg: "bg-amber-100", text: "text-amber-700" },
    icon: "🧾",
    name: "CACFP Receipts",
    description:
      "Snap a photo of any receipt. AI extracts the data, organizes it by month, and keeps you audit-ready.",
    features: [
      "AI-powered receipt scanning",
      "Auto-categorization",
      "Menu vs. receipt matching",
      "Monthly export reports",
    ],
    cta: "Learn more",
    ctaHref: "/receipts",
    ctaExternal: false,
    ctaVariant: "outline",
    priceNote: "Free tier available · Paid from $X/mo",
    featured: false,
  },
  {
    badge: {
      label: "Coming soon",
      bg: "bg-amber-100",
      text: "text-amber-700",
    },
    icon: "🏢",
    name: "CACFP Software",
    description:
      "Full compliance platform — enrollment, meal counts, meal production records, and reporting. All in one place.",
    features: [
      "Enrollment management",
      "Daily meal count tracking",
      "Meal production records",
      "Compliance reporting",
    ],
    cta: "Learn more",
    ctaHref: "/software",
    ctaExternal: false,
    ctaVariant: "solid",
    priceNote: "Free tier available · Paid from $X/mo",
    featured: false,
  },
];

const ctaClass = (variant: "solid" | "outline") =>
  `w-full py-3 text-sm font-semibold text-center rounded-lg transition-colors min-h-[44px] flex items-center justify-center ${
    variant === "solid"
      ? "bg-[#48195d] text-white hover:bg-[#3a1449]"
      : "border border-[#48195d] text-[#48195d] hover:bg-[#fafafc]"
  }`;

export default function ProductCards() {
  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`flex flex-col rounded-2xl border overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(72,25,93,0.08)] transition-all duration-200 ${
                product.featured
                  ? "border-[#48195d] shadow-md"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {/* Gradient top stripe for featured */}
              {product.featured && (
                <div
                  style={{
                    background: "linear-gradient(90deg, #48195d, #E8734A)",
                    height: "4px",
                  }}
                />
              )}

              {/* Card content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Badge + icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${product.badge.bg} ${product.badge.text}`}
                  >
                    {product.badge.label}
                  </span>
                  <span className="text-2xl" aria-hidden="true">
                    {product.icon}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#1a1a2e]"
                    >
                      <span
                        className="text-green-600 mt-0.5 shrink-0 font-bold"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                {product.ctaExternal ? (
                  <a href={product.ctaHref} className={ctaClass(product.ctaVariant)}>
                    {product.cta}
                  </a>
                ) : (
                  <Link href={product.ctaHref} className={ctaClass(product.ctaVariant)}>
                    {product.cta}
                  </Link>
                )}

                {/* Price note */}
                <p className="mt-3 text-xs text-center text-gray-400">
                  {product.priceNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
