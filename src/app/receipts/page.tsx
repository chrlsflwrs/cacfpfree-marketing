import type { Metadata } from "next";
import ReceiptsHero from "@/components/ReceiptsHero";
import ReceiptsPainPoints from "@/components/ReceiptsPainPoints";
import ReceiptsHowItWorks from "@/components/ReceiptsHowItWorks";
import ReceiptsFeatures from "@/components/ReceiptsFeatures";
import ReceiptsMenuMatch from "@/components/ReceiptsMenuMatch";
import ReceiptsAudience from "@/components/ReceiptsAudience";
import ReceiptsPricing from "@/components/ReceiptsPricing";
import ReceiptsFAQ from "@/components/ReceiptsFAQ";
import ReceiptsCTA from "@/components/ReceiptsCTA";

export const metadata: Metadata = {
  title: "CACFP Receipts — AI receipt scanning for CACFP compliance | CACFP Free",
  description:
    "Snap a photo, AI extracts and categorizes your CACFP receipts automatically. Menu matching, monthly reports, audit-ready. Free to start.",
};

export default function ReceiptsPage() {
  return (
    <>
      <ReceiptsHero />
      <ReceiptsPainPoints />
      <ReceiptsHowItWorks />
      <ReceiptsFeatures />
      <ReceiptsMenuMatch />
      <ReceiptsAudience />
      <ReceiptsPricing />
      <ReceiptsFAQ />
      <ReceiptsCTA />
    </>
  );
}
