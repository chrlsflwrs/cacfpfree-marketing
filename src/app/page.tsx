import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProductCards from "@/components/ProductCards";
import ValueProps from "@/components/ValueProps";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: { absolute: "CACFP Free — Free CACFP tools for daycare providers" },
  description:
    "Free time reports, receipt processing, and CACFP compliance software for daycare providers. No app to download. Audit-ready. Start free.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CACFP Free",
  description: "Free CACFP tools for daycare providers",
  url: "https://cacfpfree.com",
  parentOrganization: {
    "@type": "Organization",
    name: "CACFP Solutions",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProductCards />
      <ValueProps />
      <TrustBar />
    </>
  );
}
