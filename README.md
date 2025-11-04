# Ace Vocational Academy

A professional, modern, and minimal multipage website for Ace Vocational Academy, featuring two distinct schools under one unified brand:

- **School of Culinary Arts**
- **School of Fashion Design**

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for a premium, industry-leading experience.

---

## 🎨 Design Philosophy

- **Modern Swiss Design**: Minimal, breathable spacing, quiet confidence
- **Premium Brand Identity**: Elegant, authoritative, sophisticated
- **Unified Yet Distinct**: Same academy, subtle discipline-specific theming
- **Mobile-First**: Responsive design that looks exceptional on all devices
- **Performance-Focused**: Optimized for speed and scalability

---

## 🏗️ Architecture

### Multi-Path Structure
```
/                          → Landing page with path selection
/culinary/*                → Culinary school pages
/fashion/*                 → Fashion school pages
```

### Shared Components
- Global layout system with discipline-aware theming
- Reusable UI components (`Button`, `PageHeader`, etc.)
- Navigation with active route detection
- Footer with contextual information

### Discipline Theming
- **Culinary**: Warm orange/amber accent colors
- **Fashion**: Elegant purple/violet accent colors
- Unified neutral palette for consistency

---

## 📄 Pages

### Landing Page
- Elegant path selection (Culinary vs Fashion)
- Animated hero with Framer Motion
- Premium card interactions

### Culinary School
1. **Homepage** - Hero, stats, featured programs, CTA
2. **About** - Academy story, values, milestones
3. **Courses** - Detailed program listings with curriculum
4. **Admissions** - Application process, requirements, form
5. **Success Stories** - Alumni testimonials and achievements
6. **Gallery** - Visual showcase of facilities and student work
7. **Contact** - Contact form, location, social media
8. **FAQ** - Comprehensive Q&A by category

### Fashion School
Same structure as Culinary, with fashion-specific content and theming.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations & interactions |
| **Lucide React** | Beautiful icon system |
| **React Hook Form** | Form state management |
| **Zod** | Schema validation |

---

## 📁 Project Structure

```
AVA/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── culinary/          # Culinary school routes
│   │   │   ├── page.tsx       # Culinary homepage
│   │   │   ├── layout.tsx     # Culinary layout
│   │   │   ├── about/
│   │   │   ├── courses/
│   │   │   ├── admissions/
│   │   │   ├── success-stories/
│   │   │   ├── gallery/
│   │   │   ├── contact/
│   │   │   └── faq/
│   │   └── fashion/           # Fashion school routes
│   │       └── (same structure as culinary)
│   ├── components/
│   │   ├── shared/            # Shared components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageHeader.tsx
│   │   ├── layouts/
│   │   │   └── DisciplineLayout.tsx
│   │   └── ui/                # UI primitives
│   │       └── Button.tsx
│   ├── lib/                   # Utilities & helpers
│   │   ├── theme.ts
│   │   └── utils.ts
│   ├── types/                 # TypeScript definitions
│   │   └── index.ts
│   └── styles/
│       └── globals.css        # Global styles & Tailwind
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies & scripts
```

---

## 🎨 Design System

### Colors

#### Neutral Palette (Unified Brand)
- Base: `neutral-50` to `neutral-950`
- Used for: Text, backgrounds, borders

#### Culinary Accent
- Range: `culinary-50` to `culinary-900`
- Primary: `culinary-600` (warm orange)
- Used for: CTAs, links, highlights

#### Fashion Accent
- Range: `fashion-50` to `fashion-900`
- Primary: `fashion-600` (elegant purple)
- Used for: CTAs, links, highlights

### Typography

- **Sans-serif**: Inter (body text, UI)
- **Serif**: Crimson Pro (optional display use)
- **Display sizes**: `display-xl`, `display-lg`, `display-md`, `display-sm`

### Spacing

- **Section spacing**: `section-spacing` (py-16 to py-32)
- **Breathable margins**: Generous white space
- **Grid gaps**: Consistent 6-12px increments

---

## 🎭 Key Features

### Animations (Framer Motion)
- Smooth page transitions
- Scroll-triggered reveals
- Hover interactions on cards
- Mobile-friendly animations

### Mobile Responsiveness
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly interactions
- Optimized typography scales

### Performance
- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Next.js font loading
- **SEO Ready**: Meta tags, semantic HTML, proper structure

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states for interactive elements
- Color contrast compliance

---

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] CMS integration (e.g., Sanity, Contentful)
- [ ] Multi-language support (i18n)
- [ ] Student portal/LMS integration
- [ ] Online payment gateway (Paystack/Flutterwave)
- [ ] Real-time chat support
- [ ] Blog/Insights section
- [ ] Video testimonials
- [ ] Interactive campus tour
- [ ] Alumni directory
- [ ] Event calendar

### Technical Improvements
- [ ] E2E testing (Playwright/Cypress)
- [ ] Unit testing (Jest/Vitest)
- [ ] Analytics integration (Google Analytics/Plausible)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] A/B testing capabilities
- [ ] Advanced form validation with backend
- [ ] Newsletter integration
- [ ] Social media feed integration

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository to Vercel
3. Vercel auto-detects Next.js and deploys
4. Custom domain setup in Vercel dashboard

### Other Platforms

- **Netlify**: Compatible with Next.js
- **Railway**: Node.js deployments
- **AWS Amplify**: Enterprise hosting
- **DigitalOcean**: Docker containerization

---

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
# Future integrations
NEXT_PUBLIC_SITE_URL=https://acevocational.edu.ng
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact form (when backend is added)
NEXT_PUBLIC_API_URL=https://api.acevocational.edu.ng

# Payment gateway (future)
NEXT_PUBLIC_PAYSTACK_KEY=your-paystack-public-key
```

---

## 🤝 Contributing

This is a private project for Ace Vocational Academy. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Submit a pull request with clear description
4. Ensure all tests pass
5. Maintain code quality standards

---

## 📄 License

Copyright © 2024 Ace Vocational Academy. All rights reserved.

---

## 💡 Development Notes

### Code Quality Standards
- **TypeScript strict mode**: No `any` types
- **ESLint**: Enforced code style
- **Component composition**: Reusable, single-responsibility
- **Semantic HTML**: Accessibility-first markup
- **Mobile-first CSS**: Tailwind responsive utilities

### Best Practices
- Use TypeScript interfaces for all data structures
- Extract reusable logic into custom hooks
- Keep components small and focused
- Use proper semantic HTML elements
- Optimize images before adding to public folder
- Write meaningful commit messages
- Document complex logic with comments

---

## 📞 Support

For technical support or questions:

- **Technical Lead**: [Your contact info]
- **Design Team**: [Design contact]
- **Content Team**: [Content contact]

---

Built with ❤️ for Ace Vocational Academy




