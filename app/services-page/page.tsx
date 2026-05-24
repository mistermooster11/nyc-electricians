import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Our Services — New York City Electricians | NYC Electrical Services",
  description:
    "Panel upgrades, residential wiring, outlet repair, EV charger installation, and 24/7 emergency electrical service across all five NYC boroughs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Licensed NYC electrical services — panel upgrades, EV chargers, residential wiring, outlet repair, and 24/7 emergency response across all five boroughs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
