# Deploy LLMTom to GitHub Pages (FREE!)

GitHub Pages is a **free static site hosting** service built into every GitHub repository. Perfect for landing pages!

## 🚀 What You Get (For Free)

- ✅ Free hosting forever
- ✅ Custom domain support (llmtom.com)
- ✅ Automatic HTTPS/SSL certificate
- ✅ Auto-deploy on every git push
- ✅ No credit card required
- ✅ Unlimited bandwidth*
- ✅ Fast CDN (Content Delivery Network)

*Fair use policy applies

## 📦 What's Included

Your **3 landing pages** will be hosted for free:
- Main landing page: `https://yourusername.github.io/LLMTom/`
- Enterprise: `https://yourusername.github.io/LLMTom/enterprise`
- Startups: `https://yourusername.github.io/LLMTom/startups`
- Customer Success: `https://yourusername.github.io/LLMTom/customer-success`

## ⚠️ Important Limitation

**The dashboard (`/dashboard`) won't work on GitHub Pages** because:
- GitHub Pages only hosts static files (HTML, CSS, JS)
- The test execution API requires a Node.js server
- API routes (`/api/test`) need serverless functions

### Solution:
**Use a hybrid approach**:
1. **Landing pages** → GitHub Pages (free)
2. **Dashboard** → Vercel/Netlify (free tier)

Or just use Vercel for everything (also free, more features).

## 🎯 Quick Setup (3 Steps)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/bilalghalib/LLMTom`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: GitHub Actions
   - (Don't select "Deploy from branch" - we're using Actions)
5. Click **Save**

**Done!** GitHub Pages is now enabled.

### Step 2: Push Your Code

The GitHub Actions workflow is already set up! Just push to main:

```bash
# Make sure you're on main branch
git checkout main

# Merge your changes (if on a different branch)
git merge claude/review-and-update-docs-016wFGLJWCLFPuMU6dcywtCv

# Push to GitHub
git push origin main
```

### Step 3: Wait for Deployment

1. Go to **Actions** tab in your GitHub repo
2. You'll see "Deploy to GitHub Pages" workflow running
3. Takes ~2-3 minutes to build and deploy
4. When complete, you'll see a green checkmark ✅

**Your site is live!**

Visit: `https://bilalghalib.github.io/LLMTom/`

## 🌐 Custom Domain Setup (Optional)

Want to use `llmtom.com` instead of `bilalghalib.github.io/LLMTom`?

### Step 1: Buy Domain

Register your domain at:
- Namecheap ($8-12/year)
- Google Domains ($12/year)
- Cloudflare ($8-10/year)

### Step 2: Configure DNS

Add these DNS records at your domain registrar:

