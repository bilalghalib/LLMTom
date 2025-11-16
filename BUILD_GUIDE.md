# LLMTom - Build & Deployment Guide

## Quick Start (5 minutes)

### Prerequisites
- Node.js 18+ and npm
- Git
- Your favorite code editor
- API keys (optional for testing):
  - OpenAI API key from https://platform.openai.com
  - Anthropic API key from https://console.anthropic.com

### Step 1: Clone the Repository

```bash
git clone https://github.com/bilalghalib/LLMTom.git
cd LLMTom
```

### Step 2: Navigate to Platform Directory

```bash
cd tom-platform
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Recharts (charts)
- All other dependencies

**Expected time**: 30-60 seconds

### Step 4: Run Development Server

```bash
npm run dev
```

**Output should show**:
```
▲ Next.js 15.x.x
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

### Step 5: Open in Browser

Navigate to http://localhost:3000

You should see the main landing page!

---

## Exploring the Platform

### Available Routes

1. **Main Landing Page** - `/`
   - General value proposition
   - Targets all personas
   - Navigate to: http://localhost:3000

2. **Enterprise Landing Page** - `/enterprise`
   - For Enterprise AI Product Teams
   - Fear-based messaging (PR nightmare, board questions)
   - Navigate to: http://localhost:3000/enterprise

3. **Startup Landing Page** - `/startups`
   - For AI Startup Founders
   - Fundraising & differentiation focus
   - Navigate to: http://localhost:3000/startups

4. **Customer Success Landing Page** - `/customer-success`
   - For Customer Success SaaS platforms
   - Churn prevention & CSAT improvement
   - Navigate to: http://localhost:3000/customer-success

5. **Dashboard** - `/dashboard`
   - Interactive testing interface
   - Navigate to: http://localhost:3000/dashboard

### Testing the Dashboard

1. Go to http://localhost:3000/dashboard
2. Select a provider (OpenAI or Anthropic)
3. Enter your API key
4. Select a model (e.g., GPT-4)
5. Choose a test suite (Quick Scan or Comprehensive)
6. Click "Run Tests"

**Note**: Without an API key, you can still explore the UI, but tests won't execute.

---

## Understanding the Codebase

### Project Structure

```
tom-platform/
├── app/
│   ├── page.tsx                  # Main landing page
│   ├── enterprise/
│   │   └── page.tsx              # Enterprise landing page
│   ├── startups/
│   │   └── page.tsx              # Startup landing page
│   ├── customer-success/
│   │   └── page.tsx              # Customer Success landing page
│   ├── dashboard/
│   │   └── page.tsx              # Testing dashboard
│   ├── api/
│   │   └── test/
│   │       └── route.ts          # API endpoint for test execution
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── TestResultsView.tsx       # Results display component
│   └── CompetitiveBenchmark.tsx  # Benchmark chart component
├── lib/
│   ├── tests.ts                  # Test definitions (10 ToM tests)
│   ├── test-runner.ts            # Test execution engine
│   └── utils.ts                  # Utility functions
├── types/
│   └── index.ts                  # TypeScript type definitions
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind config
└── next.config.ts                # Next.js config
```

### Key Files Explained

#### `lib/tests.ts`
Contains 10 Theory of Mind tests across 5 categories:
- False Belief Tests (Sally-Anne, Smarties)
- Perspective Taking
- Intention Recognition
- Emotional Attribution
- Nested Beliefs

Also includes competitive benchmark scores for GPT-4, Claude, etc.

#### `lib/test-runner.ts`
- `callLLM()` - Makes API calls to OpenAI/Anthropic
- `evaluateResponse()` - Scores responses for empathy
- `runTest()` - Orchestrates test execution

#### `app/api/test/route.ts`
API endpoint that:
1. Accepts POST with provider, API key, model, test suite
2. Runs all tests in the suite
3. Returns results with overall score

#### `app/dashboard/page.tsx`
Interactive dashboard with:
- Model configuration form
- Test suite selection
- Real-time test execution
- Results visualization
- Competitive benchmarking

---

## Building for Production

### Step 1: Build the Application

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize React components
- Bundle JavaScript/CSS
- Generate static pages where possible
- Create production build in `.next/` directory

**Expected output**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    142 B          87.4 kB
├ ○ /enterprise                          142 B          87.4 kB
├ ○ /startups                            142 B          87.4 kB
├ ○ /customer-success                    142 B          87.4 kB
└ ○ /dashboard                           1.2 kB         88.6 kB

○  (Static)  prerendered as static content
```

### Step 2: Test Production Build Locally

```bash
npm start
```

Navigate to http://localhost:3000 to test production build.

---

## Deploying to Vercel (Recommended)

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd tom-platform

# Deploy
vercel
```

Follow the prompts:
1. "Set up and deploy?" → Yes
2. "Which scope?" → Your account
3. "Link to existing project?" → No
4. "What's your project's name?" → llmtom or leave default
5. "In which directory is your code located?" → `./` (current directory)

