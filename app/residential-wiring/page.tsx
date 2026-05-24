import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Residential Wiring NYC — New York City Electricians",
  description:
    "Expert residential wiring services across all five NYC boroughs. New construction wiring, rewiring old homes, recessed lighting, and circuit additions by licensed electricians.",
};

export default function ResidentialWiringPage() {
  return (
    <>
      <PageHeroSection
        title="Residential Wiring"
        subtitle="Complete residential wiring services for NYC apartments, brownstones, and homes — new construction, rewires, and circuit additions done right."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Residential Wiring" },
        ]}
      />
      <ServiceDetailSection
        activeService="Residential Wiring"
        sidebarImage="/images/electrician-with-tools-residential-site.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Residential Electrical Wiring in New York City"
        intro={[
          "Whether you're gut-renovating a Brooklyn brownstone, finishing a basement in Queens, or simply need additional circuits for a growing household, our licensed electricians deliver residential wiring that's safe, clean, and built to last.",
          "We work on new construction, full rewires of older homes, and targeted circuit additions. All work is performed to NYC Electrical Code standards with permits where required.",
        ]}
        whatWeDo={[
          "Full home rewiring for pre-war and post-war NYC buildings",
          "New construction electrical rough-in and finish wiring",
          "Dedicated circuits for kitchens, laundry, HVAC, and home offices",
          "Recessed lighting, dimmer installation, and lighting design",
          "USB outlet and smart switch installation",
          "GFCI and AFCI protection upgrades for code compliance",
        ]}
        whyChooseUs={[
          "Licensed NYC electricians with 40+ years of residential experience",
          "Expert in pre-war wiring challenges common in NYC buildings",
          "All permits pulled and city inspections coordinated by our team",
          "Clean, professional installs — we protect your space and clean up after",
          "Upfront pricing with no surprises on the final invoice",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
