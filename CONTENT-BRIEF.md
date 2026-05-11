# New York City Electricians — Content Brief
**QuickFlip Sites | Build Log**
Date: May 2026
Prospect: https://newyorkcityelectricianss.com/
Template: PipeMonkey-Redesign
Reference site: https://ae-nyc-plumbing.vercel.app/contact-us (contact page layout)

---

## Source Material Summary

- **Business name:** New York City Electricians
- **Phone:** (646) 340-9882
- **Address:** 50 Saint Marks Place, New York, NY 10003
- **Experience:** 40+ years in business
- **Service area:** All five NYC boroughs (residential & commercial)
- **Socials:** Facebook (facebook.com/284236588450919), Instagram (@newyorkcityelectricians), Yelp
- **Google Maps:** https://maps.app.goo.gl/uNbQxzprdgNSnhWS8

---

## Service Inventory

All 27 services extracted from prospect site (/services page):

1. A/C & Heating Circuits Wiring
2. Appliance Installation & Troubleshooting
3. Boiler Wiring
4. Ceiling Fan/Light Installation
5. Circuit Breakers
6. Electrical Panel Replacement
7. Electrical Relocation
8. Fan Repair
9. Flickering Lights
10. Fuse Replacement
11. General Alarm Installation
12. GFCI Outlets
13. Landscape & Security Lighting
14. Light Fixture Replacement
15. Lightning Protection Installation
16. Emergency Lights and Exit Signs
17. Lighting Installation
18. New Circuits
19. New Outlets and Switches
20. Panel Change Outs
21. Panel Upgrades
22. Smoke Detector Replacement
23. Solar Panel Maintenance
24. Tripping Breakers
25. Upgrade to Existing Electrical Systems
26. Wiring Issues
27. EV Charger Installation

---

## Services Consolidated

27 prospect services grouped into 10 catalog entries. Each group is documented below with all source services it covers:

| Slug | Title | Source Services Covered |
|------|-------|------------------------|
| `panel-upgrades` | Panel Upgrades & Replacements | Panel Upgrades, Panel Replacements, Panel Change Outs, Electrical Panel Replacement |
| `ev-charger-installation` | EV Charger Installation | EV Charger Installation |
| `electrical-wiring` | Electrical Wiring & New Circuits | Electrical Wiring, New Circuits, New Outlets and Switches, Electrical Relocation, Upgrade to Existing Electrical Systems, Wiring Issues |
| `lighting-installation` | Lighting Installation | Ceiling Fan/Light Installation, Light Fixture Replacement, Lighting Installation, Landscape & Security Lighting, Emergency Lights and Exit Signs |
| `circuit-breaker-repair` | Circuit Breaker Repair | Circuit Breakers, Tripping Breakers, Flickering Lights, Fuse Replacement |
| `gfci-outlets` | GFCI Outlets & New Outlets | GFCI Outlets, New Outlets and Switches (shared) |
| `ac-heating-circuits` | A/C, Heating & Boiler Wiring | A/C & Heating Circuits Wiring, Boiler Wiring |
| `appliance-installation` | Appliance Installation & Fan Services | Appliance Installation & Troubleshooting, Fan Repair, Ceiling Fan/Light Installation (shared) |
| `home-safety-systems` | Safety & Alarm Systems | General Alarm Installation, Smoke Detector Replacement, Lightning Protection Installation, Emergency Lights and Exit Signs (shared) |
| `solar-panel-maintenance` | Solar Panel Maintenance | Solar Panel Maintenance |

**Rationale:** All groupings combine genuinely related sub-services (e.g., Tripping Breakers and Circuit Breakers are both circuit-level issues; all lighting types are grouped under Lighting Installation). No standalone services were silently dropped — every item maps to at least one slug.

---

## Pages Built & Content Decisions

