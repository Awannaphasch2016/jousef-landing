# Leadflow Marketing Style Guide

**Source**: https://www.leadflow-marketing.de/
**Extracted**: 2026-01-16
**Purpose**: Style B option for jousef-landing

---

## Overview

**Style Category**: Modern Corporate / Professional SaaS
**Theme Mode**: Light (white background with blue accents)
**Overall Aesthetic**: Clean, trustworthy, professional with blue gradient accents

**Key Characteristics**:
- Light, airy backgrounds (white/gray)
- Blue-to-indigo gradient as primary accent
- System font stack (no custom fonts)
- Rounded corners throughout (10-16px)
- Subtle shadows for depth
- Gray borders for definition
- Generous whitespace

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Blue | `#2563EB` | `rgb(37, 99, 235)` | Buttons, links, accent text |
| Indigo | `#4F46E5` | `rgb(79, 70, 229)` | Gradient endpoint |
| Blue-600 | `#2563EB` | `rgb(37, 99, 235)` | Primary buttons |
| Blue-700 | `#1D4ED8` | `rgb(29, 78, 216)` | Button hover |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| White | `#FFFFFF` | `rgb(255, 255, 255)` | Background |
| Gray-50 | `#F9FAFB` | `rgb(249, 250, 251)` | Section alt bg |
| Gray-200 | `#E5E7EB` | `rgb(229, 231, 235)` | Borders |
| Gray-300 | `#D1D5DB` | `rgb(209, 213, 219)` | Card borders |
| Gray-500 | `#6B7280` | `rgb(107, 114, 128)` | Muted text |
| Gray-700 | `#374151` | `rgb(55, 65, 81)` | Secondary text |
| Gray-900 | `#111827` | `rgb(17, 24, 39)` | Headings |

### Dark Section Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Slate-800 | `#1E293B` | `rgb(30, 41, 59)` | Dark section bg |
| Slate-900 | `#0F172A` | `rgb(15, 23, 42)` | Dark section bg |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| Red/Coral | `#EF4444` | Error icons, warning badges |
| Green | `#10B981` | Success icons, checkmarks |
| Yellow-100 | `#FEF3C7` | Icon backgrounds |
| Purple-100 | `#F3E8FF` | Icon backgrounds |
| Blue-100 | `#DBEAFE` | Icon backgrounds |

---

## Gradients

### Primary Gradient (Blue → Indigo)
```css
/* Buttons, accent elements */
background: linear-gradient(to right, #2563EB, #4F46E5);

/* Tailwind */
bg-gradient-to-r from-blue-600 to-indigo-600
```

### Hover Gradient (Darker)
```css
background: linear-gradient(to right, #1D4ED8, #4338CA);

/* Tailwind */
bg-gradient-to-r from-blue-700 to-indigo-700
```

### Section Gradients
```css
/* Light section fade */
background: linear-gradient(to bottom, white, #F9FAFB);

/* Tailwind */
bg-gradient-to-b from-white to-gray-50

/* Dark section */
background: linear-gradient(135deg, #1E293B, #0F172A, #1E293B);

/* Tailwind */
bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800
```

---

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
             "Segoe UI Emoji", "Segoe UI Symbol";
