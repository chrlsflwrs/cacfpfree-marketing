import type { Metadata } from "next";
import PricingTabs from "@/components/PricingTabs";
import PricingComparison from "@/components/PricingComparison";
import PricingFAQ from "@/components/PricingFAQ";
import PricingCTA from "@/components/PricingCTA";

export const metadata: Metadata = {
  title: { absolute: "Pricing — CACFP Free" },
  description:
    "Simple, transparent pricing for CACFP tools. Every tool starts free. No credit card required. Upgrade only when you need more.",
};

export default function PricingPage() {
  return (
    <>
      {/* Small purple gradient header */}
      <div
        style={{
          background: "linear-gradient(135deg, #48195d 0%, #6b2d7b 100%)",
        }}
        className="px-4 py-12 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Simple, transparent pricing
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Every tool starts free. No credit card required. Upgrade only when
            you need more.
          </p>
        </div>
      </div>

      {/* Product tabs + pricing cards */}
      <PricingTabs />

      {/* Full feature comparison table */}
      <PricingComparison />

      {/* Pricing-specific FAQ */}
      <PricingFAQ />

      {/* Final CTA with app dropdown */}
      <PricingCTA />
    </>
  );
}
