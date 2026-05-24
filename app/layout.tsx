import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const SITE_URL = "https://www.nyc-electricians.com";

export const metadata: Metadata = {
  title: {
    default: "New York City Electricians | Licensed NYC Electrical Contractor",
    template: "%s | New York City Electricians",
  },
  description:
    "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV charger installation, wiring, outlet repair, and 24-hour emergency service. Upfront pricing guaranteed.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "New York City Electricians",
    title: "New York City Electricians | Licensed NYC Electrical Contractor",
    description:
      "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV charger installation, wiring, outlet repair, and 24-hour emergency service. Upfront pricing guaranteed.",
    images: [
      {
        url: "/images/electrician-examining-circuit-breaker-panel.jpg",
        width: 1200,
        height: 630,
        alt: "Licensed NYC Electricians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City Electricians | Licensed NYC Electrical Contractor",
    description:
      "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV charger installation, wiring, outlet repair, and 24-hour emergency service.",
    images: ["/images/electrician-examining-circuit-breaker-panel.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "New York City Electricians",
  url: SITE_URL,
  telephone: "+16463409882",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Saint Marks Place",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10003",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7282,
    longitude: -73.9857,
  },
  areaServed: [
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  image: `${SITE_URL}/images/electrician-examining-circuit-breaker-panel.jpg`,
  description:
    "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV charger installation, wiring, outlet repair, and 24-hour emergency service. Upfront pricing guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PageTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
