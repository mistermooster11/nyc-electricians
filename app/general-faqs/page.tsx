"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How quickly can you respond to an electrical issue?",
    content: (
      <p>
        We offer 24-hour emergency service across all five boroughs. For non-emergency
        work, most jobs are scheduled the same day or next day. Call us at{" "}
        <a href="tel:6463409882" className="ia-link">(646) 340-9882</a>{" "}
        and we&apos;ll give you an accurate timeframe on the spot.
      </p>
    ),
  },
  {
    title: "Are your electricians licensed and insured in New York City?",
    content: (
      <p>
        Yes. Every technician on our team is fully licensed and insured to work in
        New York City. We carry general liability insurance and comply with all NYC
        Department of Buildings requirements. We pull permits on every qualifying job
        and make sure all work meets current electrical codes.
      </p>
    ),
  },
  {
    title: "Do you pull permits for electrical work?",
    content: (
      <p>
        Always, when required. Panel upgrades, new circuits, EV charger installs,
        and other qualifying work require permits in NYC — we handle the application,
        coordination with the DOB, and scheduling the final inspection. You never
        have to chase down a permit yourself.
      </p>
    ),
  },
  {
    title: "How do I know if I need a panel upgrade?",
    content: (
      <p>
        The most common signs: breakers that trip repeatedly, flickering lights when
        appliances run, an inability to add new circuits, a fuse box instead of a
        breaker panel, or an insurance company flagging your electrical system. If
        you&apos;re adding an EV charger, central A/C, or finishing a basement, a
        panel upgrade is almost always part of that process.
      </p>
    ),
  },
  {
    title: "What areas of New York City do you serve?",
    content: (
      <>
        <p>We serve all five boroughs, including:</p>
        <p>
          <strong>Manhattan:</strong> Upper East Side, Upper West Side, Midtown,
          Chelsea, the Village, SoHo, Tribeca, Lower Manhattan, Harlem, Washington
          Heights and more.
        </p>
        <p>
          <strong>Brooklyn:</strong> Williamsburg, Park Slope, Bed-Stuy, Crown
          Heights, Bay Ridge, Flatbush, Bensonhurst, Greenpoint, DUMBO and more.
        </p>
        <p>
          <strong>Queens:</strong> Astoria, LIC, Flushing, Forest Hills, Bayside,
          Jackson Heights, Rego Park, Jamaica and more.
        </p>
        <p>
          <strong>Bronx &amp; Staten Island:</strong> All neighborhoods — if you&apos;re
          not sure, just call. We almost certainly cover your area.
        </p>
      </>
    ),
  },
  {
    title: "Do you give upfront pricing?",
    content: (
      <p>
        Always. We assess the job, explain what needs to happen, and give you a clear
        price before any work begins. No surprise invoices, no upsell games. What we
        quote is what you pay — period.
      </p>
    ),
  },
  {
    title: "Can you work in older NYC buildings with outdated wiring?",
    content: (
      <p>
        Yes — this is a significant part of what we do. Pre-war buildings in New York
        City often have knob-and-tube wiring, undersized service, and non-standard
        configurations. Our team has over 40 years of experience working in these
        buildings safely. We&apos;ll assess what you have, explain your options
        honestly, and work in finished spaces with minimal disruption wherever possible.
      </p>
    ),
  },
  {
    title: "What should I do if my power goes out or I have a dangerous electrical issue?",
    content: (
      <p>
        Call us immediately at{" "}
        <a href="tel:6463409882" className="ia-link">(646) 340-9882</a>. We provide
        24-hour emergency service. If you smell burning, see sparks, or have reason
        to believe there&apos;s a dangerous wiring fault — don&apos;t wait. Turn off
        the relevant breaker if you can do so safely, and call us right away.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(646) 340-9882</strong> — our team picks up fast
                  and can answer any question, schedule a same-day visit, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (646) 340-9882"
                    href="tel:6463409882"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