| Page | Source Used | Generated | Notes |
|------|-------------|-----------|-------|
| Homepage (Hero) | Phone, service area, business type | Hero H1 + subhead | Extracted from About/Services pages |
| About Us (`/explore/nyc-electricians`) | "40 years," "five boroughs," "licensed and insured," "residential and commercial" | Learnmore section | Direct extraction from About Us page |
| Services Catalog | All 27 services from /services | 10 grouped slugs | See Services Consolidated table |
| FAQs | Inferred from prospect trade/service area | 8 FAQs generated | Electrician-specific for NYC |
| Contact Us | Address, phone, 24hr note | Form + map | Map centered on 50 Saint Marks Pl |
| Service Areas | Five boroughs extracted from site meta | Full 5-borough breakdown | Generated borough descriptions |
| Gallery | No real photos available | 4 placeholder items | TODOs on all images |
| Blog | No existing blog content | 6 placeholder posts | All marked TODO |
| Privacy Policy | Template base | Company name + phone updated | |

---

## Navigation

Template default nav retained: `Home | Services | FAQs | Contact`
Added: `Service Areas` not added to primary nav (can be added via `mainNavItems.ts` if desired)

---

## Copy Generation Log

The following was generated (no direct source copy available):
- About Us `learnMore` section body (5 paragraphs) — based on "40 years," "licensed & insured," "five boroughs," "residential and commercial" extracted from prospect site
- All FAQ content (8 items) — electrician-specific for NYC homeowners
- All service detail page copy (10 service pages) — electrician trade library
- All service area descriptions (5 boroughs) — NYC-specific
- All blog post titles and excerpts (6 posts) — NYC electrician topics
- Testimonials (3 placeholder reviews) — marked TODO for replacement

---

## Contact Page Notes

- Layout matches A&E NYC Plumbing reference (`ae-nyc-plumbing.vercel.app/contact-us`)
- **Form expanded on desktop:** `align-items: stretch` on `.contact-layout-grid` + `flex: 1` on form wrapper and textarea so form fills same height as map column
- Social icons added to footer: Facebook, Instagram, Yelp (using `icon-facebook`, `icon-instagram`, `icon-yelp` icomoon classes)
- Typed as `SocialLink[]` to prevent implicit `any[]` TS error

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Replace hero video | `components/custom/Hero.tsx` | Swap NCCER placeholder with client video or static image |
| Replace Announcements image | `components/custom/Announcements.tsx` | Replace `backgroundImage` URL with real job photo |
| Replace Difference section photo | `components/custom/Difference.tsx` | `<VapeImage src>` prop |
| Replace About Us hero background | `data/channel/nyc-electricians.tsx → hero.imageBg` | Currently using prospect site image |
| Replace About Us flex feature image | `data/channel/nyc-electricians.tsx → flexFeature.imageSrc` | Currently Pipe Monkeys placeholder |
| Replace service detail hero | `app/craft-catalog/[slug]/page.tsx → PLACEHOLDER_BG` | Shared placeholder — swap per service |
| Replace gallery photos | `app/gallery/page.tsx` | All 4 items using placeholder images |
| Replace accordion images | `lib/constants/AccordionItems.tsx` | All 4 accordion entries using placeholder images |
| Replace contact page hero | `app/contact-us/page.tsx → CraftHero bgImage` | Using prospect site image |
| Verify Google Maps embed | `app/contact-us/page.tsx` | Centered on 50 Saint Marks Pl — confirm coordinates are correct |
| Replace logos | `/public/logos/logo-94.svg` + `logo-long.svg` | Swap SVG files with NYC Electricians brand |
| Replace testimonials | `components/custom/Testimonial.tsx` | All 3 reviews marked TODO — get real Google/Yelp reviews |
| Add Yelp icon to icomoon | `components/custom/Footer.tsx` | `icon-yelp` class used — confirm it exists in the icon font, or add SVG inline |
| Verify Instagram URL | Footer | Prospect site had malformed Instagram URL — using cleaned handle @newyorkcityelectricians |
| Publish blog posts | `app/blog/page.tsx` | All 6 posts are placeholders — marked TODO |
| Form backend | `app/contact-us/page.tsx` | Connect real form handler (JotForm, HubSpot, etc.) |
| Add About Us to nav (optional) | `lib/constants/mainNavItems.ts` | Add `/explore/nyc-electricians` if desired |
