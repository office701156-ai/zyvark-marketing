import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ProductGrid } from "@/components/home/ProductGrid";
import { LiveMarket } from "@/components/LiveMarket";
import { WhyZyvark } from "@/components/home/WhyZyvark";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeatureRows } from "@/components/home/FeatureRows";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/home/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductGrid />
      <LiveMarket />
      <WhyZyvark />
      <HowItWorks />
      <FeatureRows />
      <Testimonials />
      <CTABand />
    </>
  );
}
