
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Panel Upgrades & Replacements",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "Most NYC homes are running on 60- or 100-amp panels from decades ago. We upgrade to 200-amp service — pulling permits, coordinating with Con Edison, and passing final inspection before we close the job.",
    learnHref: "/craft-catalog/panel-upgrades",
    steps: [
      { label: "Assess Load", body: "We evaluate your current panel and calculate what amperage your home or building actually needs." },
      { label: "Pull Permits", body: "Every panel upgrade in NYC requires a permit. We handle the application and coordination so you don't have to." },
      { label: "Install & Label", body: "New panel installed, all circuits reconnected cleanly and labeled correctly. No loose wires, no guesswork." },
      { label: "Inspection Sign-Off", body: "We schedule and pass the final inspection. You get a signed-off, code-compliant electrical system." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "EV Charger Installation",
    image: "/images/IMG_9750-1024x683.jpg",
    description:
      "A Level 2 charger gives you 20–30 miles of range per hour. We assess your panel, run the dedicated 240V circuit, install the charger, and handle all permits — in one visit.",
    learnHref: "/craft-catalog/ev-charger-installation",
    steps: [
      { label: "Panel Check", body: "We confirm your panel has capacity for the dedicated 240V circuit before recommending anything." },
      { label: "Permit & Quote", body: "All required permits pulled. Price confirmed before work begins." },
      { label: "Run Circuit & Install", body: "We run the circuit to your garage or parking location and install the NEMA 14-50 outlet or hardwired unit." },
      { label: "Test & Walk-Through", body: "Charger verified working. We walk you through how to use it before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Electrical Wiring & New Circuits",
    image: "/images/iStock-530983109-1.jpg",
    description:
      "From adding a dedicated circuit for a new appliance to rewiring an entire pre-war apartment — we handle all residential and commercial wiring work, to code, with permits where required.",
    learnHref: "/craft-catalog/electrical-wiring",
    steps: [
      { label: "Scope the Work", body: "We assess existing wiring, determine the best routing, and confirm panel capacity before touching anything." },
      { label: "Permit & Price", body: "Required permits pulled. Clear price confirmed before work begins." },
      { label: "Run the Circuit", body: "We fish cable through walls wherever possible. When cuts are needed, we patch and clean up." },
      { label: "Test Under Load", body: "Every new circuit tested under real load. Inspection scheduled and passed where required." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Circuit Breaker Repair",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "A tripping breaker or flickering lights can be a simple fix — or a symptom of something dangerous. We diagnose first, explain what we found, and quote before touching anything.",
    learnHref: "/craft-catalog/circuit-breaker-repair",
    steps: [
      { label: "Diagnose", body: "We assess the panel, the breaker, and the circuit load to find the root cause — not just the symptom." },
      { label: "Quote Upfront", body: "You know exactly what fixing it costs before we start." },
      { label: "Repair or Replace", body: "Faulty breakers replaced, overloaded circuits rebalanced, or panel upgrade recommended if that's the real issue." },
      { label: "Test Under Load", body: "Circuit tested under real conditions to confirm it's stable before we leave." },
    ] as AccordionStep[],
  },
];
