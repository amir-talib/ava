# Quick Start Guide

Get Ace Vocational Academy website running in 5 minutes.

---

## ⚡ Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Navigate to http://localhost:3000
```

That's it! The website is now running locally.

---

## 🗺️ Site Navigation

### Main Entry Point
- **/** - Landing page with Culinary/Fashion path selection

### Culinary School (`/culinary`)
- `/culinary` - Homepage
- `/culinary/about` - About the academy
- `/culinary/courses` - Program listings
- `/culinary/admissions` - Application & requirements
- `/culinary/success-stories` - Alumni testimonials
- `/culinary/gallery` - Photo gallery
- `/culinary/contact` - Contact form & information
- `/culinary/faq` - Frequently asked questions

### Fashion School (`/fashion`)
Same structure as Culinary, but with fashion-specific content.

---

## 🎨 Making Changes

### Update Colors

Edit `tailwind.config.ts`:
```typescript
culinary: {
  600: '#F97316', // Change this
}
```

### Update Content

Content is in each page file:
- `src/app/culinary/page.tsx` - Culinary homepage
- `src/app/fashion/page.tsx` - Fashion homepage
- etc.

### Add Images

1. Place images in `/public` folder
2. Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image src="/your-image.jpg" alt="Description" width={800} height={600} />
```

### Update Contact Info

Edit `src/components/shared/Footer.tsx`:
```typescript
// Update address, phone, email, social links
```

---

## 📱 Testing Responsive Design

### Browser DevTools
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes

### Common Breakpoints
- Mobile: 375px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

---

## 🚀 Building for Production

```bash
# Build the project
npm run build

# Test production build locally
npm start

# Check for errors
npm run type-check
npm run lint
```

---

## 🔧 Common Tasks

### Add a New Page

1. Create file: `src/app/culinary/new-page/page.tsx`
2. Add navigation link in `src/components/shared/Navigation.tsx`
3. Test the route

### Change Theme Colors

1. Update `tailwind.config.ts`
2. Update `src/lib/theme.ts`
3. Restart dev server

### Update Forms

Forms are in:
- `src/app/culinary/admissions/page.tsx`
- `src/app/culinary/contact/page.tsx`
- (Same for fashion)

---

## 📚 Key Files to Know

```
src/
├── app/
│   ├── page.tsx           # Landing page
│   ├── culinary/          # All culinary pages
│   └── fashion/           # All fashion pages
├── components/
│   ├── shared/
│   │   ├── Navigation.tsx # Main navigation
│   │   └── Footer.tsx     # Site footer
│   └── ui/
│       └── Button.tsx     # Reusable button
├── lib/
│   ├── theme.ts           # Theme configuration
│   └── utils.ts           # Utility functions
├── styles/
│   └── globals.css        # Global styles
└── types/
    └── index.ts           # TypeScript types
```

---

## 🎯 Next Steps

1. **Replace Placeholder Content**
   - Update all text with real academy information
   - Replace placeholder images with actual photos
   - Update contact details

2. **Customize Branding**
   - Adjust colors if needed
   - Add academy logo
   - Update meta tags for SEO

3. **Test Everything**
   - Test all forms
   - Check all links
   - Verify mobile responsiveness
   - Test on different browsers

4. **Deploy**
   - Follow DEPLOYMENT.md guide
   - Set up custom domain
   - Configure analytics

---

## ⚠️ Important Notes

- **Images**: Replace all image placeholders with actual photos
- **Content**: Review all copy for accuracy
- **Links**: Update social media links in Footer
- **Contact**: Update phone, email, address in Contact pages
- **Programs**: Verify course details and pricing

---

## 🆘 Need Help?

- Read full **README.md** for detailed documentation
- Check **DEPLOYMENT.md** for deployment guide
- Review Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Review Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

Happy building! 🎉




