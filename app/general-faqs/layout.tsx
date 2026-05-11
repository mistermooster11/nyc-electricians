import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about our NYC electrical services — pricing, scheduling, service areas, and what to expect from New York City Electricians.",
  alternates: {
    canonical: "https://newyorkcityelectricianss.com/general-faqs",
  },
};

export default function GeneralFaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
