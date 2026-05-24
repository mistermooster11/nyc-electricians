import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Blog — New York City Electricians | Electrical Tips & Resources",
  description:
    "Expert electrical tips, NYC permit guides, and service insights from the New York City Electricians team. Panel upgrades, EV chargers, and more.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Practical electrical guides, NYC permit tips, and industry insights from our licensed electricians."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
