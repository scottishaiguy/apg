# 🚀 Quick Start Guide

## Get Your Site Running in 3 Steps

### 1. Start the Development Server

```bash
cd apg-website
npm run dev
```

Open http://localhost:3000 to view your site!

### 2. Add Your Images

Place these images in the `public` folder to complete the design:

- **`hero-workshop.jpg`** - Dark workshop/garage background (1920x1080px recommended)
- **`about-workshop.jpg`** - Workshop image for home about section  
- **`about-hero.jpg`** - Team or facility photo for about page

**Where to find images:**
- Unsplash: https://unsplash.com/s/photos/auto-garage
- Pexels: https://www.pexels.com/search/auto%20repair/
- Use your own garage photos!

### 3. Update Business Information

**Phone Number** - Search & replace `0131 123 4567` with your actual number in:
- `components/header.tsx`
- `components/footer.tsx`
- `app/contact/page.tsx`

**Email** - Replace `info@ainsleyparkgarage.com` in:
- `components/footer.tsx`
- `app/contact/page.tsx`

**Address** - Update `Edinburgh, EH5 2HF` in:
- `components/footer.tsx`
- `app/contact/page.tsx`

## 📝 Customization Tips

### Change the APG Red Color

Edit `app/globals.css` and find:
```css
--color-apg-red: #E53935;
```
Replace `#E53935` with your preferred color.

### Update Services

Edit the services array in:
- `app/page.tsx` (home page - shows 6 services)
- `app/services/page.tsx` (services page - shows 12 services)

### Modify Reviews

Edit the reviews array in:
- `app/page.tsx` (home page - shows 3 reviews)
- `app/reviews/page.tsx` (reviews page - shows 12 reviews)

## 🔧 Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Vercel will automatically deploy your site!

## 🆘 Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **shadcn/ui Docs:** https://ui.shadcn.com

## 📋 What's Included

✅ 6 fully responsive pages  
✅ Mobile navigation menu  
✅ Contact form  
✅ Booking form  
✅ Service cards with icons  
✅ Customer reviews  
✅ Professional header & footer  
✅ APG brand styling  
✅ SEO-friendly structure  
✅ Fast performance with Next.js 15  

Your Ainslie Park Garage website is ready to go! 🎉
