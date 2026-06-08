import type { Metadata } from "next";
import ReceiptsHero from "@/components/ReceiptsHero";
import ReceiptsPainPoints from "@/components/ReceiptsPainPoints";
import ReceiptsHowItWorks from "@/components/ReceiptsHowItWorks";
import ReceiptsFeatures from "@/components/ReceiptsFeatures";
import ReceiptsMenuMatch from "@/components/ReceiptsMenuMatch";
import ReceiptsAudience from "@/components/ReceiptsAudience";
import ReceiptsPricing from "@/components/ReceiptsPricing";
import ReceiptsFAQ from "@/components/ReceiptsFAQ";
import ReceiptsWaitlist from "@/components/ReceiptsWaitlist";

export const metadata: Metadata = {
  title: { absolute: "CACFP Receipts — AI-powered receipt scanning for daycares" },
  description:
    "Snap a photo of any receipt. AI extracts data, categorizes expenses, and keeps you audit-ready. Menu vs. receipt matching. Start free.",
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
      <ReceiptsWaitlist />
    </>
  );
}
