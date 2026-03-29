# BuildsSection Specification

## Overview
- **Target file:** `src/components/BuildsSection.tsx`
- **Interaction model:** Scroll-driven text reveal with sticky container

## Description
A large scroll-driven section (~250vh) with a sticky inner container. As the user scrolls, a heading text "Ciridae builds" with a description below it is revealed through a text scramble/decode animation. The background shows the hero image with floating dot particles.

## DOM Structure
```
section (height: 250vh, position: relative)
  div.container (padding: 0 20px)
    div.builds (height: 250vh, position: relative)
      div.builds_sticky (position: sticky, top: 0, height: 100vh)
        div.builds_bg (absolute, inset-0, z-0)
          img (hero.webp, object-cover)
          div (dark overlay)
        div.builds_content (relative, z-10, flex column, center, gap-40)
          div (content wrapper)
            p.label "Ciridae builds" (small mono tag)
            h2 "We redesign Complex workflows around AI, build the systems that execute them, and operate those systems in production." (large heading)
            p (description paragraph)
          div.particles (floating dots)
```

## Key Styles

### Section wrapper
- height: 250vh (creates scroll space for sticky effect)
- position: relative

### Sticky container
- position: sticky
- top: 0
- height: 100vh
- overflow: hidden

### Background
- Image: /images/hero.webp with object-cover
- Dark overlay: bg-black/70 or similar

### Label "Ciridae builds"
- font-mono, text-[11px], uppercase, tracking-wider, text-white/50

### Main heading
- font-sans, text-[62px], font-normal, text-white/60, uppercase
- max-width: ~900px, text-center, leading-[1.1]

### Description
- font-body, text-[15px], text-white/40, text-center, max-w-[600px], leading-[1.6]

## Behavior
For the static clone, render the text in its final decoded state. The scramble animation requires JS and can be added as an enhancement later.

## Floating particles
Small white dots (4-6) positioned absolutely with subtle float animation.
