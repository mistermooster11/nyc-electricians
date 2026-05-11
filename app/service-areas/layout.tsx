import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "New York City Electricians serves all five NYC boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Licensed electricians near you.",
  alternates: {
    canonical: "https://newyorkcityelectricianss.com/service-areas",
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
