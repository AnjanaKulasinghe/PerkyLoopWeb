# 🎁 PerkyLoop Website

**Digital Loyalty Rewards Made for Kiwi Businesses**

A modern, responsive marketing website for PerkyLoop - a digital loyalty card app connecting New Zealand businesses with customers.

![Version](https://img.shields.io/badge/version-1.0.0-purple)
![Status](https://img.shields.io/badge/status-production-success)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🌐 Live Demo

**Website:** [https://perkyloop.com](https://perkyloop.com) *(Update with your GitHub Pages URL)*

---

## ✨ Features

### For Visitors
- 🎨 **Beautiful Design** - Modern gradient-based UI with smooth animations
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Fast Loading** - Optimized performance with no heavy frameworks
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎯 **Clear CTAs** - Easy path to download the app or sign up for business

### Technical Features
- 🚀 **Pure HTML/CSS/JS** - No build process required
- 🎭 **Smooth Animations** - Intersection Observer API for scroll animations
- 📊 **Interactive Elements** - FAQ accordion, mobile menu, counter animations
- 🎨 **CSS Variables** - Easy theme customization
- 💫 **Modern CSS** - Flexbox, Grid, custom properties
- 📦 **GitHub Pages Ready** - Static site, no backend needed

---

## 📁 Project Structure

```
PerkyLoopWeb/
├── index.html          # Main landing page
├── business.html       # Business owners page
├── styles.css          # All styling (CSS variables, animations, responsive)
├── script.js           # Interactivity and animations
├── README.md           # This file
├── content/            # Content documentation
│   ├── COPY.md        # Website copy
│   └── FEATURES.md    # Feature descriptions
├── design/             # Design documentation
│   └── BRAND_GUIDELINES.md
└── assets/             # Future: images, icons, etc.
```

---

## 🚀 Quick Start

### Option 1: Open Locally

1. **Clone or download** this repository
2. **Open `index.html`** in your browser
3. That's it! No build process needed.

```bash
# If you have Python installed, you can run a local server:
python -m http.server 8000

# Or with Node.js:
npx http-server
```

Then open `http://localhost:8000` in your browser.

---

## 🌍 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `perkyloop-website` (or your preferred name)
3. Make it **public** (required for free GitHub Pages)

### Step 2: Push Your Code

```bash
# Navigate to your project folder
cd /path/to/PerkyLoopWeb

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: PerkyLoop website"

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/perkyloop-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### Step 4: Access Your Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/perkyloop-website/
```

---

## 🎨 Customization Guide

### Colors & Branding

Edit CSS variables in `styles.css` (lines 3-60):

```css
:root {
    /* Change primary color */
    --primary: #8b5cf6;
    
    /* Change gradients */
    --gradient-sunset: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%);
}
```

### Content

All content is in the HTML files. Search for specific sections:

- **Hero text:** Search for `class="hero-title"`
- **Features:** Search for `class="features-grid"`
- **Testimonials:** Search for `class="testimonials-grid"`
- **Pricing:** Search for `class="pricing-grid"`

### Add Images

1. Create an `images/` folder in the root
2. Add your images
3. Update HTML:

```html
<!-- Replace emoji with image -->
<img src="images/phone-mockup.png" alt="App Screenshot">
```

---

## 📱 Pages Overview

### index.html (Home Page)
- Hero section with app download CTAs
- Features showcase (6 key features)
- How it works (3 steps)
- Customer testimonials
- App download section
- Business teaser
- Footer

### business.html (Business Page)
- Business-focused hero
- Benefits for businesses (6 benefits)
- Features checklist
- **Pricing plans** (Free, Starter, Professional, Enterprise)
- Business how-it-works (4 steps)
- FAQ section (8 questions)
- Sign-up CTA

---

## 🎯 SEO & Performance

### Already Included:
- ✅ Semantic HTML5
- ✅ Meta descriptions
- ✅ Open Graph tags (ready to add)
- ✅ Fast loading (no dependencies)
- ✅ Responsive images
- ✅ Accessible (ARIA labels)

### To Improve SEO:

1. **Add Open Graph tags** in `<head>`:

```html
<meta property="og:title" content="PerkyLoop - Digital Loyalty Rewards">
<meta property="og:description" content="Join your favourite local shops' loyalty programs and earn rewards from your phone.">
<meta property="og:image" content="https://yoursite.com/images/og-image.jpg">
<meta property="og:url" content="https://perkyloop.com">
```

2. **Add Google Analytics**:

```html
<!-- Before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

3. **Create `sitemap.xml`**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://perkyloop.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://perkyloop.com/business.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

4. **Create `robots.txt`**:

```
User-agent: *
Allow: /

Sitemap: https://perkyloop.com/sitemap.xml
```

---

## 🔧 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎭 Animation Features

The website includes several smooth animations:

1. **Scroll Animations** - Elements fade in as you scroll
2. **Stats Counter** - Numbers count up when visible
3. **FAQ Accordion** - Smooth expand/collapse
4. **Mobile Menu** - Animated hamburger menu
5. **Hover Effects** - Cards lift on hover
6. **Ripple Effect** - Button click feedback
7. **Parallax** - Hero gradient moves on scroll
8. **Chart Animation** - Dashboard bars animate in

---

## 🐛 Troubleshooting

### Issue: Animations not working
**Solution:** Make sure JavaScript is enabled in your browser. Check browser console for errors.

### Issue: Mobile menu not opening
**Solution:** Clear browser cache and reload. Ensure `script.js` is loading properly.

### Issue: GitHub Pages not updating
**Solution:** 
1. Check that you pushed to the correct branch
2. Wait 2-5 minutes for GitHub to rebuild
3. Clear your browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Issue: Fonts not loading
**Solution:** Check your internet connection. Google Fonts requires internet access.

---

## 📝 Custom Domain Setup

Want to use `perkyloop.com` instead of GitHub Pages URL?

1. **Buy a domain** (from Namecheap, Google Domains, etc.)

2. **Add CNAME file** to your repository:
   ```
   perkyloop.com
   ```

3. **Configure DNS** with your domain registrar:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

4. **Enable HTTPS** in GitHub Pages settings (takes a few hours)

---

## 🤝 Contributing

This is a marketing website for PerkyLoop. If you're part of the team:

1. Create a new branch for changes
2. Make your edits
3. Test locally
4. Push and create a pull request

---

## 📄 License

MIT License - feel free to use this as a template for your own projects.

---

## 📞 Contact

**Website:** [https://perkyloop.com](https://perkyloop.com)  
**Email:** hello@perkyloop.com  
**Location:** Auckland, New Zealand 🇳🇿

---

## 🙏 Credits

- **Design:** PerkyLoop team
- **Icons:** SVG icons (included inline)
- **Fonts:** Inter (Google Fonts)
- **Emojis:** System emojis (can be replaced with images)

---

## 🚀 Next Steps

1. ✅ **Deploy to GitHub Pages** (follow instructions above)
2. 📸 **Add real images** - Replace emojis with actual app screenshots
3. 🔗 **Add app store links** - Update download button URLs
4. 📊 **Add analytics** - Track visitors with Google Analytics
5. 🎨 **Add logo** - Replace emoji with actual logo SVG/PNG
6. 📧 **Setup contact form** - Add form backend (Formspree, Netlify Forms, etc.)
7. 🔒 **Add HTTPS** - Enable in GitHub Pages settings
8. 🌐 **Custom domain** - Point perkyloop.com to GitHub Pages

---

## 💡 Tips

- **Keep it fast:** Avoid large images. Optimize everything.
- **Test on mobile:** Most visitors will be on phones.
- **Update content regularly:** Keep pricing and features current.
- **Monitor analytics:** See what pages are most popular.
- **A/B test CTAs:** Try different button text and colors.

---

**Built with ❤️ in Auckland, New Zealand 🇳🇿**

*For questions or support, contact the PerkyLoop team.*
