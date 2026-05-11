"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

const areas = [
  {
    slug: "manhattan",
    region: "Manhattan",
    headline: "Manhattan Electricians — Licensed, Same-Day Service",
    description:
      "Manhattan's mix of pre-war walk-ups, high-rises, and new construction means every electrical job comes with its own complications. Our team works in all building types throughout the borough — from knob-and-tube rewires in older apartments to panel upgrades and EV charger installs in newer buildings. We pull permits, pass inspections, and handle Con Edison coordination.",
    callouts: [
      "Panel upgrades & 200-amp service",
      "EV charger installation",
      "Pre-war building rewires",
      "24-hour emergency service",
    ],
    neighborhoods: [
      "Upper East Side", "Upper West Side", "Midtown", "Chelsea", "Hell's Kitchen",
      "Greenwich Village", "East Village", "SoHo", "Tribeca", "Lower Manhattan",
      "Harlem", "Washington Heights", "Inwood", "Morningside Heights",
    ],
  },
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Brooklyn Electricians — All Neighborhoods Covered",
    description:
      "Brooklyn's brownstones, row houses, and multi-family buildings are among the most electrically complex in the city. We handle panel upgrades, lighting installs, circuit additions, and full rewires throughout the borough — with proper permits and code-compliant work on every job.",
    callouts: [
      "Brownstone & row house specialists",
      "Multi-family building wiring",
      "GFCI upgrades & new outlets",
      "Emergency electrical service",
    ],
    neighborhoods: [
      "Williamsburg", "Greenpoint", "Bushwick", "Bed-Stuy", "Crown Heights",
      "Park Slope", "Prospect Heights", "Fort Greene", "DUMBO", "Brooklyn Heights",
      "Bay Ridge", "Bensonhurst", "Dyker Heights", "Flatbush", "Sheepshead Bay",
    ],
  },
  {
    slug: "queens",
    region: "Queens",
    headline: "Queens Electricians — Residential & Commercial",
    description:
      "Queens is one of the most diverse boroughs in the city — and its housing stock reflects that. From attached single-family homes in Bayside to large multi-family buildings in Flushing, our licensed electricians handle all electrical work throughout Queens with proper permits and inspections.",
    callouts: [
      "Single-family & multi-family homes",
      "EV charger installation",
      "A/C & heating circuit wiring",
      "Safety & alarm system installs",
    ],
    neighborhoods: [
      "Astoria", "Long Island City", "Sunnyside", "Maspeth", "Ridgewood",
      "Flushing", "Whitestone", "Bayside", "Fresh Meadows", "Jamaica",
      "Forest Hills", "Rego Park", "Jackson Heights", "Elmhurst", "Middle Village",
    ],
  },
  {
    slug: "bronx",
    region: "The Bronx",
    headline: "Bronx Electricians — Licensed Electrical Contractors",
    description:
      "The Bronx has a wide range of housing types — large co-op complexes, two-family homes, older apartment buildings — each with its own electrical needs. Our team handles panel upgrades, circuit work, and emergency repairs throughout the Bronx, pulling all required permits and meeting NYC electrical code on every job.",
    callouts: [
      "Panel upgrades & fuse box replacements",
      "New outlets & circuit additions",
      "Lighting installation",
      "24-hour emergency service",
    ],
    neighborhoods: [
      "Riverdale", "Kingsbridge", "Fordham", "Belmont", "Tremont",
      "Mott Haven", "Hunts Point", "Soundview", "Throgs Neck", "Pelham Bay",
      "Norwood", "Woodlawn", "Co-op City", "City Island",
    ],
  },
  {
    slug: "staten-island",
    region: "Staten Island",
    headline: "Staten Island Electricians — All Neighborhoods",
    description:
      "Staten Island's single-family homes and suburban layout make it one of the more EV charger-friendly boroughs in the city — and one of the most common areas for panel upgrades as residents add home charging and new appliances. We serve the full island with licensed electrical work, same-day scheduling, and proper permits on every job.",
    callouts: [
      "EV charger installs & panel upgrades",
      "Home rewires & circuit additions",
      "Outdoor & security lighting",
      "Smoke detector & alarm installs",
    ],
    neighborhoods: [
      "St. George", "New Brighton", "Stapleton", "Bay Ridge", "Tottenville",
      "Great Kills", "Eltingville", "Annadale", "Richmond Valley", "New Springville",
      "Westerleigh", "Port Richmond", "Mariners Harbor", "Grasmere",
    ],
  },
];

function AreaSection({ area, vis }: { area: typeof areas[number]; vis: string }) {
  return (
    <div
      id={area.slug}
      style={{ paddingBottom: "4rem", borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: "4rem" }}
    >
      <h2 className={`h3 fadeInUpS wow${vis}`} style={{ marginBottom: "1rem" }}>
        {area.headline}
      </h2>
      <p className={`p2 fadeInUpS wow${vis}`} style={{ animationDelay: "0.05s", marginBottom: "2rem" }}>
        {area.description}
      </p>

      <ul
        className={`fadeInUpS wow${vis}`}
        style={{ animationDelay: "0.1s", paddingLeft: "1.5rem", marginBottom: "2rem", lineHeight: "2" }}
      >
        {area.callouts.map((c) => (
          <li key={c} style={{ fontSize: "1.5rem" }}>{c}</li>
        ))}
      </ul>

      <p className={`p3 ia-medium fadeInUpS wow${vis}`} style={{ animationDelay: "0.15s", marginBottom: "1.5rem" }}>
        Neighborhoods served:{" "}
        <span style={{ fontWeight: 400 }}>{area.neighborhoods.join(", ")} and more.</span>
      </p>

      <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
        <a href="tel:6463409882" className="ia-link ia-link--arrow">
          <i className="icon-arrow-right ia-orange" />
          <span>Call (646) 340-9882</span>
        </a>
      </div>
    </div>
  );
}

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const vis = contentInView ? " is-visible" : "";
  const ctaVis = ctaInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <div ref={heroRef}>
        <CraftHero
          title="Service Areas"
          bgImage="https://img1.wsimg.com/isteam/ip/89e3a28a-1623-450e-a04f-089dccc30b1d/fm%3Df_eN91pW.jpg"
          breadcrumbs={[{ label: "Service Areas" }]}
        />
      </div>

      <div ref={contentRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h1
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.05s", marginBottom: "0.5rem" }}
          >
            Serving All Five NYC Boroughs
          </h1>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "4rem" }}
          >
            Licensed residential and commercial electrical work throughout Manhattan,
            Brooklyn, Queens, the Bronx, and Staten Island. Same-day scheduling available.
            24-hour emergency service. Call{" "}
            <a href="tel:6463409882" className="ia-link">(646) 340-9882</a>.
          </p>

          {areas.map((area) => (
            <AreaSection key={area.slug} area={area} vis={vis} />
          ))}

        </div>
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaVis}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaVis}`} style={{ animationDelay: "0.1s" }}>
            Not sure if we cover your area?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaVis}`} style={{ animationDelay: "0.15s" }}>
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaVis}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our licensed electricians cover all five boroughs of New York City.
                If you&apos;re in NYC and need electrical work, call us — same-day
                service available.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <SecondaryButton label="Call (646) 340-9882" href="tel:6463409882" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