**For apex domain (llmtom.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain (www.llmtom.com):**
```
Type: CNAME
Name: www
Value: bilalghalib.github.io
```

### Step 3: Configure in GitHub

1. Go to repo **Settings** → **Pages**
2. Under "Custom domain", enter: `llmtom.com`
3. Click **Save**
4. Wait 5-10 minutes for DNS propagation
5. Check "Enforce HTTPS" when available

**Done!** Your site is now at `https://llmtom.com`

## 🔧 How It Works

### The GitHub Actions Workflow

Located at: `.github/workflows/deploy-github-pages.yml`

**What it does**:
1. **Triggers** on every push to `main` branch
2. **Checks out** your code
3. **Installs** Node.js and dependencies
4. **Builds** Next.js app (`npm run build`)
5. **Exports** static HTML to `out/` directory
6. **Deploys** to GitHub Pages

### Next.js Static Export

Your `next.config.ts` is configured for static export:

```typescript
output: "export"  // Creates static HTML files
images: { unoptimized: true }  // No server-side image optimization
```

When you run `npm run build`, Next.js creates:
```
out/
├── index.html               # Main landing page
├── enterprise.html          # Enterprise page
├── startups.html            # Startups page
├── customer-success.html    # Customer Success page
├── dashboard.html           # Dashboard (UI only, no API)
└── _next/                   # CSS, JS assets
```

## 📂 Alternative: Deploy with `gh-pages` Branch (Manual)

If you prefer manual control:

### Install gh-pages package

```bash
cd tom-platform
npm install --save-dev gh-pages
```

### Add deploy script to package.json

```json
{
  "scripts": {
    "deploy": "next build && npx gh-pages -d out"
  }
}
```

### Deploy manually

```bash
npm run deploy
```

This pushes the `out/` directory to a `gh-pages` branch, which GitHub Pages serves.

## 🎨 Alternative: Use Jekyll (Pure Static)

If you want a simpler approach without Node.js:

### Why Jekyll?
- Built into GitHub Pages (no Actions needed)
- Pure markdown and HTML
- Great for blogs and documentation
- No build step on your machine

### Quick Jekyll Setup

```bash
# Create new Jekyll site
cd /home/user/LLMTom
mkdir jekyll-site
cd jekyll-site
jekyll new .

# Edit _config.yml
nano _config.yml
# Change title, description, etc.

# Create landing pages as markdown
nano index.md
nano enterprise.md
nano startups.md
nano customer-success.md

# Push to GitHub
git add .
git commit -m "Jekyll site"
git push origin main
```

In GitHub Settings → Pages:
- Source: **Deploy from a branch**
- Branch: **main** / (root)

**Pros**: Simpler, no build process
**Cons**: Less interactive, no React components

## 🌟 Recommended Hybrid Approach

For the **best of both worlds**:

### Landing Pages → GitHub Pages (Free)
- All 3 persona landing pages
- Static, fast, free hosting
- Custom domain

### Dashboard → Vercel (Free)
- Full Next.js with API routes
- Test execution works
- Serverless functions
- Also has free tier

### How to Set This Up

1. **Main site** (GitHub Pages):
   ```
   https://llmtom.com
   https://llmtom.com/enterprise
   https://llmtom.com/startups
   https://llmtom.com/customer-success
   ```

2. **Dashboard** (Vercel):
   ```
   https://dashboard.llmtom.com
   or
   https://app.llmtom.com
   ```

3. **Update navigation links** to point dashboard to Vercel:
   ```typescript
   // Change from:
   href="/dashboard"

   // To:
   href="https://dashboard.llmtom.com"
   ```

This way:
- Marketing site is free on GitHub Pages
- Product works on Vercel's free tier
- Best performance and cost

## 🛠️ Local Testing

### Test the static build locally:

```bash
cd tom-platform

# Build static site
npm run build

# Serve it locally
npm run serve:static

# Open http://localhost:3000
```

This is **exactly** what GitHub Pages will serve!

## 🐛 Troubleshooting

### Deployment failed in Actions

1. Check the Actions tab for error logs
2. Common issues:
   - `npm ci` fails → Delete `package-lock.json`, commit, push
   - Build fails → Check Next.js config
   - Missing files → Check `.gitignore`

### Site shows 404

1. Wait 5 minutes (DNS propagation)
2. Check Settings → Pages shows the URL
3. Verify workflow completed successfully
4. Try hard refresh (Ctrl+Shift+R)

### Custom domain not working

1. Wait 10-15 minutes for DNS propagation
2. Use `dig llmtom.com` to verify DNS records
3. Ensure HTTPS is enabled in Settings → Pages

### Images not loading

Static export disables Next.js Image Optimization:
- Use regular `<img>` tags
- Or `<Image>` with `unoptimized: true` (already configured)

### API routes returning 404

This is expected! GitHub Pages can't run server code:
- Use Vercel/Netlify for dashboard
- Or call LLM APIs directly from client (less secure)

## 📊 Monitoring

### GitHub Actions

Every deployment creates a log:
1. Go to **Actions** tab
2. Click latest "Deploy to GitHub Pages" workflow
3. See build logs, deploy logs, errors

### GitHub Pages Analytics

GitHub doesn't provide analytics, but you can add:

**Google Analytics**:
```typescript
// app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

**Plausible Analytics** (privacy-friendly):
```typescript
<Script defer data-domain="llmtom.com" src="https://plausible.io/js/script.js" />
```

## 💰 Cost Comparison

| Hosting | Landing Pages | Dashboard | Cost | Deploy Time |
|---------|--------------|-----------|------|-------------|
| **GitHub Pages** | ✅ | ❌ | $0/mo | 2 min |
| **Vercel** | ✅ | ✅ | $0/mo | 2 min |
| **Netlify** | ✅ | ✅ | $0/mo | 3 min |
| **Hybrid (GH + Vercel)** | ✅ | ✅ | $0/mo | 4 min |
| **DigitalOcean** | ✅ | ✅ | $5/mo | 10 min |

**Recommendation**: Start with **Vercel** (everything works, still free) OR **GitHub Pages for marketing + Vercel for app**.

## 🚀 Next Steps After Deployment

### 1. Set Up Analytics
```bash
# Add to app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### 2. Test All Pages
- Main: https://yourusername.github.io/LLMTom
- Enterprise: /enterprise
- Startups: /startups
- Customer Success: /customer-success

### 3. Share on Social Media
"Just launched LLMTom - test your AI's empathy in 2 minutes! 🧠"

### 4. Set Up SEO
- Add meta tags
- Create sitemap.xml
- Submit to Google Search Console

### 5. Monitor Performance
- Google PageSpeed Insights
- Lighthouse scores
- Core Web Vitals

## 📚 Additional Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Jekyll Docs](https://jekyllrb.com/docs/) (if you want to try Jekyll)

## 🎉 You're Done!

Your 3 landing pages are now live on GitHub Pages for **free**, deploying automatically on every push!

**Your live URLs**:
- `https://bilalghalib.github.io/LLMTom/`
- `https://bilalghalib.github.io/LLMTom/enterprise`
- `https://bilalghalib.github.io/LLMTom/startups`
- `https://bilalghalib.github.io/LLMTom/customer-success`

Start getting customers! 🚀
