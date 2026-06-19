# CriterIA — LegalTech AI Platform Requirements

## 1. Company Overview

- **Brand:** CriterIA (LegalTech AI for SMEs & Startups)
- **Tagline (example):** *"AI-Powered Legal Intelligence for Modern Businesses"*
- **Target Audience:** SMEs, startups, and growing businesses that need affordable, AI-driven legal support

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (functional components + hooks) |
| Build Tool | Vite |
| Styling | Bootstrap 5 + custom CSS overrides |
| Routing | React Router v6 |
| SEO | `react-helmet-async` for per-page meta tags |
| Forms | React Hook Form + Zod validation |
| Icons | Bootstrap Icons or React Icons |
| Animations | AOS (Animate on Scroll) — lightweight |
| HTTP | Axios (for future API integration) |

---

## 3. Design & Branding

### Visual Identity
- **Vibe:** Professional & Conservative with a modern tech edge
- **Primary Color:** Dark Purple (`#2D1B69`)
- **Accent Color:** Electric Blue (`#0055FF`)
- **Neutrals:** White (`#FFFFFF`), Light Gray (`#F8F9FA`), Dark Gray (`#343A40`)
- **Typography:**
  - Headings: Serif (e.g. Playfair Display or Merriweather) — conveys tradition & trust
  - Body: Sans-serif (e.g. Inter or Plus Jakarta Sans) — clean & readable
- **Dark Mode:** Optional, via CSS custom properties + Bootstrap 5 dark mode toggle

### Design Principles
- Mobile-first, fully responsive (xs through xxl breakpoints)
- Generous whitespace for readability
- Consistent spacing scale (8px grid)
- Clear visual hierarchy with distinct section backgrounds (light gray alternating with white)

---

## 4. Sitemap & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, trust bar, feature cards, how-it-works, testimonials, final CTA |
| `/about` | About Us | Mission, story, team, company values |
| `/services` | Services | Grid catalog of all 8 AI legal services with category filter |
| `/services/:slug` | Service Detail | Deep-dive per service: description, features, benefits, pricing, CTA |
| `/pricing` | Pricing | 3-tier plan comparison (Basic / Pro / Enterprise) with monthly/annual toggle |
| `/blog` | Blog | Article card grid with pagination and category sidebar |
| `/blog/:slug` | Blog Post | Full article with author, date, related posts |
| `/faq` | FAQ | Searchable accordion of common questions |
| `/contact` | Contact | Inquiry form + email, phone, address, business hours |
| `/demo` | Demo Request | Book a demo form with date/time picker |
| `/careers` | Careers | Job openings list + application instructions |
| `/resources` | Resources | Whitepapers, guides, case studies, downloadable PDFs |
| `/*` | 404 | Friendly not-found page with navigation help |

---

## 5. Services (AI-Powered Legal Tools)

All eight services to be featured on the Services page and individually on Service Detail pages:

1. **Contract Review** — AI-assisted contract analysis, clause extraction, risk flagging
2. **Legal Research** — AI-powered case law, statute, and regulatory search
3. **Document Automation** — Auto-generation of contracts, NDAs, terms of service
4. **Due Diligence** — AI-driven M&A and compliance due diligence reports
5. **Compliance Monitoring** — Real-time regulatory compliance tracking and alerts
6. **Litigation Analytics** — Predictive analytics for case outcomes and judge history
7. **AI Legal Assistant** — Conversational chatbot for client intake and Q&A
8. **E-Discovery** — AI-powered electronic discovery and document classification

---

## 6. Page-by-Page Component Breakdown

### 6.1 Global Components
- **Navbar** — Sticky, responsive, hamburger on mobile, smooth scroll to page sections, active link highlighting
- **Footer** — Multi-column: quick links, services list, social icons, newsletter signup input
- **SEO Head** — Per-page title and meta description via `react-helmet-async`
- **Scroll To Top** — Button appears on scroll down
- **Breadcrumbs** — On interior pages (Services, Blog, Resources)

### 6.2 Home Page
- **Hero Section** — Headline ("Legal Intelligence, Powered by AI"), subtitle, two CTA buttons ("Get Started" / "Book a Demo"), optional background graphic
- **Trust Bar** — Client logos, partner badges, certification icons (horizontal scroll)
- **Value Props** — 3–4 feature cards: Speed, Accuracy, Affordability, Accessibility
- **How It Works** — 3-step numbered process (Upload → AI Analyze → Get Results)
- **Testimonials** — Carousel/slider with client quotes, avatar, company name
- **Final CTA** — Banner with headline + button ("See Plans & Pricing")

### 6.3 About Page
- **Mission Statement** — Company vision and purpose
- **Story Section** — How and why CriterIA was founded
- **Team Grid** — Photos, names, roles, short bios
- **Values** — List of core values with icons

### 6.4 Services Page
- **Header** — Page title + short intro paragraph
- **Filter Tabs** — "All" / "Contract" / "Research" / "Compliance" / etc.
- **Service Card Grid** — Each card: icon, title, 1-line description, "Learn More" link
- **CTA Banner** — "Not sure which service fits? Contact us."

### 6.5 Service Detail Page
- **Hero** — Service name, icon, short description
- **Feature List** — Bullet points with check icons
- **Benefits Section** — How this service helps SMEs/startups
- **Pricing Snippet** — Starting price or link to pricing page
- **CTA** — "Try it Now" / "Book a Demo"

