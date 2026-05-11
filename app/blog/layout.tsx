import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Electrical tips, safety guides, and NYC code updates from the licensed team at New York City Electricians. Stay informed about your home and commercial electrical systems.",
  alternates: {
    canonical: "https://newyorkcityelectricianss.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
