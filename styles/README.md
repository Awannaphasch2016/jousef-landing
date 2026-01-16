# Style Options for jousef-landing

This directory contains extracted style specifications for different website themes.

---

## Available Styles

### Style A: Dark Gold (Current - jousefmurad.com)

**Status**: ✅ Implemented (current `main` branch)

| Property | Value |
|----------|-------|
| Background | Near black `#0E0E0E` |
| Accent | Gold `#DAC5A7` |
| Typography | Satoshi (body) + Georgia (display) |
| Mood | Elegant, premium, exclusive |
| Best for | High-end consulting, luxury services |

**Preview**: https://jousef-landing.vercel.app

---

### Style B: Light Blue (leadflow-marketing.de)

**Status**: 📋 Extracted (see `leadflow-style.md`)

| Property | Value |
|----------|-------|
| Background | White `#FFFFFF` |
| Accent | Blue gradient `#2563EB → #4F46E5` |
| Typography | System fonts (no custom) |
| Mood | Professional, trustworthy, clean |
| Best for | B2B services, web agencies, SaaS |

**Source**: https://www.leadflow-marketing.de/

**Files**:
- `leadflow-style.md` - Complete style guide
- `leadflow-theme.css` - CSS implementation

---

### Style C: (To be defined)

**Status**: ⏳ Pending

*Add another style option for comparison*

---

## Git Branch Strategy

Each style has its own branch:

```
main          ← Production (Style A: Dark Gold)
style-b       ← Style B: Light Blue (leadflow)
style-c       ← Style C: TBD
```

**Vercel auto-deploys each branch** with preview URLs:
- `main` → jousef-landing.vercel.app
- `style-b` → jousef-landing-git-style-b-*.vercel.app

---

## Invariants (What MUST NOT Change)

These elements stay consistent across ALL style branches:

1. **Content**: All German text unchanged
2. **Sections**: 14-section structure preserved
3. **Images**: Profile photo, any product images
4. **Links**: CTAs, navigation, social links
5. **Functionality**: Responsive, accessible

---

## Files That CAN Change Per Style

```
src/
├── index.css           # CSS variables, theme colors
├── App.css             # Component-specific styles (if any)
└── components/
    └── *.tsx           # Only className changes, not content

tailwind.config.js      # Fonts, colors, spacing

styles/                 # Style extraction docs (reference only)
```

---

## How to Create a New Style Branch

```bash
# From main branch
git checkout main
git checkout -b style-b

# Replace theme in src/index.css
# (Copy from styles/leadflow-theme.css or similar)

# Update tailwind.config.js if needed

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "feat: add Style B (leadflow light blue theme)"
git push -u origin style-b
```

Vercel will automatically create a preview deployment.

---

## Style Comparison Matrix

| Aspect | Style A (Dark Gold) | Style B (Light Blue) |
|--------|---------------------|----------------------|
| **Background** | `#0E0E0E` | `#FFFFFF` |
| **Primary Accent** | Gold `#DAC5A7` | Blue `#2563EB` |
| **Secondary** | Darker gold | Indigo `#4F46E5` |
| **Text (headings)** | Off-white | Dark gray `#111827` |
| **Text (body)** | Warm gray | Gray `#374151` |
| **Buttons** | Gold filled | Blue gradient |
| **Cards** | Dark bg, gold border | White bg, gray border |
| **Shadows** | Minimal | Heavy (shadow-xl) |
| **Fonts** | Satoshi + Georgia | System stack |
| **Mood** | Premium, exclusive | Professional, trustworthy |
| **Contrast** | Dark mode | Light mode |

---

## Extraction Skills Used

Style extraction uses two Claude Code skills:

1. **template-cloning** (`STYLE-EXTRACTION.md`)
   - Browser DevTools inspection
   - Playwright automated capture
   - Design token documentation

2. **research** (systematic investigation)
   - Multi-layer analysis
   - Pattern identification
   - Documentation

---

*Last updated: 2026-01-16*
