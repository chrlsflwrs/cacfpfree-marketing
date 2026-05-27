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
      {/* Hero */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Every tool starts free. No credit card required. Upgrade only when you need
            more.
          </p>
        </div>
      </section>

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
