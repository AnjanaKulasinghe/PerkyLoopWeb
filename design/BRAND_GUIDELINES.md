# PerkyLoop Brand Guidelines

**Brand Name:** PerkyLoop  
**Tagline:** Digital Loyalty Rewards  
**Industry:** FinTech / Retail Technology  
**Region:** New Zealand (Auckland-focused)

---

## 🎨 Color Palette

### Primary Colors

```css
/* Brand Primary - Purple */
--primary: #8b5cf6;          /* Main brand color */
--primary-dark: #7c3aed;     /* Hover states */
--primary-pale: #f3e8ff;     /* Backgrounds */

/* Brand Secondary - Indigo */
--secondary: #6366f1;        /* Accent color */
--secondary-dark: #4f46e5;   /* Darker variant */
```

### Brand Gradients

```css
/* Sunset Gradient (Primary CTA) */
--gradient-sunset: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%);

/* Ocean Gradient */
--gradient-ocean: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);

/* Forest Gradient */
--gradient-forest: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);

/* Fire Gradient */
--gradient-fire: linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #dc2626 100%);
```

### UI Colors

```css
/* Backgrounds */
--surface: #ffffff;
--surface-elevated: #fafafa;
--background: #f9fafb;

/* Text */
--text-primary: #111827;     /* Headings */
--text-secondary: #6b7280;   /* Body text */
--text-tertiary: #9ca3af;    /* Captions */

/* Borders */
--border: #e5e7eb;
--border-light: #f3f4f6;

/* Status Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Semantic Colors

```css
/* Feature Categories */
--purple: #8b5cf6;    /* Loyalty programs */
--orange: #f97316;    /* Business owner features */
--teal: #14b8a6;      /* Customer rewards */
--blue: #3b82f6;      /* Analytics/insights */
--green: #10b981;     /* Success states */
--pink: #ec4899;      /* Special promotions */
```

---

## 📝 Typography

### Primary Font: **Inter**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Modern and professional
- Excellent readability at all sizes
- Variable font support
- Free and open source
- [Google Fonts Link](https://fonts.google.com/specimen/Inter)

### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Font Sizes (Desktop)
```css
--text-xs: 12px;      /* Captions, labels */
--text-sm: 14px;      /* Small text */
--text-base: 16px;    /* Body text */
--text-lg: 18px;      /* Large body */
--text-xl: 20px;      /* Small headings */
--text-2xl: 24px;     /* Section headings */
--text-3xl: 30px;     /* Page headings */
--text-4xl: 36px;     /* Hero headings */
--text-5xl: 48px;     /* Large hero */
--text-6xl: 60px;     /* Extra large */
```

### Line Heights
```css
--leading-tight: 1.25;    /* Headings */
--leading-snug: 1.375;    /* Sub-headings */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.625; /* Comfortable reading */
--leading-loose: 2;       /* Spacious */
```

### Letter Spacing
```css
--tracking-tighter: -0.05em;  /* Large headings */
--tracking-tight: -0.025em;   /* Headings */
--tracking-normal: 0;          /* Body text */
--tracking-wide: 0.025em;      /* Labels */
--tracking-wider: 0.05em;      /* Buttons, badges */
--tracking-widest: 0.1em;      /* All caps */
```

---

## 🎯 Logo Guidelines

### Logo Variations

1. **Primary Logo** - Full color with text
   - Use on white/light backgrounds
   - Minimum width: 120px

2. **Logo Mark** - Icon only
   - Use in small spaces (favicons, app icons)
   - Minimum size: 32px × 32px

3. **Monochrome** - Single color variants
   - White logo for dark backgrounds
   - Black logo for light backgrounds

### Logo Clear Space
- Maintain clear space of **1x logo height** on all sides
- No text, graphics, or other elements in clear space

### Logo Don'ts
- ❌ Don't stretch or distort
- ❌ Don't rotate the logo
- ❌ Don't change colors outside brand palette
- ❌ Don't add effects (shadows, outlines, gradients)
- ❌ Don't use on busy backgrounds without container

---

## 📐 Spacing System

```css
/* 4px base unit */
--spacing-xxs: 4px;    /* Extra tight */
--spacing-xs: 8px;     /* Tight */
--spacing-sm: 12px;    /* Small */
--spacing-base: 16px;  /* Base unit */
--spacing-md: 20px;    /* Medium */
--spacing-lg: 24px;    /* Large */
--spacing-xl: 32px;    /* Extra large */
--spacing-xxl: 40px;   /* Double XL */
--spacing-mega: 64px;  /* Mega (sections) */
```

### Padding/Margin Usage
- **Page edges:** 16px mobile, 24px desktop
- **Section spacing:** 64px vertical
- **Card padding:** 20px-24px
- **Button padding:** 12px-20px

---

## 🔲 Border Radius

```css
--radius-none: 0;
--radius-sm: 4px;      /* Small elements */
--radius-base: 8px;    /* Buttons, inputs */
--radius-md: 12px;     /* Cards */
--radius-lg: 16px;     /* Large cards */
--radius-xl: 20px;     /* Hero sections */
--radius-xxl: 24px;    /* Feature blocks */
--radius-full: 9999px; /* Pills, avatar */
```

---

## 🎭 Shadows

```css
/* Elevation System */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 
             0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 
             0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 
             0 4px 6px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 
             0 10px 10px rgba(0, 0, 0, 0.04);