### 6.6 Pricing Page
- **Toggle** — Monthly / Annual billing (show % savings on annual)
- **Plan Cards** — 3 tiers: Basic (starter), Pro (most popular), Enterprise (custom)
  - Each card: plan name, price, bullet feature list, CTA button
  - "Most Popular" badge on Pro card
- **FAQ** — Collapsible questions about billing, refunds, upgrades

### 6.7 Blog Page
- **Card Grid** — Featured image, title, excerpt, date, category tag, "Read More"
- **Pagination** — Numbered page buttons at bottom
- **Sidebar** — Categories list, recent posts, search input

### 6.8 Blog Post Page
- **Article** — Full content with images, blockquotes, code blocks if applicable
- **Meta** — Author name + avatar, publish date, read time
- **Share Buttons** — LinkedIn, Twitter, Copy Link
- **Related Posts** — 2–3 cards at bottom
- **Comments** — Optional (disabled initially, can add later)

### 6.9 FAQ Page
- **Search Bar** — Filter questions by keyword
- **Accordion** — One question open at a time, smooth expand/collapse
- **Categories** — Grouped sections (e.g. Billing, Platform, Security)

### 6.10 Contact Page
- **Form** — Name, Email, Phone, Company, Service Interest (dropdown), Message (textarea)
- **Contact Info** — Email, phone, physical address, business hours
- **Map** — Optional embedded Google Map

### 6.11 Demo Request Page
- **Form** — Name, Email, Phone, Company Size, Service Interest (multi-select), Preferred Date/Time, Message
- **Confirmation** — Thank-you message after submission

### 6.12 Careers Page
- **Header** — "Join the Team" + culture blurb
- **Job Listings** — Accordion or expandable cards per role (title, location, type, description)
- **Apply CTA** — Link or email for applications

### 6.13 Resources Page
- **Filter** — By type (Whitepaper, Guide, Case Study) or topic
- **Resource Cards** — Thumbnail, title, description, download button (PDF)

### 6.14 404 Page
- **Illustration** — Simple graphic
- **Message** — "Page not found" + suggestion links (Home, Services, Contact)

---

## 7. UX & Interaction Requirements

### States Per Component
- **Loading:** Skeleton screens or Bootstrap spinners for async content
- **Empty:** Graceful fallback text (e.g. "No blog posts yet — check back soon")
- **Error:** Inline validation on forms, friendly error banners for server issues
- **Edge Cases:** Long service names truncate gracefully, very long dropdowns scroll

### Responsiveness
- Mobile-first breakpoints: xs (<576), sm (≥576), md (≥768), lg (≥992), xl (≥1200), xxl (≥1400)
- Navbar collapses to hamburger on md and below
- Card grids: 1 col on xs, 2 on md, 3–4 on lg+
- Tables (pricing): stacked cards on mobile instead of columns
- Forms: full-width inputs on mobile, inline on desktop

### Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, etc.)
- ARIA labels on interactive elements
- Keyboard-navigable menus and accordions
- Alt text on all images
- Color contrast ratio ≥ 4.5:1 for text

---

## 8. State Management & Data

- **Static Content:** Page data stored in `/src/data/` as structured JSON/JS files (no CMS needed for v1)
- **Global State:** React Context for theme toggle (dark/light) and optional user session
- **Form State:** React Hook Form + Zod schema validation
- **API Layer:** Axios instance prepared for future backend; mock data in development

---

## 9. Performance & Build

- **Code Splitting:** `React.lazy` + `Suspense` for every page route
- **Image Optimization:** Use `vite-imagetools` or WebP format with `<picture>` fallbacks
- **Bundling:** Vite's default Rollup config with manual chunk splitting for vendor libs
- **Caching:** Hash-based filenames (Vite default) for cache busting
- **SPA Fallback:** `404.html` or server config for client-side routing on static hosts
- **Lighthouse Target:** ≥ 90 on Performance, Accessibility, Best Practices, SEO

---

## 10. Project Structure

```
criteria-website/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.ico
│   └── robots.txt
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── fonts/
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── SEO.jsx
    │   │   ├── Breadcrumbs.jsx
    │   │   └── ScrollToTop.jsx
    │   └── ui/
    │       ├── Button.jsx
    │       ├── Card.jsx
    │       ├── Accordion.jsx
    │       ├── TestimonialCarousel.jsx
    │       ├── PricingToggle.jsx
    │       ├── Skeleton.jsx
    │       └── EmptyState.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── ServiceDetail.jsx
    │   ├── Pricing.jsx
    │   ├── Blog.jsx
    │   ├── BlogPost.jsx
    │   ├── FAQ.jsx
    │   ├── Contact.jsx
    │   ├── DemoRequest.jsx
    │   ├── Careers.jsx
    │   ├── Resources.jsx
    │   └── NotFound.jsx
    ├── hooks/
    │   ├── useTheme.js
    │   └── useFetch.js
    ├── data/
    │   ├── services.json
    │   ├── testimonials.json
    │   ├── team.json
    │   ├── faq.json
    │   ├── blog-posts.json
    │   ├── pricing.json
    │   ├── jobs.json
    │   └── resources.json
    ├── styles/
    │   ├── custom.css
    │   └── dark-mode.css
    ├── utils/
    │   ├── constants.js
    │   └── helpers.js
    └── routes.jsx
```

---

## 11. Future Enhancements (v2+)

- CMS integration (Contentful / Sanity / Strapi) for blog & resources
- Client authentication portal
- Live AI Chatbot widget on all pages
- Multi-language support (i18n)
- Analytics dashboard (usage metrics for enterprise clients)
- E-signature integration (DocuSign / HelloSign)
- Payment gateway (Stripe) for subscription billing
