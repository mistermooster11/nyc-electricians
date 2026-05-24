export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/when-to-upgrade-your-electrical-panel/",
    image: "/images/electrician-examining-circuit-breaker-panel.jpg",
    date: "15",
    monthYear: "May '26",
    category: "Panel Upgrades",
    categoryHref: "/blog/",
    title: "5 Signs It's Time to Upgrade Your Electrical Panel",
    excerpt:
      "Frequent breaker trips, flickering lights, and a fuse box are all red flags. Learn when a panel upgrade is no longer optional for NYC homeowners.",
  },
  {
    slug: "/blog/ev-charger-installation-nyc-guide/",
    image: "/images/electric-vehicle-charging-home-driveway.jpg",
    date: "08",
    monthYear: "May '26",
    category: "EV Chargers",
    categoryHref: "/blog/",
    title: "The NYC Homeowner's Guide to Level 2 EV Charger Installation",
    excerpt:
      "Thinking about adding a home EV charger? Here's what you need to know about permits, panel capacity, and installation costs before you book a job.",
  },
];
