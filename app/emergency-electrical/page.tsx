import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "24/7 Emergency Electrician NYC — New York City Electricians",
  description:
    "24-hour emergency electrician serving all five NYC boroughs. Sparking outlets, power outages, burning smells — we dispatch within the hour. Call (646) 340-9882.",
};

export default function EmergencyElectricalPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Electrical"
        subtitle="24/7 emergency electrical service across all five NYC boroughs — licensed electricians on-site within the hour when it matters most."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Electrical" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Electrical"
        sidebarImage="/images/electrician-inspecting-residential-electrical-panel.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="24/7 Emergency Electrical Service in NYC"
        intro={[
          "Electrical emergencies are dangerous and unpredictable. A sparking outlet, a burning smell from your panel, or a total loss of power demands an immediate response — not a voicemail and a callback tomorrow morning.",
          "New York City Electricians provides true 24/7 emergency service across all five boroughs. When you call, we dispatch a licensed electrician immediately. No after-hours surcharges. No runaround. Just fast, professional help when you need it most.",
        ]}
        whatWeDo={[
          "Emergency panel inspection and repair after tripping or overload",
          "Sparking outlet and burning smell diagnosis and safe repair",
          "Total power loss investigation and restoration",
          "Storm damage and flood-related electrical safety assessment",
          "Tripped main breaker diagnosis — including utility-side issues",
          "Emergency lighting circuit repair for commercial properties",
        ]}
        whyChooseUs={[
          "True 24/7 availability — licensed electricians ready around the clock",
          "Response within 60 minutes anywhere in the five boroughs",
          "No after-hours surcharge — the same fair rate day or night",
          "Licensed, insured, and background-checked technicians",
          "Over 40 years handling NYC electrical emergencies safely",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
