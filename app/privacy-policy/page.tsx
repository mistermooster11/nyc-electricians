import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";

export const metadata: Metadata = {
  title: "Privacy Policy — New York City Electricians",
  description:
    "Privacy Policy for New York City Electricians. Learn how we collect and use your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeroSection
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section style={{ padding: "4rem 2rem", maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ marginBottom: "2rem" }}>
          <em>Last updated: May 2026</em>
        </p>
        <p>
          New York City Electricians (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates this website
          and is committed to protecting your privacy. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have regarding your information.
        </p>
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Information We Collect</h2>
        <p>We collect information you provide directly to us, including when you:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
          <li>Fill out our contact or service request form</li>
          <li>Call us directly at (646) 340-9882</li>
          <li>Send us an email</li>
        </ul>
        <p>
          The types of information we may collect include your name, phone number, email address,
          service address, and a description of the electrical service you need help with.
        </p>
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
          <li>Respond to your service inquiries and schedule appointments</li>
          <li>Communicate with you about the status of your service request</li>
          <li>Send appointment reminders or follow-up communications</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Contact Us</h2>
        <p>
          <strong>New York City Electricians</strong><br />
          50 Saint Marks Place, New York, NY 10003<br />
          Phone: <a href="tel:+16463409882">(646) 340-9882</a><br />
          Email: <a href="mailto:info@newyorkcityelectricianss.com">info@newyorkcityelectricianss.com</a>
        </p>
      </section>
    </>
  );
}
