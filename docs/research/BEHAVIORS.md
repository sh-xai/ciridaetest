# Behaviors — ciridae.com

## Global Behaviors

### Smooth Scrolling (Lenis)
- Site uses Lenis smooth scroll library
- `html.lenis, html.lenis body { height: auto; }`
- Smooth, inertial scrolling feel

### Nav State Changes
- Body class `.at-top` when at scroll position 0
- Body class `.scroll-down` when scrolling down (past threshold)
- Nav likely changes background/opacity based on scroll state
- Nav uses `data-color` attribute to control light/dark state per section

### Text Scramble Animation
- Multiple sections use a cipher/decode text effect
- Characters appear scrambled and animate to their correct letters on scroll
- Visible in: Builds heading (section 1), Team heading (section 3), Careers text (section 7)
- Likely a JS-driven effect watching scroll position

### Floating Dot Particles
- Small white dots float in the Builds section background
- Subtle ambient animation

## Section-Specific Behaviors

### Hero (Section 0)
- **Video background**: autoplay, loop, muted, playsInline, objectFit: cover
- **Logo**: SVG with `data-morph` attribute — likely morphs/animates shape
- **Static layout**: No scroll-driven behavior in the hero itself

### Builds (Section 1) — SCROLL-DRIVEN
- **Sticky container**: Section is ~250vh tall, inner content is sticky
- **Text scramble**: Heading text decodes from random characters to real text as user scrolls
- **Background image**: Shared hero image with dark overlay
- **Particle dots**: Floating ambient dots

### Services (Section 2) — SCROLL-DRIVEN
- **Three cards**: Animate into view, possibly with stagger
- **Glassmorphic cards**: backdrop-filter: blur, semi-transparent background
- **Background**: Starry night sky (Hero.webp image)
- **Cards layout**: Horizontal arrangement, possibly with scroll-triggered entrance animation

### Team (Section 3) — SCROLL-DRIVEN + AUTO
- **Text scramble**: Heading decodes on scroll
- **Logo marquee/ticker**: Auto-scrolling horizontal logo strip
- **Logos repeat**: Multiple copies for seamless infinite scroll effect (logos appear 4-5 times in DOM)

### Blog (Section 4) — SCROLL-DRIVEN
- **Vertical timeline line**: Line extends downward as user scrolls through section
- **Article cards**: Appear along the timeline
- **"Read more" links**: Hover state likely
- **"EXPLORE ALL" button**: Pill button with border, hover effect

### Testimonials (Section 5) — CLICK or AUTO
- **Carousel**: Shows one testimonial at a time
- **Pagination**: "1/2" indicator
- **Transition**: Likely opacity/slide transition between cards
- **Company logos**: BV TECH, Factua

### Security (Section 6) — SCROLL-DRIVEN
- **Timeline fill**: Copper/bronze colored vertical line fills as user scrolls
- **Zigzag layout**: Items alternate left/right of the center line
- **Tags**: Numbered tags (01-DE, 02-AC, 03-IP) with copper/bronze color
- **Progress**: Line color transitions from empty to filled as each item enters viewport

### Careers (Section 7) — SCROLL-DRIVEN
- **Text scramble**: Latin phrases decode on scroll
- **Vertical list**: Centered column of phrases
- **"WORK WITH US" button**: Pill button

### Footer
- **Background image**: Light-streak photography
- **Glassmorphic card**: Frosted glass overlay with logo, CTA, navigation
- **"BEGIN THE TRANSFORMATION" button**: Large pill CTA
- **Hover states**: Navigation links likely have hover effects

## Button Styles
- **Pill buttons**: Rounded border (border-radius ~full), border: 1px solid white, no fill
- **Font**: Roboto Mono, uppercase, letter-spacing
- **Hover**: Likely fill/invert effect
- **Examples**: "START NOW", "EXPLORE ALL", "WORK WITH US", "BEGIN THE TRANSFORMATION"

## Responsive Notes
- Desktop: 1440px — full layout as described
- Tablet (768px): Likely single-column cards, stacked layout
- Mobile (390px): Stacked everything, simplified nav, possible hamburger-only nav
