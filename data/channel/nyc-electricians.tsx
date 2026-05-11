import type { ChannelPageData } from "@/components/custom/channel/types";

const nycElectricians: ChannelPageData = {
  slug: "nyc-electricians",

  navItems: [
    { href: "#channel",           label: "About Us"          },
    { href: "#helpful_resources", label: "Quick Links"       },
    { href: "#crafts",            label: "Our Services"      },
    { href: "#testimonials",      label: "Testimonials"      },
    { href: "#flex_feature",      label: "Emergency Service" },
    { href: "#get_in_touch",      label: "Get in Touch"      },
  ],

  hero: {
    title:           "Licensed NYC Electricians",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(https://img1.wsimg.com/isteam/ip/89e3a28a-1623-450e-a04f-089dccc30b1d/fm%3Df_eN91pW.jpg) no-repeat center center / cover",
    description: (
      <p>
        New York City Electricians is a licensed, insured electrical contractor
        serving all five boroughs. With over 40 years of experience in residential
        and commercial electrical work, we handle everything from panel upgrades
        and EV charger installs to full rewires — safely, on time, and at
        competitive rates.
      </p>
    ),
  },

  learnMore: {
    title: "40 Years Wiring New York City",
    content: (
      <>
        <p>
          We&rsquo;ve been serving homeowners and business owners across Manhattan,
          Brooklyn, Queens, the Bronx, and Staten Island for over four decades.
          Our team of licensed and insured electricians handles every job — from a
          single outlet replacement to a full commercial rewire — with the same level
          of care and precision.
        </p>

        <h5>Licensed &amp; Insured — Every Job</h5>
        <p>
          Every technician on our team is fully licensed and insured to work in New
          York City. We pull permits on every qualifying job and make sure all work
          meets current electrical codes. You&rsquo;re never left exposed.
        </p>

        <h5>Residential &amp; Commercial</h5>
        <p>
          We work in pre-war apartments, brownstones, new construction, retail
          spaces, restaurants, and office buildings. NYC electrical systems are
          complex — older buildings especially. Our team has seen it all and knows
          how to work in tight, finished spaces without creating damage or drama.
        </p>

        <h5>Competitive, Upfront Pricing</h5>
        <p>
          We give you a clear price before any work begins. No bait-and-switch,
          no surprise invoices. Our rates are competitive for licensed electrical
          work in New York City, and we stand behind every job we do.
        </p>

        <h5>24-Hour Emergency Service</h5>
        <p>
          Electrical emergencies don&rsquo;t wait for business hours. Whether
          it&rsquo;s a panel failure, a dangerous wiring issue, or a power outage
          in your building, our team is available 24 hours a day to respond fast.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us Now — (646) 340-9882",       href: "tel:6463409882",   icon: "icon-message" },
      { title: "Contact Us Online",                  href: "/contact-us",      icon: "icon-mail"    },
      { title: "Our Services",                       href: "/craft-catalog",   icon: "icon-link"    },
      { title: "Service Areas",                      href: "/service-areas",   icon: "icon-info"    },
      { title: "Frequently Asked Questions",         href: "/general-faqs",    icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle every type of residential and commercial electrical work across
        all five boroughs of New York City. From panel upgrades and EV chargers to
        full rewires and emergency repairs — our licensed techs arrive prepared.
      </p>
    ),
    craftLinks: [
      { label: "Panel Upgrades & Replacements",  href: "/craft-catalog/panel-upgrades"         },
      { label: "EV Charger Installation",        href: "/craft-catalog/ev-charger-installation" },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"    },
      { label: "Lighting Installation",          href: "/craft-catalog/lighting-installation"  },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      text:
        "Top-notch service and very professional. They handled our panel upgrade quickly and cleanly, explained everything they were doing, and the price was exactly what they quoted. No surprises. Highly recommend for any electrical work in the city.",
      name:     "Robert M.",
      position: "Manhattan Homeowner",
    },
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    title:       "Electrical Emergency?",
    body: (
      <p>
        Power out? Panel tripping repeatedly? Burning smell from an outlet? Don&rsquo;t
        wait. Our NYC electricians provide 24-hour emergency service across all five
        boroughs. Call{" "}
        <strong>(646) 340-9882</strong> for fast response — day or night.
      </p>
    ),
    buttonLabel: "Call Now",
    buttonHref:  "tel:6463409882",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule or have a question? Call us at{" "}
        <strong>(646) 340-9882</strong> or use our online contact form and
        we&rsquo;ll get back to you fast.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default nycElectricians;