```

### Heading Styles

| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| H1 | 48px | 700 (bold) | 60px | Gray-900 |
| H2 | 48px | 700 (bold) | 48px | Gray-900 |
| H3 | 24px | 700 (bold) | 32px | Gray-900 |
| Body | 16px | 400 (normal) | 24px | Gray-700 |
| Subtext | 14px | 400 (normal) | 20px | Gray-500 |

### Special Typography

```css
/* Gradient text effect */
.gradient-text {
  background: linear-gradient(to right, #2563EB, #4F46E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Tailwind */
bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent
```

---

## Components

### Buttons

#### Primary CTA Button
```css
.btn-primary {
  background: linear-gradient(to right, #2563EB, #4F46E5);
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Tailwind */
inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600
text-white px-6 py-3 rounded-lg font-semibold
hover:from-blue-700 hover:to-indigo-700
transition-all shadow-lg hover:shadow-xl hover:scale-105
```

#### Secondary/Ghost Button
```css
.btn-secondary {
  background: transparent;
  color: #374151;
  padding: 12px 24px;
  border: 1px solid #D1D5DB;
  border-radius: 10px;
}
```

### Cards

#### Standard Card
```css
.card {
  background: white;
  border: 2px solid #D1D5DB;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Tailwind */
bg-white border-2 border-gray-300 rounded-xl p-6
shadow-xl hover:shadow-2xl transition-shadow
```

#### Icon Badge
```css
.icon-badge {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Color variants */
.icon-badge-blue { background: #DBEAFE; }
.icon-badge-yellow { background: #FEF3C7; }
.icon-badge-purple { background: #F3E8FF; }
.icon-badge-green { background: #D1FAE5; }
```

### Navigation

```css
.navbar {
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #E5E7EB;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Tailwind */
fixed top-0 left-0 right-0 z-50
bg-white/95 backdrop-blur-lg
border-b border-gray-200 shadow-sm
```

---

## Layout

### Section Spacing
```css
/* Standard section */
padding: 96px 0 48px 0;

/* Large section */
padding: 128px 0;

/* Tailwind */
py-24    /* 96px */
py-32    /* 128px */
pt-24 pb-12  /* top heavy */
```

### Container
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 24px;

/* Tailwind */
max-w-7xl mx-auto px-6
```

### Grid Patterns

```css
/* 4-column grid (portfolio) */
grid-template-columns: repeat(4, 1fr);
gap: 24px;

/* Tailwind */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6

/* 2-column grid (features) */
grid-template-columns: repeat(2, 1fr);
gap: 32px;

/* Tailwind */
grid grid-cols-1 md:grid-cols-2 gap-8
```

---

## Effects

### Shadows
```css
/* Card shadow */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 8px 10px -6px rgba(0, 0, 0, 0.1);

/* Elevated shadow */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Tailwind */
shadow-xl      /* card */
shadow-2xl     /* elevated */
```

### Border Radius
```css
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-xl: 16px;

/* Tailwind */
rounded-lg     /* 8px */
rounded-xl     /* 12px */
rounded-2xl    /* 16px */
```

### Glow Effect (behind cards)
```css
.glow {
  position: absolute;
  inset: -4px;
  background: linear-gradient(to right, #BFDBFE, #C7D2FE);
  border-radius: 16px;
  filter: blur(8px);
  opacity: 0.4;
}

/* Tailwind */
absolute -inset-1 bg-gradient-to-r from-blue-200 to-indigo-200
rounded-2xl blur opacity-40
```

### Hover Transitions
```css
transition: all 0.2s ease;

/* Hover scale */
transform: scale(1.05);

/* Tailwind */
transition-all hover:scale-105
```

---

## Section Patterns

### Hero Section
- White background
- Split layout (text left, media right)
- Video/image with browser chrome mockup
- Stats badges below media
- Blue gradient text for key phrases
- Primary CTA + secondary link

### Portfolio/Mockups Section
- White background
- 4-column grid of website screenshots
- Cards with 2px gray border
- Category label + description below image
- "Demo ansehen →" link

### Dark Problem Section
- Dark slate gradient background
- Browser mockup illustration (negative example)
- Red X icons for problems
- Warning/alert styling

### Target Audience Section
- Light gradient background (white → gray-50)
- Large centered card
- 2-column grid of audience types
- Blue icon badges

### Process/Timeline Section
- Numbered steps (01, 02, 03)
- Vertical connecting line
- Duration badges
- Icons for each step

### FAQ Section
- Accordion pattern
- Full-width items
- Hover state (gray-50 bg)
- Plus/minus icons

---

## CSS Variables (for Tailwind)

```css
:root {
  /* Light theme - default */
  --background: 0 0% 100%;           /* white */
  --foreground: 222 47% 11%;         /* gray-900 */

  --primary: 221 83% 53%;            /* blue-600 */
  --primary-foreground: 0 0% 100%;   /* white */

  --secondary: 220 14% 96%;          /* gray-100 */
  --secondary-foreground: 222 47% 11%;

  --muted: 220 14% 96%;              /* gray-100 */
  --muted-foreground: 220 9% 46%;    /* gray-500 */

  --accent: 239 84% 67%;             /* indigo-500 */
  --accent-foreground: 0 0% 100%;

  --card: 0 0% 100%;                 /* white */
  --card-foreground: 222 47% 11%;

  --border: 220 13% 91%;             /* gray-200 */
  --ring: 221 83% 53%;               /* blue-600 */

  --radius: 0.625rem;                /* 10px */
}
```

---

## Comparison with Current Style (jousefmurad.com)

| Aspect | Current (Dark/Gold) | Leadflow (Light/Blue) |
|--------|---------------------|----------------------|
| Background | Near black (#0E0E0E) | White (#FFFFFF) |
| Accent | Gold (#DAC5A7) | Blue gradient |
| Typography | Satoshi + Georgia | System fonts |
| Mood | Elegant, premium | Professional, trustworthy |
| Borders | Subtle gold | Gray with shadows |
| Cards | Dark with gold | White with gray borders |
| CTAs | Gold filled | Blue gradient |

---

## Implementation Notes

To implement this style as "Style B":

1. **Replace CSS variables** in `src/index.css`:
   - Switch to light theme colors
   - Use blue/indigo as primary

2. **Update Tailwind config**:
   - Remove custom fonts (use system)
   - Keep rounded corners (already similar)

3. **Component changes**:
   - Add gradient backgrounds to buttons
   - Add gray borders to cards
   - Switch to light section backgrounds
   - Add blue gradient text effect

4. **Keep content unchanged** (German text, 14 sections)

---

*Style extracted using webapp-testing skill (Playwright) + template-cloning skill (STYLE-EXTRACTION.md)*
