"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

// [TODO: Replace all posts with real content before launch]
const posts = [
  {
    slug: "do-i-need-200-amp-panel",
    title: "Do I Need a 200-Amp Panel? A New York City Homeowner's Guide",
    excerpt:
      "Most NYC apartments and brownstones were wired for 60 or 100 amps — decades before EV chargers, central A/C, and modern appliances became standard. Here's how to know if your panel is holding you back.",
    date: "May 2026",
    category: "Electrical Panels",
  },
  {
    slug: "ev-charger-nyc-guide",
    title: "Level 1 vs. Level 2 EV Chargers: What NYC Homeowners Need to Know",
    excerpt:
      "A Level 2 charger installs in your garage or parking spot and charges 6–8x faster than a standard outlet. Here's what the electrical side of that installation actually involves — and what to ask your electrician.",
    date: "April 2026",
    category: "EV Chargers",
  },
  {
    slug: "outdated-wiring-signs",
    title: "5 Signs Your NYC Home Has Outdated Wiring",
    excerpt:
      "Knob-and-tube wiring, aluminum wiring from the 1970s, and undersized service panels are common in New York City's older building stock. Here's what to look for — and why it matters.",
    date: "March 2026",
    category: "Electrical Safety",
  },
  {
    slug: "tripping-breaker-causes",
    title: "Why Does My Breaker Keep Tripping? The 4 Most Common Causes",
    excerpt:
      "A breaker that trips once is doing its job. A breaker that trips repeatedly is telling you something. Here are the four most common causes — and what each one means for your electrical system.",
    date: "February 2026",
    category: "Troubleshooting",
  },
  {
    slug: "electrical-permit-nyc",
    title: "Do You Need a Permit for Electrical Work in NYC? A Plain-Language Explainer",
    excerpt:
      "New circuits, panel upgrades, and EV charger installs all require permits in New York City. Here's what the permit process actually involves — and why working with a licensed electrician who pulls permits matters.",
    date: "January 2026",
    category: "Permits & Code",
  },
  {
    slug: "smoke-detector-requirements-nyc",
    title: "NYC Smoke Detector Requirements: What Every Homeowner Must Know",
    excerpt:
      "New York City has specific requirements for the number, location, and type of smoke and carbon monoxide detectors in residential buildings. Here's what's required — and what hardwired interconnected systems do better than battery-only devices.",
    date: "December 2025",
    category: "Electrical Safety",
  },
];

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Electrical Tips & Resources"
        bgImage="https://img1.wsimg.com/isteam/ip/89e3a28a-1623-450e-a04f-089dccc30b1d/fm%3Df_eN91pW.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div ref={ref} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Electrical Guides for NYC Homeowners
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "3rem" }}
          >
            Practical information about electrical panels, wiring, permits, and safety
            — written for New York City homeowners and building managers.
          </p>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.2s",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "3rem",
            }}
          >
            {posts.map((post) => (
              <div
                key={post.slug}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  paddingBottom: "2.5rem",
                }}
              >
                <div style={{ fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem", opacity: 0.6 }}>
                  {post.category} &bull; {post.date}
                </div>
                <h3 style={{ fontSize: "1.8rem", lineHeight: 1.4, marginBottom: "0.75rem", fontWeight: 600 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "1.4rem", lineHeight: 1.7, opacity: 0.8 }}>
                  {post.excerpt}
                </p>
                {/* [TODO: Link to full post when content is published] */}
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  );
}
