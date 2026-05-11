import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  "panel-upgrades": {
    title: "Panel Upgrades & Replacements",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Most New York City homes were built with 60- or 100-amp panels — not
          enough to safely support modern appliances, EV chargers, central A/C,
          or additional circuits. An overloaded or outdated panel is a fire hazard
          and a daily frustration.
        </p>
        <p>
          New York City Electricians upgrades residential and commercial panels to
          200-amp service across all five boroughs — pulling all required permits,
          passing final inspection, and leaving you with a safe, code-compliant
          electrical system.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Do You Need a Panel Upgrade?",
        content: (
          <>
            <p>
              Signs you need a panel upgrade: breakers that trip repeatedly, the
              inability to run multiple high-draw appliances at once, a fuse box
              instead of a breaker panel, flickering lights, or an insurance
              company flagging your electrical system. If you&rsquo;re installing
              an EV charger, adding central A/C, or finishing a basement, a panel
              upgrade is almost always required.
            </p>
            <p>
              Older panels from brands like Federal Pacific or Zinsco have known
              safety defects. If you have one of these, call us — it&rsquo;s worth
              getting it assessed as soon as possible.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assessment.</strong> We evaluate your current panel,
              calculate your load, and confirm what amperage upgrade is appropriate
              for your home or building.
            </p>
            <p>
              <strong>Step 2 — Permit Pulling.</strong> We handle all permit
              applications. Every panel upgrade in NYC requires a permit — we
              manage this so you don&rsquo;t have to.
            </p>
            <p>
              <strong>Step 3 — Installation.</strong> We install the new panel,
              reconnect all circuits cleanly, and label everything properly.
            </p>
            <p>
              <strong>Step 4 — Inspection &amp; Sign-Off.</strong> We coordinate
              the final inspection and make sure the work passes the first time.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "EV Charger Installation",          href: "/craft-catalog/ev-charger-installation" },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"       },
      { label: "Circuit Breaker Repair",           href: "/craft-catalog/circuit-breaker-repair"  },
      { label: "A/C, Heating & Boiler Wiring",     href: "/craft-catalog/ac-heating-circuits"     },
    ],
  },

  "ev-charger-installation": {
    title: "EV Charger Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A Level 2 EV charger requires a dedicated 240-volt circuit — the same
          voltage as a clothes dryer. Most homes need a panel assessment before
          installation to confirm there&rsquo;s adequate capacity. Done right, a
          home charger gives you 20–30 miles of range per hour of charging.
        </p>
        <p>
          New York City Electricians installs EV chargers for all major brands in
          homes, garages, and commercial parking facilities across all five boroughs.
          We handle the permit, the circuit, and the charger install in one visit.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Level 1 vs. Level 2: Which Do You Need?",
        content: (
          <>
            <p>
              Level 1 chargers plug into a standard 120V outlet and add about
              4–5 miles per hour. Level 2 chargers use a 240V dedicated circuit
              and charge 6–8x faster — most EV owners prefer them for daily home
              charging. If you&rsquo;re driving a long-range EV, Level 2 is the
              practical choice.
            </p>
            <p>
              We&rsquo;ll assess your panel and confirm the best installation
              approach for your specific vehicle and charging habits before
              recommending anything.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Panel Assessment.</strong> We check your panel
              capacity and confirm whether a panel upgrade is needed before
              adding the circuit.
            </p>
            <p>
              <strong>Step 2 — Permit &amp; Quote.</strong> We pull all required
              permits and give you an upfront price before work begins.
            </p>
            <p>
              <strong>Step 3 — Circuit &amp; Install.</strong> We run the dedicated
              240V circuit and install the NEMA 14-50 outlet or hardwired charger.
            </p>
            <p>
              <strong>Step 4 — Test &amp; Confirm.</strong> We verify the charger
              is working correctly and walk you through how to use it before leaving.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel Upgrades & Replacements",    href: "/craft-catalog/panel-upgrades"      },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"   },
      { label: "GFCI Outlets & New Outlets",       href: "/craft-catalog/gfci-outlets"        },
      { label: "A/C, Heating & Boiler Wiring",     href: "/craft-catalog/ac-heating-circuits" },
    ],
  },

  "electrical-wiring": {
    title: "Electrical Wiring & New Circuits",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          From adding new circuits for a home office to rewiring an entire
          pre-war apartment, New York City Electricians handles all residential
          and commercial wiring work — including new circuits, new outlets and
          switches, electrical relocation, and upgrades to existing systems.
        </p>
        <p>
          All wiring work is done to current NEC code, with permits pulled and
          inspections passed before we close the job.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need New Wiring or Circuits?",
        content: (
          <>
            <p>
              Common triggers: adding a dedicated circuit for a major appliance,
              finishing a basement or adding a room, replacing knob-and-tube or
              aluminum wiring, an inspector flagging wiring defects, or needing
              more outlets in a renovated space.
            </p>
            <p>
              Older NYC buildings often have undersized wiring that can&rsquo;t
              support modern load demands. Our team works safely in finished walls
              — minimizing disruption while getting the circuit where it needs to go.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Scope the Work.</strong> We assess the current
              wiring, determine the best routing for new circuits, and confirm
              panel capacity is sufficient.
            </p>
            <p>
              <strong>Step 2 — Permit &amp; Price.</strong> We pull any required
              permits and confirm the price before work begins. No surprises.
            </p>
            <p>
              <strong>Step 3 — Run the Circuit.</strong> We fish cable through
              walls wherever possible to minimize opening. When cuts are necessary,
              we patch and clean up.
            </p>
            <p>
              <strong>Step 4 — Inspect &amp; Test.</strong> All new circuits tested
              under load. If a permit was pulled, we schedule and pass inspection
              before closing the job.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel Upgrades & Replacements",  href: "/craft-catalog/panel-upgrades"        },
      { label: "GFCI Outlets & New Outlets",     href: "/craft-catalog/gfci-outlets"          },
      { label: "A/C, Heating & Boiler Wiring",   href: "/craft-catalog/ac-heating-circuits"   },
      { label: "Lighting Installation",          href: "/craft-catalog/lighting-installation" },
    ],
  },

  "lighting-installation": {
    title: "Lighting Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          From ceiling fans and light fixtures to landscape lighting, security
          lights, and emergency exit signs — New York City Electricians installs
          and replaces all types of lighting in residential and commercial spaces
          across all five boroughs.
        </p>
        <p>
          We handle the wiring, mounting, and connection so every job is done safely
          and to code. No unstable fixtures, no improper wiring.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What Lighting Services Do We Cover?",
        content: (
          <>
            <p>
              We install and replace: ceiling fan and light combos, recessed
              lighting, pendant fixtures, under-cabinet lighting, chandeliers,
              outdoor landscape and security lights, motion-sensor lights, and
              commercial emergency lights and exit signs. We also handle dimmer
              switches and smart lighting controls.
            </p>
            <p>
              If you&rsquo;re renovating and want new fixtures throughout, or just
              need a single light replaced, our licensed electricians handle both
              — same professional standard either way.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess the Location.</strong> We confirm the
              mounting box, wiring, and circuit are appropriate for the fixture
              type being installed.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Clear price before any
              work begins.
            </p>
            <p>
              <strong>Step 3 — Install &amp; Wire.</strong> We mount the fixture
              securely, make all connections properly, and wire switch controls
              correctly.
            </p>
            <p>
              <strong>Step 4 — Test &amp; Clean Up.</strong> Every fixture tested
              on before we leave. All packaging and debris cleaned up.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Wiring & New Circuits",      href: "/craft-catalog/electrical-wiring"      },
      { label: "GFCI Outlets & New Outlets",            href: "/craft-catalog/gfci-outlets"           },
      { label: "Safety & Alarm Systems",                href: "/craft-catalog/home-safety-systems"    },
      { label: "Appliance Installation & Fan Services", href: "/craft-catalog/appliance-installation" },
    ],
  },

  "circuit-breaker-repair": {
    title: "Circuit Breaker Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A tripping breaker, flickering lights, or a blown fuse aren&rsquo;t
          just inconveniences — they&rsquo;re symptoms. Sometimes the fix is a
          simple breaker replacement. Sometimes they signal a wiring fault,
          an overloaded circuit, or a panel that&rsquo;s reached the end of its
          safe service life.
        </p>
        <p>
          New York City Electricians diagnoses circuit and breaker issues across
          all five boroughs and tells you exactly what&rsquo;s causing the problem
          — not just what&rsquo;s easiest to bill.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Circuit Breaker Service?",
        content: (
          <>
            <p>
              Call us when: a breaker trips repeatedly and won&rsquo;t stay reset;
              lights flicker when appliances run; fuses blow more than once a month;
              you hear buzzing or smell burning near the panel; or a specific circuit
              has stopped working entirely.
            </p>
            <p>
              Some of these symptoms indicate a simple fix. Others are signs of
              dangerous underlying wiring faults. We diagnose first so you know
              exactly what you&rsquo;re dealing with before spending money on anything.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Diagnose.</strong> We assess the panel, the breaker,
              and the circuit load to determine the root cause — not just the symptom.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> We explain what we found
              and what fixing it costs before touching anything.
            </p>
            <p>
              <strong>Step 3 — Repair or Replace.</strong> We replace faulty
              breakers, rebalance overloaded circuits, or recommend a panel upgrade
              if the root cause requires it.
            </p>
            <p>
              <strong>Step 4 — Test Under Load.</strong> We test the repaired
              circuit under real load conditions to confirm it&rsquo;s stable.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel Upgrades & Replacements",    href: "/craft-catalog/panel-upgrades"    },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring" },
      { label: "GFCI Outlets & New Outlets",       href: "/craft-catalog/gfci-outlets"      },
      { label: "A/C, Heating & Boiler Wiring",     href: "/craft-catalog/ac-heating-circuits" },
    ],
  },

  "gfci-outlets": {
    title: "GFCI Outlets & New Outlets",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          GFCI outlets are required by code in kitchens, bathrooms, garages, and
          outdoor locations — and missing or faulty GFCIs are a common failure point
          on home inspections. We also install new standard outlets and switches
          wherever they&rsquo;re needed.
        </p>
        <p>
          New York City Electricians installs, replaces, and troubleshoots outlets
          and switches throughout all five boroughs. Quick jobs and large-scale
          outlet additions handled the same day.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Outlet Service?",
        content: (
          <>
            <p>
              Common reasons: a dead outlet that won&rsquo;t reset, adding outlets
              in a newly finished space, replacing two-prong ungrounded outlets,
              upgrading to GFCI in wet areas for code compliance, or installing USB
              outlets in a renovation.
            </p>
            <p>
              If an outlet is warm to the touch, has scorch marks, or has never
              worked since you moved in, call us — these can indicate underlying
              wiring problems that go beyond the outlet itself.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess.</strong> We check the outlet, the wiring
              behind it, and the circuit to confirm the issue is the device and not
              something deeper.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Clear price before we
              touch anything.
            </p>
            <p>
              <strong>Step 3 — Install &amp; Wire.</strong> We install the new
              outlet or GFCI correctly — proper grounding, correct wiring
              orientation, and secure mounting.
            </p>
            <p>
              <strong>Step 4 — Test.</strong> Every outlet tested with a circuit
              tester. GFCI outlets tested for proper trip and reset function.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"    },
      { label: "Circuit Breaker Repair",           href: "/craft-catalog/circuit-breaker-repair" },
      { label: "Lighting Installation",            href: "/craft-catalog/lighting-installation" },
      { label: "Panel Upgrades & Replacements",    href: "/craft-catalog/panel-upgrades"        },
    ],
  },

  "ac-heating-circuits": {
    title: "A/C, Heating & Boiler Wiring",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Air conditioners, heating systems, boilers, and mini-splits all require
          dedicated electrical circuits and proper wiring to run safely and
          efficiently. Undersized wiring or shared circuits cause tripping breakers,
          reduced performance, and can shorten equipment life.
        </p>
        <p>
          New York City Electricians wires new HVAC equipment installs and upgrades
          existing circuits across all five boroughs, for residential and commercial
          systems.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need HVAC Electrical Work?",
        content: (
          <>
            <p>
              Any time HVAC equipment is installed, replaced, or upgraded — the
              electrical side needs to be properly sized and permitted. Common
              scenarios: installing central A/C for the first time, replacing a
              boiler or furnace, adding a mini-split system, or upgrading a window
              A/C circuit that keeps tripping.
            </p>
            <p>
              We also handle boiler wiring for oil and gas systems, thermostat
              wiring, and control panel connections for heating systems.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess Load Requirements.</strong> We confirm the
              amperage and voltage requirements for the equipment and verify panel
              capacity can support the new circuit.
            </p>
            <p>
              <strong>Step 2 — Permit &amp; Quote.</strong> All HVAC wiring that
              requires a permit gets one. Price confirmed before work starts.
            </p>
            <p>
              <strong>Step 3 — Wire the Circuit.</strong> We run the dedicated
              circuit from the panel to the equipment, install the disconnect box
              where required, and make all connections.
            </p>
            <p>
              <strong>Step 4 — Test &amp; Inspect.</strong> Circuit tested under
              load with the equipment running. Inspection scheduled and passed
              where required.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel Upgrades & Replacements",    href: "/craft-catalog/panel-upgrades"          },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"       },
      { label: "Circuit Breaker Repair",           href: "/craft-catalog/circuit-breaker-repair"  },
      { label: "EV Charger Installation",          href: "/craft-catalog/ev-charger-installation" },
    ],
  },

  "appliance-installation": {
    title: "Appliance Installation & Fan Services",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Installing a new appliance or ceiling fan sounds simple until you realize
          the wiring isn&rsquo;t adequate, the box isn&rsquo;t fan-rated, or the
          circuit isn&rsquo;t dedicated. Getting it wrong is a fire hazard and a
          code violation.
        </p>
        <p>
          New York City Electricians handles proper appliance installation wiring
          and all fan services — including ceiling fan installation, fan repair,
          and ceiling fan-to-light conversions — across all five boroughs.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "What Falls Under This Service?",
        content: (
          <>
            <p>
              We handle wiring and connection for: dishwashers, ranges and cooktops,
              over-the-range microwaves, garbage disposals, washer and dryer circuits,
              and any appliance that needs a hardwired or dedicated circuit connection.
            </p>
            <p>
              For fans: ceiling fan installation (including where no existing fixture
              exists), fan motor repair, and replacing a light fixture with a
              fan-rated box and ceiling fan. We&rsquo;ll confirm the box is properly
              rated for the fan weight before any mounting.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess.</strong> We confirm the existing wiring,
              box, and circuit capacity are appropriate for the installation.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Any additional work is
              explained and priced before we proceed.
            </p>
            <p>
              <strong>Step 3 — Install.</strong> We complete the installation or
              repair — including any required circuit or mounting upgrades — to code.
            </p>
            <p>
              <strong>Step 4 — Test.</strong> Appliances confirmed working. Fans
              tested for balance and switch function before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Lighting Installation",           href: "/craft-catalog/lighting-installation" },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"    },
      { label: "GFCI Outlets & New Outlets",       href: "/craft-catalog/gfci-outlets"         },
      { label: "A/C, Heating & Boiler Wiring",     href: "/craft-catalog/ac-heating-circuits"  },
    ],
  },

  "home-safety-systems": {
    title: "Safety & Alarm Systems",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Smoke detectors, general alarm systems, and lightning protection all
          require proper electrical connections to function reliably when it matters
          most. Hardwired systems are more reliable than battery-only devices —
          and often required by NYC building code.
        </p>
        <p>
          New York City Electricians installs and replaces smoke detectors, general
          alarm systems, and lightning protection systems in residential and
          commercial buildings across all five boroughs.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Safety System Work?",
        content: (
          <>
            <p>
              NYC requires working smoke detectors on every level of a home, and
              carbon monoxide detectors near sleeping areas. If yours are over 10
              years old, chirping, or were never hardwired, it&rsquo;s time to
              replace them. We install interconnected hardwired systems so when
              one alarm sounds, they all sound.
            </p>
            <p>
              For general alarm systems and lightning protection: new installs,
              replacements, and troubleshooting of existing systems. If you have
              commercial emergency lighting or exit signs that need inspection or
              replacement, we handle those as well.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess Your Current Setup.</strong> We confirm what
              you have, what code requires for your building type, and what needs
              to change.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Full price before work
              begins, including any wiring additions required.
            </p>
            <p>
              <strong>Step 3 — Install.</strong> We mount and wire all devices
              properly, connect to the appropriate circuits, and ensure all
              interconnections are functioning.
            </p>
            <p>
              <strong>Step 4 — Test.</strong> We trigger and test every device
              before leaving — you see it working before we close the job.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Lighting Installation",           href: "/craft-catalog/lighting-installation" },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"    },
      { label: "GFCI Outlets & New Outlets",       href: "/craft-catalog/gfci-outlets"         },
      { label: "Panel Upgrades & Replacements",    href: "/craft-catalog/panel-upgrades"       },
    ],
  },

  "solar-panel-maintenance": {
    title: "Solar Panel Maintenance",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Solar installations in New York City face unique challenges — limited
          roof space, older buildings, and the complexity of connecting to the
          Con Edison grid. Maintaining that system properly means the electrical
          connections, inverters, and disconnect switches all stay in safe working
          order.
        </p>
        <p>
          New York City Electricians provides solar panel maintenance and electrical
          system checks for residential and commercial solar installations across
          all five boroughs.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 340-9882", href: "tel:6463409882" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Solar Electrical Maintenance?",
        content: (
          <>
            <p>
              If your solar system is producing less power than expected, a breaker
              on the solar circuit is tripping, the inverter is showing a fault code,
              or it&rsquo;s been more than a year since anyone checked the electrical
              connections — it&rsquo;s time for a maintenance visit.
            </p>
            <p>
              We also help when homeowners are doing a panel upgrade and need the
              solar disconnect properly integrated into the new panel, or when a
              system was installed by a company that is no longer available for
              service.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — System Assessment.</strong> We inspect the electrical
              connections, disconnect switch, inverter, and panel integration to
              identify any faults or degraded components.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> We explain what we found
              and what the repair or maintenance will cost before proceeding.
            </p>
            <p>
              <strong>Step 3 — Service.</strong> We repair or replace faulty
              electrical components, tighten connections, and confirm the system
              is producing correctly.
            </p>
            <p>
              <strong>Step 4 — Test &amp; Document.</strong> We verify output and
              confirm the system is operating within expected parameters before
              closing the job.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Panel Upgrades & Replacements",    href: "/craft-catalog/panel-upgrades"          },
      { label: "EV Charger Installation",          href: "/craft-catalog/ev-charger-installation" },
      { label: "Electrical Wiring & New Circuits", href: "/craft-catalog/electrical-wiring"       },
      { label: "Circuit Breaker Repair",           href: "/craft-catalog/circuit-breaker-repair"  },
    ],
  },
};
