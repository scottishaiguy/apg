# Ainslie Park Garage (APG) Website

A modern, professional automotive website built with Next.js 15.5.4, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Tech Stack

- **Next.js 15.5.4** (App Router)
- **TypeScript**
- **Tailwind CSS** (v4)
- **shadcn/ui** components
- **Lucide React** icons
- **Inter** font family

## 🎨 Design System

### Brand Colors
- **APG Red:** `#E53935`
- **APG Dark:** `#0D0D0D`
- **APG Slate:** `#1A1A1A`
- **APG Light Grey:** `#E5E7EB`
- **White:** `#FFFFFF`

### Typography
- Font Family: Inter
- Weights: 400, 500, 600, 700, 800

## 📁 Project Structure

```
apg-website/
├── app/
│   ├── page.tsx              # Home page
│   ├── services/page.tsx     # Services page
│   ├── about/page.tsx        # About page
│   ├── reviews/page.tsx      # Reviews page
│   ├── contact/page.tsx      # Contact page
│   ├── book/page.tsx         # Booking page
│   ├── layout.tsx            # Root layout with header/footer
│   └── globals.css           # Global styles & design tokens
├── components/
│   ├── header.tsx            # Navigation header
│   ├── footer.tsx            # Footer with contact info
│   ├── container.tsx         # Reusable container
│   ├── hero.tsx              # Hero section component
│   ├── service-card.tsx      # Service card component
│   ├── review-card.tsx       # Review card component
│   ├── section-header.tsx    # Section title component
│   ├── mobile-nav.tsx        # Mobile navigation
│   └── ui/                   # shadcn/ui components
└── public/                   # Static assets
```

## 🖼️ Required Images

Add these images to the `/public` folder:

1. **`hero-workshop.jpg`** - Dark workshop background for hero section (recommended: 1920x1080px)
2. **`about-workshop.jpg`** - Workshop/garage image for home about section
3. **`about-hero.jpg`** - Team or facility image for about page

**Image Tips:**
- Use dark, moody workshop photos for the hero
- Ensure good contrast for text overlay
- Compress images for web performance

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Home (`/`)
- Hero section with dark overlay and CTA buttons
- Services preview grid (6 services)
- About section with company history
- Customer reviews section
- Call-to-action section

### Services (`/services`)
- Complete service listing (12 services)
- Service cards with icons and descriptions

### About (`/about`)
- Company history since 1975
- Feature highlights (4 key points)
- Why choose us section

### Reviews (`/reviews`)
- Customer testimonials grid
- Rating statistics
- 12 customer reviews

### Contact (`/contact`)
- Contact form with validation
- Business contact information
- Map placeholder (ready for integration)
- Opening hours

### Book (`/book`)
- Comprehensive booking form
- Vehicle details section
- Service type selection
- Date and time preferences

## 🔧 Customization

### Update Business Details

Edit in:
- `components/footer.tsx`
- `components/header.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx`

### Update Colors

Edit `app/globals.css`:
```css
--color-apg-red: #E53935;
--color-apg-dark: #0D0D0D;
```

## 📱 Features

✅ Fully responsive design  
✅ Accessible navigation  
✅ SEO-friendly  
✅ Form validation  
✅ Professional color scheme  
✅ Type-safe with TypeScript  

## 🔮 Future Enhancements

- [ ] Add real image assets
- [ ] Integrate Google Maps
- [ ] Connect forms to backend
- [ ] Add online payment
- [ ] SEO optimization
- [ ] Analytics integration
