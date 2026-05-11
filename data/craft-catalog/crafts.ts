export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "panel-upgrades",
    title: "Panel Upgrades & Replacements",
    categories: ["Electrical Panels"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "ev-charger-installation",
    title: "EV Charger Installation",
    categories: ["Specialty Services"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "electrical-wiring",
    title: "Electrical Wiring & New Circuits",
    categories: ["Wiring"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "lighting-installation",
    title: "Lighting Installation",
    categories: ["Lighting"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "circuit-breaker-repair",
    title: "Circuit Breaker Repair",
    categories: ["Repairs"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "gfci-outlets",
    title: "GFCI Outlets & New Outlets",
    categories: ["Wiring"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "ac-heating-circuits",
    title: "A/C, Heating & Boiler Wiring",
    categories: ["Wiring"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "appliance-installation",
    title: "Appliance Installation & Fan Services",
    categories: ["Repairs"],
    disciplines: ["Residential"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "home-safety-systems",
    title: "Safety & Alarm Systems",
    categories: ["Safety"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "solar-panel-maintenance",
    title: "Solar Panel Maintenance",
    categories: ["Specialty Services"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Electrical Panels",
  "Wiring",
  "Lighting",
  "Repairs",
  "Safety",
  "Specialty Services",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Residential",
  "Commercial",
] as const;