```

### Shadow Usage
- **Cards:** shadow-sm
- **Hover cards:** shadow-md
- **Floating elements:** shadow-lg
- **Modals/Dialogs:** shadow-xl

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--mobile: 0px;          /* Default */
--tablet: 768px;        /* iPad, tablets */
--desktop: 1024px;      /* Laptop screens */
--desktop-lg: 1280px;   /* Large desktop */
--desktop-xl: 1536px;   /* Extra large */
```

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

---

## 🎨 Brand Personality

### Voice & Tone
- **Friendly** - But not overly casual
- **Professional** - Trustworthy and reliable
- **Local** - Kiwi references and context
- **Helpful** - Educational and supportive
- **Modern** - Fresh and innovative

### Writing Style
- Use New Zealand English spelling (favourite, colour, centre)
- Auckland as primary city reference
- "Shop" instead of "store"
- "Business owner" instead of "merchant"
- Conversational but professional

### Key Messages
1. **No more paper cards** - Digital convenience
2. **Support local businesses** - Community focus
3. **Earn rewards easily** - Simple and intuitive
4. **Made for Kiwis** - Local market focus

---

## 🏷️ Brand Applications

### Website
- Light, clean design
- Purple gradient accents
- Generous white space
- Mobile-first approach

### App
- Native feel
- Consistent with web brand
- Focus on usability
- Delightful animations

### Marketing
- Purple as primary
- Gradient backgrounds for impact
- Real New Zealand locations
- Local business photography

---

## ✅ Design Principles

1. **Clarity First** - Information hierarchy is clear
2. **Mobile Optimized** - 70% of users on mobile
3. **Fast Loading** - Performance is a feature
4. **Accessible** - WCAG 2.1 AA compliant
5. **Consistent** - Same patterns everywhere
6. **Delightful** - Smooth interactions, no jank

---

## 🚫 Brand Don'ts

- Don't use stock photos from outside NZ
- Don't use competing colors (red/yellow combos)
- Don't overcrowd layouts
- Don't use more than 3 fonts
- Don't ignore mobile experience
- Don't sacrifice accessibility for aesthetics

---

## 📏 Component Design Tokens

### Buttons
```css
/* Primary Button */
background: var(--gradient-sunset);
color: #ffffff;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-size: 16px;
letter-spacing: 0.025em;
box-shadow: var(--shadow-sm);

/* On hover */
transform: translateY(-1px);
box-shadow: var(--shadow-md);
```

### Cards
```css
background: var(--surface);
border: 1px solid var(--border-light);
border-radius: 12px;
padding: 20px;
box-shadow: var(--shadow-sm);
```

### Input Fields
```css
border: 2px solid var(--border);
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
background: var(--surface);

/* Focus state */
border-color: var(--primary);
box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
```

---

**Last Updated:** March 2026  
**Version:** 1.0  
**Maintained By:** PerkyLoop Design Team
