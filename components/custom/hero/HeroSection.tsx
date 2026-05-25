"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return; // StrictMode unmounted before import resolved

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__video-bg">
        <iframe
          src="https://customer-ip9lnkk65px0t3ak.cloudflarestream.com/9f568747e1dd6400d234c39663481a22/iframe?autoplay=true&muted=true&loop=true&controls=false&background=true"
          allow="autoplay; fullscreen"
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Licensed NYC Electricians
          <br />
          Serving All Five Boroughs
          <br />
          24/7 Emergency Service
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Panel upgrades, EV charger installation, residential wiring &amp; outlet repair —
          <br />
          upfront pricing, all permits handled, no hidden fees.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <Link href="/contact-us" className="hero__btn-primary">
            Get a Free Quote
          </Link>
          <Link href="/about-us" className="hero__btn-secondary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}