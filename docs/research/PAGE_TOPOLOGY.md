# Page Topology — ciridae.com

## Page-Level Layout
- Full-page Lenis smooth scroll
- Dark theme throughout (body bg: #0b0b0b)
- Fixed nav overlay (z-index high)
- Fixed burger menu overlay (full-screen, hidden by default)
- Fixed popup/contact overlay (full-screen, hidden by default)
- Fixed page transition overlay

## Sections (top to bottom)

### 0. Hero (section.section) — 0px to 719px (viewport height)
- **Content**: Logo (SVG star), "CIRIDAE" wordmark, "AUTOMATE THE MUNDANE" left / "ACCELERATE THE REMARKABLE" right, bottom tagline
- **Background**: Looping video (`hero_web.mp4` from BunnyCDN)
- **Layout**: 3-column grid (future_grid), flex column space-between
- **Interaction**: Static hero, video autoplay loop muted
- **Overlays**: Fixed nav with "START NOW" left, "MENU" right

### 1. Builds Section (section.section) — 719px to 2517px (~1798px tall)
- **Content**: "Ciridae builds" heading with text scramble animation, description paragraph, floating dot particles
- **Layout**: Sticky container within 250vh wrapper, scroll-driven text reveal
- **Background**: Same hero image (builds_bg), dark overlay
- **Interaction**: SCROLL-DRIVEN — text scrambles/decodes as you scroll through the sticky section

### 2. Services Cards (section.section) — 1798px to 3596px (~1798px tall)
- **Content**: 3 service cards in horizontal layout
  - 01-WD: Workflow Redesign
  - 02-SC: System Construction
  - 03-CC: Command and Control
- **Layout**: Horizontal scrolling cards with glassmorphic effect
- **Background**: Starry night sky image (same Hero.webp)
- **Cards**: Frosted glass (backdrop-filter: blur), with Ciridae logo icon, numbered tag, title, description
- **Interaction**: SCROLL-DRIVEN — cards animate into view as user scrolls

### 3. Team Section (section.section-space) — 3595px to 4533px (~938px)
- **Content**: "Our team" heading, "We're AI Experts from the World's Leading Organizations" subheading, "Now, we're helping the next generation..." paragraph
- **Sub-content**: "OUR WORK IS BACKED BY" with logo ticker
- **Logos**: KKR, Goldman Sachs, MongoDB, Palantir, Salesforce, Apple, Penn, Stanford, Meta, Citadel, General Atlantic, Andreessen Horowitz (marquee/ticker, repeating)
- **Interaction**: SCROLL-DRIVEN — text scramble animation on headings, logo marquee auto-scrolls

### 4. Blog Section (section.section-space) — 4533px to 5691px (~1158px)
- **Content**: "BLOG" label, "Discover the process behind our work" heading
- **Cards**: 3 blog article cards with images, category tags (News/Case study), titles, descriptions, "Read more" links
  - "Introducing the Ciridae"
  - "Restoration Rebuttal Automation"
  - "The Future of Coding Is Orchestration"
- **Layout**: Vertical timeline with connecting line, cards alternate
- **Button**: "EXPLORE ALL" pill button
- **Interaction**: Scroll-driven vertical line animation

### 5. Testimonials Section (section.section-space) — 5691px to 6566px (~875px)
- **Content**: "TESTIMONIALS" label, "What our partners say" heading
- **Cards**: 2 testimonial cards with quotes, names, titles, company logos
  - Francesco Boccardo, HEAD OF GEN AI AT BV TECH
  - Josh Albom, CEO OF FACTUA
- **Layout**: Horizontal carousel/slider (1/2 pagination indicator)
- **Interaction**: Click-driven carousel or auto-play

### 6. Security Section (section.section-space) — 6566px to 7606px (~1040px)
- **Content**: "Security" label, "Enterprise Grade Security" heading
- **Items**: 3 security features in zigzag timeline
  - 01-DE: Data Encryption
  - 02-AC: Access Control
  - 03-IP: Infrastructure Protection
- **Layout**: Vertical timeline with alternating left/right items, copper/bronze colored tags and connecting line
- **Interaction**: Scroll-driven timeline fill animation (copper color fills line as you scroll)

### 7. Careers Section (section.section) — 7606px to 8926px (~1320px)
- **Content**: "Careers" heading, "Join a team shaping the future..." subheading
- **Items**: Latin phrases with scramble animation ("Audentes fortuna iuvat", "Fortitudine Vincimus", "Carpe diem"), each with sub-text ("Join us", "Build the future")
- **Button**: "WORK WITH US" pill button
- **Layout**: Centered vertical column with rotating/scrambling text
- **Interaction**: SCROLL-DRIVEN text scramble

### 8. Footer (div.footer) — ~8926px to ~10148px
- **Background**: Light-streak photography image (footer-img-03.webp) with glassmorphic card overlay
- **Content**: Ciridae logo + wordmark, "BEGIN THE TRANSFORMATION" CTA button
- **Sub-content**: "SAN FRANCISCO" left, "EST. 2025" right
- **Navigation**: HOME, ABOUT, SERVICES, BLOG (centered)
- **Legal**: Privacy Policy, Terms and Conditions, All rights reserved 2026©
- **Layout**: Centered card with frosted glass effect over image background

## Fixed Overlays
- **Nav**: position fixed, top 0, full width, contains "START NOW" button (left) and "MENU" button (right)
- **Burger Menu**: Full-screen overlay with nav links (Home, About, Services, Blog), social links (LinkedIn, X), copyright
- **Popup/Contact**: Full-screen overlay with email (js@ciridae.com), contact info
- **Transition**: Page transition overlay (solid color)

## Z-Index Layers (estimated)
1. Page content (sections) — base
2. Nav — fixed, above content
3. Burger menu — fixed, above nav
4. Popup — fixed, above burger
5. Transition — fixed, highest
