import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for New York City Electricians. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://newyorkcityelectricianss.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
