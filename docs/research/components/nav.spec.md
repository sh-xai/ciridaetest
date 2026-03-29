# Nav Specification

## Overview
- **Target file:** `src/components/Nav.tsx`
- **Interaction model:** Static with scroll-based background change

## DOM Structure
Fixed nav bar spanning full width with 3-column grid: START NOW button (left), logo (center), MENU button (right).

## Computed Styles

### nav
- position: fixed
- top: 12px, left: 10px, right: 10px
- zIndex: 10
- height: ~62px

### nav_body (inner container)
- display: grid
- gridTemplateColumns: 1fr auto 1fr
- padding: 8px 24px
- alignItems: center
- borderRadius: 1424px (pill shape)
- background: transparent (gains backdrop-filter on scroll)

### START NOW button
- fontFamily: Pragmatica Cond
- fontSize: 14px
- fontWeight: 400
- color: white
- border: 1px solid white
- borderRadius: 1424px (pill)
- padding: 10px 18px
- width: 140px, height: 36px
- display: flex, alignItems: center
- textTransform: uppercase (rendered via Roboto Mono 11px)

### Logo (center)
- nav_logo link wrapping .logo-small div
- Contains the CiridaeLogoIcon SVG (reduced size ~30-40px)
- Width: auto, centered

### MENU button (right)
- fontFamily: Roboto Mono
- fontSize: 11px
- letterSpacing: 0.05em
- textTransform: uppercase
- border: 1px solid rgba(255,255,255,0.4)
- borderRadius: 1424px
- padding: 10px 24px
- display: flex, gap: 12px, alignItems: center
- Contains text "MENU" and hamburger icon (2 horizontal lines)
- Cursor: pointer

## Text Content
- Left: "START NOW"
- Center: Ciridae logo icon (SVG)
- Right: "MENU" + hamburger icon

## Responsive Behavior
- Desktop: Full 3-column grid
- Mobile: Likely simplified, logo smaller
