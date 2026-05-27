import type { Metadata } from "next";
import TimeReportsHero from "@/components/TimeReportsHero";
import TimeReportsHowItWorks from "@/components/TimeReportsHowItWorks";
import TimeReportsSMSDemo from "@/components/TimeReportsSMSDemo";
import TimeReportsFeatures from "@/components/TimeReportsFeatures";
import TimeReportsPricing from "@/components/TimeReportsPricing";
import TimeReportsFAQ from "@/components/TimeReportsFAQ";
import TimeReportsCTA from "@/components/TimeReportsCTA";

export const metadata: Metadata = {
  title: "CACFP Time Reports — Track staff hours by text | CACFP Free",
  description:
    "Daily SMS time confirmations, electronic signatures, and audit-ready PDF reports. Free for up to 2 staff. No app to download.",
};

export default function TimeReportsPage() {
  return (
    <>
      <TimeReportsHero />
      <TimeReportsHowItWorks />
      <TimeReportsSMSDemo />
      <TimeReportsFeatures />
      <TimeReportsPricing />
      <TimeReportsFAQ />
      <TimeReportsCTA />
    </>
  );
}
