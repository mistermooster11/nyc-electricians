import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with New York City Electricians. Call (646) 340-9882 for same-day scheduling across all five NYC boroughs, or send us a message online.",
  alternates: {
    canonical: "https://newyorkcityelectricianss.com/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
