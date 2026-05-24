import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Outlet & Switch Repair NYC — New York City Electricians",
  description:
    "Fast outlet and switch repair, replacement, and installation across all five NYC boroughs. GFCI upgrades, dead outlet diagnosis, and same-day service available.",
};

export default function OutletRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Outlet & Switch Repair"
        subtitle="Dead outlets, broken switches, and GFCI failures fixed fast — same-day service available across all five NYC boroughs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Outlet & Switch Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Outlet & Switch Repair"
        sidebarImage="/images/electrician-installing-outlet-wall.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Outlet & Switch Repair in New York City"
        intro={[
          "A dead outlet or a sparking switch is more than an inconvenience — it can be a sign of a wiring problem that poses a real fire or shock risk. Our licensed NYC electricians diagnose and repair outlet and switch issues quickly, safely, and at a fair price.",
          "From a single dead outlet to a full-apartment GFCI upgrade, we handle jobs of every size across Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.",
        ]}
        whatWeDo={[
          "Diagnosis and repair of dead or non-functioning outlets",
          "Outlet replacement — standard, GFCI, USB, and smart outlets",
          "Switch replacement — single-pole, 3-way, dimmer, and smart switches",
          "GFCI outlet installation in kitchens, bathrooms, and garages (code required)",
          "Whole-home GFCI and AFCI audit and upgrade",
          "Tamper-resistant outlet installation for child safety",
        ]}
        whyChooseUs={[
          "Same-day and next-day appointments available in most of NYC",
          "Licensed electricians — not handymen — for every job",
          "Flat-rate pricing quoted before any work begins",
          "We identify the root cause, not just replace the outlet",
          "Available 24/7 for sparking outlets and electrical emergencies",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
