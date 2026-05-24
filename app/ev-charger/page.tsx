import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "EV Charger Installation NYC — New York City Electricians",
  description:
    "Licensed NYC EV charger installation for Level 2 home charging stations. Panel assessment, permit handling, and expert installation across all five boroughs.",
};

export default function EVChargerPage() {
  return (
    <>
      <PageHeroSection
        title="EV Charger Installation"
        subtitle="Licensed Level 2 EV charger installation for NYC homes and garages — panel assessment, permits, and professional installation included."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "EV Charger Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="EV Charger Installation"
        sidebarImage="/images/electric-vehicle-charging-home-driveway.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="EV Charger Installation in New York City"
        intro={[
          "Charging your electric vehicle at home is faster, more convenient, and more cost-effective than relying on public charging stations. A Level 2 home charger delivers a full charge overnight — but it requires a licensed electrician to install it correctly and safely.",
          "New York City Electricians handles every step: assessing your panel capacity, pulling the required permits, installing the charger, and scheduling the city inspection. We work with all major EV charger brands.",
        ]}
        whatWeDo={[
          "Level 2 (240V) EV charger installation for all major vehicle brands",
          "Panel capacity assessment and upgrade recommendation if needed",
          "Dedicated 50-amp or 60-amp circuit installation",
          "Indoor and outdoor charger mounting in garages and driveways",
          "NYC permit application and DOB inspection coordination",
          "Installation of NEMA 14-50 outlets for plug-in charger setups",
        ]}
        whyChooseUs={[
          "NYC licensed electricians — EV charger installation requires a licensed pro",
          "We handle all permits so your installation is code-compliant and insurable",
          "Experience with condos, co-ops, brownstones, and private garages",
          "Upfront pricing — know your total cost before we start",
          "Manufacturer-compatible installs for Tesla, ChargePoint, Enel X, and more",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
