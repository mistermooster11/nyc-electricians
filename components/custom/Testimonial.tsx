"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";

// TODO: Replace placeholder reviews with real Google/Yelp reviews from NYC Electricians.
const testimonials = [
  {
    id: "robert-m",
    // TODO: Replace with a real verified review from client
    quote:
      "Top-notch service and very professional. They handled our panel upgrade quickly and cleanly, explained everything they were doing, and the price was exactly what they quoted. No surprises. Highly recommend for any electrical work in the city.",
    name: "Robert M.",
    position: "Manhattan Homeowner",
    platform: "Google Review ★★★★★",
  },
  {
    id: "diana-l",
    // TODO: Replace with a real verified review from client
    quote:
      "Called them for a tripping breaker issue that two other electricians couldn't properly diagnose. They found a wiring fault behind the panel in under an hour, fixed it on the spot, and charged exactly what they quoted over the phone. Fast, honest, and competent.",
    name: "Diana L.",
    position: "Brooklyn Resident",
    platform: "Yelp Review ★★★★★",
  },
  {
    id: "marcus-t",
    // TODO: Replace with a real verified review from client
    quote:
      "Had them install a Level 2 EV charger in my garage. They checked the panel first, pulled the permit, ran a clean circuit, and got it done in one visit. Everything was explained upfront and the final bill matched the estimate exactly. Will use them for all my electrical work going forward.",
    name: "Marcus T.",
    position: "Queens Homeowner",
    platform: "Google Review ★★★★★",
  },
];

/* ── Individual slide ─────────────────────────────────────────── */

function QuoteCard({
  item,
  active,
  direction,
}: {
  item: (typeof testimonials)[number];
  active: boolean;
  direction: "left" | "right";
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "0 2rem",
        opacity: active ? 1 : 0,
        transform: active
          ? "translateX(0)"
          : direction === "right"
          ? "translateX(3rem)"
          : "translateX(-3rem)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
        pointerEvents: active ? "auto" : "none",
      }}
    >
      <div
        className="content-entry ia-white"
        style={{
          fontSize: "1.8rem",
          lineHeight: 1.6,
          fontStyle: "italic",
          marginBottom: "2rem",
        }}
      >
        <p>&ldquo;{item.quote}&rdquo;</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <strong className="ia-white" style={{ fontSize: "1.6rem" }}>
          {item.name}
        </strong>
        <span className="ia-sky" style={{ fontSize: "1.4rem" }}>
          {item.position}
        </span>
        <span style={{ fontSize: "1.3rem", opacity: 0.7, color: "#fff" }}>
          {item.platform}
        </span>
      </div>
    </div>
  );
}

/* ── Slider arrow button ──────────────────────────────────────── */

function ArrowBtn({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous review" : "Next review"}
      style={{
        background: "transparent",
        border: "1px solid rgba(161,197,211,0.35)",
        borderRadius: "50%",
        width: "4.4rem",
        height: "4.4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#a1c5d3",
        flexShrink: 0,
        transition: "border-color 0.25s, color 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#a1c5d3";
        (e.currentTarget as HTMLButtonElement).style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(161,197,211,0.35)";
        (e.currentTarget as HTMLButtonElement).style.color = "#a1c5d3";
      }}
    >
      {dir === "prev" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

/* ── Main component ───────────────────────────────────────────── */

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const go = useCallback(
    (delta: number) => {
      setDirection(delta > 0 ? "right" : "left");
      setActive((i) => (i + delta + testimonials.length) % testimonials.length);
    },
    []
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const SLIDE_HEIGHT = "28rem";

  return (
    <div ref={ref} className="front-testimonial ia-bg-dark">
      <div className="inner inner--slim-1172">
        <div className={`sub-heading sub-heading__white fadeInUpS wow${vis}`}>
          What Our Customers Say
        </div>
        <h2
          className={`h3 ia-white fadeInUpS wow${vis}`}
          style={{ animationDelay: "0.1s" }}
        >
          Real Reviews From Real New Yorkers
        </h2>
      </div>

      <div
        className="inner"
        style={{
          paddingTop: "4rem",
          paddingBottom: "6rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            height: SLIDE_HEIGHT,
            overflow: "hidden",
          }}
        >
          {testimonials.map((t, i) => (
            <QuoteCard
              key={t.id}
              item={t}
              active={i === active}
              direction={direction}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            marginTop: "3rem",
            paddingLeft: "2rem",
          }}
        >
          <ArrowBtn dir="prev" onClick={() => go(-1)} />
          <ArrowBtn dir="next" onClick={() => go(1)} />

          <div style={{ display: "flex", gap: "0.8rem", marginLeft: "0.5rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? "right" : "left");
                  setActive(i);
                }}
                aria-label={`Go to review ${i + 1}`}
                style={{
                  width: "0.8rem",
                  height: "0.8rem",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: i === active ? "#a1c5d3" : "rgba(161,197,211,0.3)",
                  transition: "background 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
