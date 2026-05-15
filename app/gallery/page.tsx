"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const galleryItems = [
  {
    label: "Panel Upgrade — Manhattan Brownstone",
    image: "/images/IMG_9688-1024x682.jpg",
    // [TODO: Replace with real NYC Electricians panel upgrade photo]
  },
  {
    label: "EV Charger Install — Queens Garage",
    image: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace with real NYC Electricians EV charger photo]
  },
  {
    label: "Recessed Lighting — Brooklyn Apartment",
    image: "/images/IMG_9688-1024x682.jpg",
    // [TODO: Replace with real NYC Electricians lighting install photo]
  },
  {
    label: "Electrical Rewire — Pre-War Walk-Up",
    image: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace with real NYC Electricians rewire photo]
  },
];

export default function GalleryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      <CraftHero
        title="Our Work"
        bgImage="https://img1.wsimg.com/isteam/ip/89e3a28a-1623-450e-a04f-089dccc30b1d/fm%3Df_eN91pW.jpg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <div ref={ref} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Recent Jobs Across NYC
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "3rem" }}
          >
            Panel upgrades, EV chargers, rewires, and lighting installs — completed
            in homes and businesses across all five boroughs.
          </p>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.2s",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2.5rem",
            }}
          >
            {galleryItems.map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderRadius: "6px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p className="p3 ia-medium" style={{ marginTop: "0.75rem" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  );
}
