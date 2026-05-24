import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — New York City Electricians | Get a Free Quote",
  description:
    "Contact New York City Electricians for licensed electrical services across all five boroughs. Available 24/7 — call (646) 340-9882 or fill out our quick quote form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Available 24/7 — no extra charge for emergency calls. Fill out the form or call (646) 340-9882."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="New York City Electricians Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7!2d-73.9863!3d40.7279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s50+Saint+Marks+Place%2C+New+York%2C+NY+10003!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
