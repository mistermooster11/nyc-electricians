import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Electrical Panel Upgrade NYC — New York City Electricians",
  description:
    "Licensed NYC electricians specializing in electrical panel upgrades and service upgrades across all five boroughs. 200-amp upgrades, permit handling, and same-week scheduling.",
};

export default function PanelUpgradePage() {
  return (
    <>
      <PageHeroSection
        title="Panel Upgrade"
        subtitle="Safe, code-compliant electrical panel upgrades for NYC homes and businesses — permits handled, inspections passed, guaranteed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Panel Upgrade" },
        ]}
      />
      <ServiceDetailSection
        activeService="Panel Upgrade"
        sidebarImage="/images/electrician-installing-circuit-breaker-panel.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Electrical Panel Upgrade in New York City"
        intro={[
          "An outdated or undersized electrical panel is one of the most common — and most dangerous — electrical problems in NYC homes and apartment buildings. Whether you have a fuse box, a 100-amp panel, or a panel that constantly trips breakers, our licensed electricians will upgrade your service to meet today's demands safely and up to code.",
          "We handle everything: the permit application, scheduling the DOB inspection, and delivering a clean, compliant installation. Most panel upgrades are completed in a single day.",
        ]}
        whatWeDo={[
          "100-amp to 200-amp service upgrades for residential properties",
          "200-amp to 400-amp upgrades for larger homes and multi-unit buildings",
          "Fuse box replacement with modern circuit breaker panels",
          "Sub-panel installation for garages, additions, and workshops",
          "Load calculation and circuit mapping before any work begins",
          "NYC permit application and DOB inspection coordination",
        ]}
        whyChooseUs={[
          "NYC Master Electrician license — all work is fully permitted and inspected",
          "Over 40 years of panel upgrade experience across all five boroughs",
          "Upfront quote with no hidden fees before work begins",
          "Same-week scheduling available for most jobs",
          "24/7 emergency panel service when you can't wait",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
