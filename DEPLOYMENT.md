# Deployment Guide

Complete guide for deploying Ace Vocational Academy website to production.

---

## 🚀 Quick Deployment to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ace Vocational Academy website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `acevocational.edu.ng`)
   - Update DNS records as instructed

4. **Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add production environment variables
   - Redeploy for changes to take effect

### Automatic Deployments
- Every push to `main` automatically deploys to production
- Pull requests create preview deployments
- Branch deployments for staging environments

---

## 🌐 Alternative Deployment Options

### Option 1: Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 2: DigitalOcean App Platform

1. **Connect GitHub repository**
2. **Configure build settings:**
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Environment: Node.js 18+

3. **Deploy automatically**

### Option 3: AWS Amplify

1. **Connect repository**
2. **Add build settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Option 4: Docker + Any Cloud Provider

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base

   # Dependencies
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   # Builder
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   # Runner
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs
   EXPOSE 3000
   ENV PORT 3000

   CMD ["node", "server.js"]
   ```

2. **Build and run**
   ```bash
   docker build -t ace-vocational .
   docker run -p 3000:3000 ace-vocational
   ```

---

## 🔧 Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passes without errors
- [ ] Build completes successfully (`npm run build`)
- [ ] All pages load without errors
- [ ] Forms submit correctly
- [ ] Navigation works on all routes

### Content
- [ ] Replace all placeholder images
- [ ] Review all copy for accuracy
- [ ] Update contact information
- [ ] Verify program details and pricing
- [ ] Check all external links

### Performance
- [ ] Images optimized (WebP/AVIF format)
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passing
- [ ] Mobile performance tested

### SEO
- [ ] Meta descriptions for all pages
- [ ] Open Graph images set
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Analytics tracking added

### Security
- [ ] Environment variables secured
- [ ] No sensitive data in code
- [ ] HTTPS enforced
- [ ] Security headers configured

---

## 📊 Post-Deployment Setup

### 1. Analytics Setup (Google Analytics)

Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

// Add inside <body> tag
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

### 2. Search Console Setup

1. Add site to [Google Search Console](https://search.google.com/search-console)
2. Verify ownership via DNS or HTML file
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 3. Performance Monitoring

**Option A: Vercel Analytics**
- Automatically available on Vercel
- Real user monitoring
- Core Web Vitals tracking

**Option B: Google PageSpeed Insights**
- Regular performance audits
- Mobile/Desktop analysis

### 4. Error Tracking (Optional)

**Sentry Integration:**
```bash
npm install @sentry/nextjs
```

Configure in `next.config.js`

---

## 🔄 Continuous Deployment Workflow

### Branch Strategy

```
main          → Production deployment
staging       → Staging deployment
feature/*     → Preview deployments
```

### Automated Pipeline

1. **On Pull Request:**
   - Run type checking
   - Run linting
   - Run build
   - Create preview deployment

2. **On Merge to Staging:**
   - Deploy to staging environment
   - Run smoke tests

3. **On Merge to Main:**
   - Deploy to production
   - Send deployment notification
   - Monitor for errors

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm run type-check
      - run: npm run lint
```

---

## 🌍 Domain Configuration

### DNS Records for Vercel

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### SSL Certificate
- Automatically provisioned by Vercel
- Free Let's Encrypt certificates
- Auto-renewal every 90 days

---

## 📈 Monitoring & Maintenance

### Weekly Tasks
- [ ] Check analytics for traffic patterns
- [ ] Review error logs
- [ ] Monitor performance metrics
- [ ] Check for security updates

### Monthly Tasks
- [ ] Update dependencies
- [ ] Review and optimize images
- [ ] Analyze user feedback
- [ ] Performance audit

### Quarterly Tasks
- [ ] Content audit and updates
- [ ] SEO analysis and improvements
- [ ] Accessibility review
- [ ] Security audit

---

## 🆘 Troubleshooting

### Build Fails

**Error: TypeScript errors**
```bash
npm run type-check
```
Fix all type errors before deploying.

**Error: Missing dependencies**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Error: Environment variables not found**
- Verify variables in deployment platform
- Check variable names match code
- Redeploy after adding variables

**Error: Pages not loading**
- Check build logs for errors
- Verify routing configuration
- Clear cache and redeploy

### Performance Issues

**Slow initial load:**
- Optimize images
- Enable compression
- Use CDN for static assets

**Poor Lighthouse scores:**
- Review bundle size
- Lazy load components
- Optimize fonts

---

## 🎯 Production Optimization

### Image Optimization

1. **Use Next.js Image component:**
   ```typescript
   import Image from 'next/image'
   
   <Image
     src="/hero.jpg"
     alt="Description"
     width={1200}
     height={800}
     priority
   />
   ```

2. **Convert images to WebP/AVIF:**
   ```bash
   npm install sharp
   ```

3. **Use appropriate sizes:**
   - Hero images: 1920x1080px
   - Gallery images: 800x600px
   - Thumbnails: 400x300px

### Code Splitting

Already implemented via Next.js App Router:
- Automatic route-based splitting
- Dynamic imports for heavy components
- Optimized bundle sizes

### Caching Strategy

**Vercel Edge Network:**
- Static pages cached at edge
- Revalidate on deployment
- Instant global distribution

---

## 📞 Support & Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Help**: Contact technical lead

---

**Last Updated**: October 2024  
**Website Version**: 1.0.0




