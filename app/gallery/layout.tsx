import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View completed electrical projects by New York City Electricians — panel upgrades, EV charger installs, rewires, lighting, and more across all five NYC boroughs.",
  alternates: {
    canonical: "https://newyorkcityelectricianss.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
