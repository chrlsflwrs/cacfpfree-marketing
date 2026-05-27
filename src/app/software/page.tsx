import type { Metadata } from "next";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareModules from "@/components/SoftwareModules";
import SoftwareSMSExamples from "@/components/SoftwareSMSExamples";
import SoftwareComparison from "@/components/SoftwareComparison";
import SoftwareEcosystem from "@/components/SoftwareEcosystem";
import SoftwareAvailableNow from "@/components/SoftwareAvailableNow";
import SoftwareWaitlist from "@/components/SoftwareWaitlist";

export const metadata: Metadata = {
  title: "CACFP Software — Enrollment, Meal Counts & Compliance | CACFP Free",
  description:
    "Full CACFP software that runs on SMS. Enrollment, meal counts, meal production records — the system texts you, you confirm. Coming soon. Join the waitlist.",
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
