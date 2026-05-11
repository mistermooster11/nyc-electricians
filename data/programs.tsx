import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"   },
  ],

  hero: {
    bgImage: "https://img1.wsimg.com/isteam/ip/89e3a28a-1623-450e-a04f-089dccc30b1d/fm%3Df_eN91pW.jpg",
    title: "Our Services",
    description: (
      <p>
        New York City Electricians handles every type of residential and commercial
        electrical work across all five boroughs — from panel upgrades and EV charger
        installs to rewires and 24-hour emergency repairs.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts the same way: we assess the issue, explain exactly what
          needs to happen, and give you a clear price before any work begins. Our
          licensed electricians carry the right tools and parts to handle most jobs
          in a single visit — no repeat trips, no runaround.
        </p>
        <p>
          We work in pre-war apartments, brownstones, new construction, retail
          spaces, and commercial buildings across Manhattan, Brooklyn, Queens, the
          Bronx, and Staten Island. Same-day service available. 24-hour emergency
          response. Call{" "}
          <a href="tel:6463409882">(646) 340-9882</a> to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Panel Upgrades & Replacements",
      content: (
        <p>
          Older NYC homes with 60- or 100-amp panels can&rsquo;t support modern
          appliances, EV chargers, or central A/C safely. We upgrade to 200-amp
          service across all five boroughs — pulling all permits, handling the
          Con Edison coordination, and passing final inspection before we close the
          job. Panel change-outs and full replacements included.
        </p>
      ),
      learnMoreHref: "/craft-catalog/panel-upgrades",
    },
    {
      title: "EV Charger Installation",
      content: (
        <p>
          A Level 2 EV charger requires a dedicated 240V circuit and a panel that
          can handle the load. We assess your panel, run the circuit, install the
          NEMA 14-50 outlet or hardwired charger unit, and handle all permits
          — residential homes, garages, and commercial parking facilities across
          the five boroughs.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ev-charger-installation",
    },
    {
      title: "Electrical Wiring & New Circuits",
      content: (
        <p>
          From new circuits for a home office or appliance to full rewires of
          pre-war buildings with knob-and-tube or aluminum wiring — we handle
          all residential and commercial wiring work. Includes new outlets and
          switches, electrical relocation, and upgrades to existing systems flagged
          by inspectors. All work done to NEC code with permits pulled and inspections
          passed.
        </p>
      ),
      learnMoreHref: "/craft-catalog/electrical-wiring",
    },
    {
      title: "Lighting Installation",
      content: (
        <p>
          Ceiling fans, recessed lighting, pendant fixtures, landscape and security
          lights, and commercial emergency lights and exit signs — we install,
          replace, and wire all types of lighting across residential and commercial
          properties. Dimmer switches, smart controls, and outdoor motion-sensor
          lights included.
        </p>
      ),
      learnMoreHref: "/craft-catalog/lighting-installation",
    },
    {
      title: "Circuit Breaker Repair",
      content: (
        <p>
          Tripping breakers, flickering lights, blown fuses, and buzzing panels
          are symptoms of underlying electrical problems. We diagnose the root cause
          first — not just the symptom — and replace faulty breakers, rebalance
          overloaded circuits, or recommend a panel upgrade when that&rsquo;s what
          the situation actually requires.
        </p>
      ),
      learnMoreHref: "/craft-catalog/circuit-breaker-repair",
    },
    {
      title: "GFCI Outlets & New Outlets",
      content: (
        <p>
          GFCI outlets are code-required in kitchens, bathrooms, garages, and
          outdoor locations — missing ones are a common inspection failure. We
          install and replace GFCI outlets, standard outlets, and switches in any
          location, and can add new outlets throughout a renovation or finished
          space in a single visit.
        </p>
      ),
      learnMoreHref: "/craft-catalog/gfci-outlets",
    },
    {
      title: "A/C, Heating & Boiler Wiring",
      content: (
        <p>
          HVAC equipment requires dedicated, properly sized electrical circuits to
          run safely and efficiently. We wire new A/C installs, boilers, furnaces,
          and mini-split systems — and upgrade existing circuits that aren&rsquo;t
          sized adequately for the load. Includes thermostat wiring and heating
          control panel connections.
        </p>
      ),
      learnMoreHref: "/craft-catalog/ac-heating-circuits",
    },
    {
      title: "Appliance Installation & Fan Services",
      content: (
        <p>
          We handle the electrical side of appliance installations — dishwashers,
          ranges, microwaves, garbage disposals, and washer/dryer circuits. For fans:
          ceiling fan installation from scratch, fan motor repair, and replacing
          existing light fixtures with fan-rated boxes and ceiling fans. Every
          installation is confirmed working before we leave.
        </p>
      ),
      learnMoreHref: "/craft-catalog/appliance-installation",
    },
    {
      title: "Safety & Alarm Systems",
      content: (
        <p>
          NYC building code requires working hardwired smoke detectors and CO
          detectors in every residence. We install interconnected hardwired systems,
          replace outdated or battery-only devices, and handle general alarm system
          installs and lightning protection. Commercial emergency lighting and exit
          sign replacements also available.
        </p>
      ),
      learnMoreHref: "/craft-catalog/home-safety-systems",
    },
    {
      title: "Solar Panel Maintenance",
      content: (
        <p>
          We provide electrical maintenance for existing solar installations —
          inspecting connections, inverters, and disconnect switches; diagnosing
          underperforming systems; and integrating solar disconnects into upgraded
          panels. If your original installer is no longer available for service,
          we can take over and keep your system running safely.
        </p>
      ),
      learnMoreHref: "/craft-catalog/solar-panel-maintenance",
    },
  ],

  partners: [],
};
