"use client";

import { useState, useRef, useEffect } from "react";

export default function CTAFormSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".cta-form__left", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".cta-form__right", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handler
  };

  const WHY_LEFT = [
    "24/7 emergency service, no surcharge",
    "NYC Master Electrician licensed & insured",
    "Residential and commercial expertise",
    "Fast response across all five boroughs",
  ];
  const WHY_RIGHT = [
    "All permits pulled and inspections handled",
    "Panel upgrades, EV chargers & more",
    "Professional-grade materials and tools",
    "Upfront pricing — no hidden fees",
  ];

  return (
    <section className="cta-form" ref={sectionRef}>
      <div className="cta-form__container">
        {/* Left: orange bg + form */}
        <div className="cta-form__left p-10!">
          <div className="cta-form__eyebrow hidden md:block">24/7 — No After-Hours Surcharge</div>
          <h2 className="cta-form__heading hidden md:block">
            We are always ready <br />to help you with any electrical job
          </h2>
          <h2 className="cta-form__heading block md:hidden">
            Get in touch
          </h2>
          <p className="cta-form__subtext hidden md:block">
            Licensed NYC electricians available around the clock —
            <br />emergency response within 60 minutes citywide
          </p>
          <form className="cta-form__form" onSubmit={handleSubmit}>
            <div className="cta-form__row">
              <input
                type="text"
                placeholder="First Name"
                className="cta-form__input"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="cta-form__input"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
            <div className="cta-form__row">
              <input
                type="email"
                placeholder="Email"
                required
                className="cta-form__input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="cta-form__input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="cta-form__row">
              <input
                type="text"
                placeholder="City"
                className="cta-form__input"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="cta-form__input"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="cta-form__textarea"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="cta-form__submit">
              Get a Quote
            </button>
          </form>
        </div>

        {/* Right: dark transparent bg, info */}
        <div className="cta-form__right">
          <div className="cta-form__eyebrow">Fast Quote</div>
          <h2 className="cta-form__heading">Trusted Electricians When It Matters Most</h2>
          <p className="cta-form__text">
            Whether you need a panel upgrade, an EV charger installed, or emergency electrical
            service right now, New York City Electricians responds fast — 24/7 across all five
            boroughs with no after-hours surcharge.
          </p>
          <p className="cta-form__text">
            We provide upfront pricing before any work begins, pull all required NYC permits,
            and coordinate every city inspection so you never have to worry about compliance.
          </p>
          <h6 className="cta-form__why-title">Why Choose Us</h6>
          <div className="cta-form__why-grid">
            <ul className="cta-form__why-list">
              {WHY_LEFT.map((item, i) => (
                <li key={i} className="cta-form__why-item">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="cta-form__why-list">
              {WHY_RIGHT.map((item, i) => (
                <li key={i} className="cta-form__why-item">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      className="cta-form__check-icon"
    >
      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />
    </svg>
  );
}
