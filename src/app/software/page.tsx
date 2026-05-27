import type { Metadata } from "next";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareModules from "@/components/SoftwareModules";
import SoftwareSMSExamples from "@/components/SoftwareSMSExamples";
import SoftwareComparison from "@/components/SoftwareComparison";
import SoftwareEcosystem from "@/components/SoftwareEcosystem";
import SoftwareAvailableNow from "@/components/SoftwareAvailableNow";
import SoftwareWaitlist from "@/components/SoftwareWaitlist";

export const metadata: Metadata = {
  title: { absolute: "CACFP Software — Enrollment, meal counts & compliance (coming soon)" },
  description:
    "Full CACFP compliance platform. Enrollment management, meal counts, meal production records. SMS-based daily workflow. Join the waitlist.",
};

export default function SoftwarePage() {
  return (
    <>
      <SoftwareHero />
      <SoftwareModules />
      <SoftwareSMSExamples />
      <SoftwareComparison />
      <SoftwareEcosystem />
      <SoftwareAvailableNow />
      <SoftwareWaitlist />
    </>
  );
}
