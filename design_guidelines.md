# WebGlow Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS landing pages (Stripe, Linear) combined with the existing dark mode implementation provided. The design balances professionalism with accessibility for small business owners.

## Core Design Principles
1. **Dual Mode Excellence**: Both light and dark modes must feel intentional and premium
2. **Glow Effect Branding**: Strategic use of aqua/blue glowing highlights reinforces "WebGlow" brand identity
3. **Trust Through Simplicity**: Clean, uncluttered layouts that don't overwhelm MSME owners

---

## Typography

**Font Family**: 'Outfit' from Google Fonts (300, 500, 700 weights)

**Hierarchy**:
- Hero Title: 2.5rem (mobile) → 3.5rem (desktop), weight 700
- Section Headings: 2rem, weight 600
- Card Titles: 1.25rem, weight 500
- Body Text: 1rem, weight 300
- Small Text/Footer: 0.9rem

---

## Layout System

**Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-12 (mobile) → py-20 (desktop)
- Card gaps: 6 (mobile) → 8 (desktop)
- Inner padding: p-6 to p-8

**Container Widths**:
- Maximum content width: max-w-6xl
- Card containers: max-w-4xl
- Portfolio grid: max-w-7xl (needs more space for screenshots)

---

## Color System

### Dark Mode (Primary)
- **Background**: #0a0a0a (deep black)
- **Surface**: #0e0e0e to #1a1a1a (gradient cards)
- **Primary Accent**: #00d9ff (aqua glow)
- **Secondary Accent**: #00b8ff
- **Text**: #e8e8e8 (primary), #999 (secondary)
- **Borders**: #222

### Light Mode
- **Background**: #ffffff
- **Surface**: Linear gradient from #f0f9ff to white
- **Primary Accent**: #0891b2 (cyan-600)
- **Secondary Accent**: #06b6d4 (cyan-500)
- **Text**: #1e293b (slate-800), #64748b (slate-500 secondary)
- **Borders**: #e2e8f0

---

## Component Library

### Hero Section
- Full viewport height (90vh) with centered content
- Radial gradient background (dark: #111122 to #000, light: soft blue to white)
- Large title with glow effect (text-shadow in dark mode)
- Tagline below title
- Single prominent CTA button
- **No hero image** - pure gradient focus

### Service Cards
- Two-column grid on desktop (grid-cols-1 md:grid-cols-2)
- Rounded corners (12px border-radius)
- Subtle shadows with glow on hover
- Icon emoji + title + description structure
- Dark: gradient background with border, Light: white cards with shadow
- Hover: translateY(-4px) + enhanced glow/shadow

### Portfolio/My Work Section
- **Critical Addition**: Masonry-style or 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card displays:
  - Website screenshot (16:9 aspect ratio placeholder)
  - Project title
  - Brief description (1-2 lines)
  - "View Live Site" link button
  - Hover effect: scale(1.02) with enhanced glow
- Screenshot containers with rounded corners and subtle border
- Opens links in new tab (target="_blank")

### Why Choose Section
- Three benefit points in horizontal flex layout (wrap on mobile)
- Each point: Icon emoji + text
- Equal spacing with gap-6 to gap-8
- Light background treatment to separate from other sections

### Contact Section
- Centered layout
- WhatsApp button with icon (primary style)
- Email link with icon (secondary style)
- Both buttons with glow effects in dark mode

### Mode Toggle
- Fixed position top-right corner
- Icon-based toggle (sun/moon)
- Smooth transition between modes (transition-all duration-300)
- Accessible with keyboard navigation

---

## Interactive Elements

### Buttons
**Primary CTA** (e.g., "Get Started"):
- Background: #00d9ff (dark) / #0891b2 (light)
- Padding: px-8 py-3
- Border-radius: 8px
- Box-shadow with glow effect
- Hover: scale(1.05) + enhanced glow
- Font-weight: 600

**Secondary/Link Buttons**:
- Underline on hover
- Color matches accent with glow effect
- Smooth color transition

### Cards
- All cards have subtle hover states
- Transform: translateY(-4px)
- Enhanced shadow/glow on hover
- Smooth 300ms transition

---

## Animations

**Minimal & Purposeful**:
- Smooth scroll behavior
- Button hover scale (1.05)
- Card hover lift (translateY)
- Glow intensity changes on hover
- Mode toggle fade transition

**No**: Scroll-triggered animations, parallax, auto-playing sliders

---

## Icons

**Font Awesome** (via CDN) for:
- WhatsApp icon
- Email icon
- Sun/moon toggle icons
- Social media icons in footer (if added)

Use emoji for service/benefit icons to maintain playful, approachable feel.

---

## Images

### Portfolio Screenshots
- **Location**: My Work section cards
- **Description**: Website screenshots showing completed client projects in desktop browser frames
- **Aspect Ratio**: 16:9
- **Treatment**: Subtle border, rounded corners (8px), shadow on dark mode, soft shadow on light mode
- **Placeholders**: Use diverse business types (restaurant, salon, retail store, professional services)

**Note**: No large hero image - brand identity comes from gradient + glow effects

---

## Responsive Behavior

**Breakpoints**: mobile-first approach
- Mobile: Single column, stacked layouts
- Tablet (768px): Two-column service cards, portfolio cards
- Desktop (1024px): Full multi-column layouts, horizontal benefit points

**Typography scales down** 15-20% on mobile
**Padding reduces** by ~40% on mobile (py-20 → py-12)
**Portfolio grid**: 1 column (mobile) → 2 (tablet) → 3 (desktop)

---

## Accessibility

- High contrast ratios (WCAG AA minimum)
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Keyboard navigable mode toggle
- Alt text for portfolio images
- Semantic HTML structure
- aria-labels for icon-only buttons