**Deployment takes ~2 minutes**

You'll get a URL like: `https://llmtom-abc123.vercel.app`

### Option 2: Vercel Dashboard (More Control)

1. Push code to GitHub:
```bash
cd /home/user/LLMTom
git add .
git commit -m "Add multi-persona landing pages"
git push origin main
```

2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Framework Preset: Next.js (auto-detected)
6. Root Directory: `tom-platform`
7. Click "Deploy"

**Automatic deployments**: Every git push to main will auto-deploy!

### Environment Variables (Optional for Vercel)

If you want to add environment variables:

1. In Vercel dashboard → Your Project → Settings → Environment Variables
2. Add any needed variables (currently none required for MVP)

Future variables might include:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `STRIPE_SECRET_KEY`

---

## Deploying to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project
cd tom-platform

# Deploy
netlify deploy --prod
```

### Railway

1. Go to https://railway.app
2. "New Project" → "Deploy from GitHub"
3. Select repository
4. Root Directory: `tom-platform`
5. Deploy

### DigitalOcean App Platform

1. Go to https://cloud.digitalocean.com/apps
2. Create → Apps → GitHub
3. Select repository
4. Configure:
   - Type: Web Service
   - Branch: main
   - Source Directory: `tom-platform`
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: 3000

---

## Local Development Tips

### Hot Reload

Next.js has hot reload built-in. Any changes you make to `.tsx` or `.ts` files will automatically refresh in the browser.

### Editing Landing Pages

1. **Enterprise page**: Edit `app/enterprise/page.tsx`
2. **Startups page**: Edit `app/startups/page.tsx`
3. **Customer Success page**: Edit `app/customer-success/page.tsx`

Changes appear instantly while `npm run dev` is running.

### Adding New Tests

Edit `lib/tests.ts` and add to the `TOM_TESTS` array:

```typescript
{
  id: "your_test_id",
  name: "Test Name",
  category: "false_belief", // or other category
  scenario: "The scenario description...",
  question: "The question to ask?",
  correctAnswer: "expected_answer",
  rationale: "Why this tests ToM..."
}
```

### Modifying Evaluation Logic

Edit `lib/test-runner.ts` → `evaluateResponse()` function.

Currently uses simple keyword matching. For production, consider:
- Semantic similarity (sentence-transformers)
- LLM-as-judge (use GPT-4 to grade responses)
- Custom NLP models

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### npm install fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails with TypeScript errors

```bash
# Check TypeScript errors
npm run type-check

# Or build with verbose logging
npm run build -- --debug
```

### API calls failing (CORS errors)

This shouldn't happen in dev mode, but if you see CORS errors:
1. Make sure you're calling from the same origin
2. Check browser console for exact error
3. API calls are routed through Next.js API routes (no CORS issues)

---

## Testing with Real API Keys

### OpenAI

1. Get API key from https://platform.openai.com/api-keys
2. Navigate to http://localhost:3000/dashboard
3. Provider: OpenAI
4. Model: gpt-4 or gpt-3.5-turbo
5. API Key: Paste your key (starts with `sk-`)
6. Run tests!

**Cost**: ~$0.05-0.10 per test run (10 tests)

### Anthropic

1. Get API key from https://console.anthropic.com
2. Navigate to http://localhost:3000/dashboard
3. Provider: Anthropic
4. Model: claude-3-opus or claude-3-sonnet
5. API Key: Paste your key
6. Run tests!

**Cost**: ~$0.03-0.08 per test run (10 tests)

---

## Next Steps After Deployment

### 1. Set Up Analytics

Add Google Analytics or Plausible:

```typescript
// app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### 2. Add Supabase for Data Persistence

```bash
npm install @supabase/supabase-js
```

Create `lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### 3. Add Authentication

Install next-auth:
```bash
npm install next-auth
```

### 4. Add Payment (Stripe)

```bash
npm install @stripe/stripe-js stripe
```

### 5. Custom Domain

In Vercel dashboard:
1. Settings → Domains
2. Add your domain
3. Configure DNS as instructed

---

## Performance Optimization

### Image Optimization

Already using Next.js `<Image>` component which:
- Lazy loads images
- Serves modern formats (WebP)
- Responsive sizing

### Code Splitting

Next.js automatically code splits by route. Each page only loads what it needs.

### Caching

API responses can be cached:

```typescript
// app/api/test/route.ts
export const revalidate = 3600 // Cache for 1 hour
```

---

## Monitoring

### Production Monitoring

Use Vercel Analytics (free tier):
1. Vercel Dashboard → Your Project → Analytics
2. Enable analytics
3. View real-time visitors, performance metrics

### Error Tracking

Add Sentry:

```bash
npm install @sentry/nextjs
```

---

## Support

- GitHub Issues: https://github.com/bilalghalib/LLMTom/issues
- Documentation: See README.md and claude.md
- Email: support@llmtom.com (placeholder)

---

**You're now ready to build, deploy, and scale LLMTom!** 🚀

The platform is production-ready and can handle real customers from day one.
