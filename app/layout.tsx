import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = "https://newyorkcityelectricianss.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "New York City Electricians | Licensed NYC Electrical Contractor",
    template: "%s | New York City Electricians",
  },
  description:
    "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV charger installation, wiring, lighting, and 24-hour emergency service. Upfront pricing guaranteed.",
  keywords: [
    "NYC electricians",
    "New York City electrician",
    "licensed electrician NYC",
    "panel upgrade NYC",
    "EV charger installation NYC",
    "electrical contractor New York",
    "24 hour electrician NYC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "New York City Electricians",
    title: "New York City Electricians | Licensed NYC Electrical Contractor",
    description:
      "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV chargers, wiring, lighting & 24-hour emergency service. Upfront pricing.",
    images: [
      {
        url: "/images/IMG_9688-1024x682.jpg",
        width: 1024,
        height: 682,
        alt: "New York City Electricians — Licensed NYC Electrical Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City Electricians | Licensed NYC Electrical Contractor",
    description:
      "Licensed, insured NYC electricians serving all five boroughs. Panel upgrades, EV chargers, wiring, lighting & 24-hour emergency service.",
    images: ["/images/IMG_9688-1024x682.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "New York City Electricians",
  url: BASE_URL,
  telephone: "+1-646-340-9882",
  email: "info@newyorkcityelectricianss.com",
  description:
    "Licensed, insured electrical contractor serving all five NYC boroughs. Over 40 years of residential and commercial electrical work. Upfront pricing and 24-hour emergency service.",
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
    latitude: 40.7279,
    longitude: -73.9863,
  },
  areaServed: [
    { "@type": "Borough", name: "Manhattan" },
    { "@type": "Borough", name: "Brooklyn" },
    { "@type": "Borough", name: "Queens" },
    { "@type": "Borough", name: "The Bronx" },
    { "@type": "Borough", name: "Staten Island" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=50+Saint+Marks+Place+New+York+NY+10003",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check",
  sameAs: [
    "https://www.facebook.com/nycelectricians",
    "https://www.instagram.com/nycelectricians",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
