"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const quickLinks = [
  { label: "Our Services",               href: "/craft-catalog",  external: false },
  { label: "Frequently Asked Questions", href: "/general-faqs",   external: false },
  { label: "Service Areas",              href: "/service-areas",  external: false },
  { label: "Before & After Gallery",     href: "/gallery",        external: false },
  { label: "Contact Us",                 href: "/contact-us",     external: false },
];

// Social icon type — explicitly typed to avoid implicit any[]
type SocialLink = { icon: string; href: string; label: string };

const socials: SocialLink[] = [
  { icon: "icon-facebook",  href: "https://www.facebook.com/284236588450919",               label: "Facebook"  },
  { icon: "icon-instagram", href: "https://www.instagram.com/newyorkcityelectricians/",      label: "Instagram" },
  { icon: "icon-yelp",      href: "https://www.yelp.com/biz/new-york-city-electricians-new-york", label: "Yelp" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const vis = isInView ? " is-visible" : "";

  return (
    <footer ref={ref} className={`footer wow${vis}`}>

      {/* ── Top area: logo + widgets ── */}
      <div className="inner inner--slim-1162">

        {/* Logo */}
        <div className={`footer__logo fadeInUpS wow${vis}`}>
          <a href="/">
            <span className="sr-only">New York City Electricians</span>
            {/* [TODO: Replace with NYC Electricians logo] */}
            <img
              src="/logos/logo-long.svg"
              alt="New York City Electricians"
              width="220"
              height="48"
            />
          </a>
        </div>

        {/* Widgets */}
        <div className="footer__widgets">

          {/* Quick Links */}
          <div className={`footer__widget footer__widget-quick-links fadeInUpS wow${vis}`}>
            <h3 className="footer__heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.external ? "_blank" : "_self"}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`footer__widget footer__widget-donation fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="footer__heading">Contact Us</h3>
            <div className="content-entry">
              <p>
                <strong>(646) 340-9882</strong><br />
                50 Saint Marks Place, New York, NY 10003<br />
                24-Hour Emergency Service Available
              </p>
            </div>
            <a
              href="tel:6463409882"
              className={`ia-link ia-link--arrow ia-link--white wow${vis}`}
            >
              <i className="icon-arrow-right ia-orange" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Service Areas */}
          <div
            className={`footer__widget footer__widget-subscribe fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="footer__heading">Service Areas</h3>
            <div className="content-entry">
              <p>
                Manhattan &bull; Brooklyn &bull; Queens<br />
                Bronx &bull; Staten Island<br />
                All five boroughs — residential &amp; commercial.
              </p>
            </div>
            <a
              href="/service-areas"
              className={`ia-link ia-link--arrow ia-link--white wow${vis}`}
            >
              <i className="icon-arrow-right ia-orange" />
              <span>View All Areas</span>
            </a>
          </div>

        </div>{/* /.footer__widgets */}
      </div>{/* /.inner.inner--slim-1162 */}

      {/* ── Bottom bar ── */}
      <div className="inner">
        <div className={`footer__bottom cleared fadeInUpS wow${vis}`}>

          <div className="footer__bottom__left">
            &copy;2026 New York City Electricians. All rights reserved.
          </div>

          <div className="footer__bottom__center">
            <div className="footer__bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

          <div className="footer__bottom__right" id="footer__bottom__right">
            <ul className="footer__socials">
              {socials.map((s) => (
                <li key={s.label}>
                  <a rel="noopener noreferrer" href={s.href} target="_blank">
                    <i className={s.icon} aria-hidden="true" />
                    <span className="sr-only">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}
