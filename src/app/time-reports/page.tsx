import type { Metadata } from "next";
import TimeReportsHero from "@/components/TimeReportsHero";
import TimeReportsHowItWorks from "@/components/TimeReportsHowItWorks";
import TimeReportsSMSDemo from "@/components/TimeReportsSMSDemo";
import TimeReportsFeatures from "@/components/TimeReportsFeatures";
import TimeReportsPricing from "@/components/TimeReportsPricing";
import TimeReportsFAQ from "@/components/TimeReportsFAQ";
import TimeReportsCTA from "@/components/TimeReportsCTA";

export const metadata: Metadata = {
  title: { absolute: "CACFP Time Reports — Track staff time with daily texts" },
  description:
    "Automated CACFP time distribution reports. Staff get a daily text, tap YES, done. Electronic signatures, audit-ready PDFs. Free for up to 2 staff.",
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
