# LLMTom Platform

> Know if your AI has empathy before your customers find out

A commercial SaaS platform for testing Large Language Models' Theory of Mind capabilities. Built with Next.js, TypeScript, and Tailwind CSS.

## What This Platform Does

LLMTom helps companies ensure their AI systems have empathy and perspective-taking abilities by running comprehensive Theory of Mind (ToM) evaluations. Test your LLMs against:

- **False Belief Tests**: Sally-Anne, Smarties, and more
- **Perspective-Taking Scenarios**: Understanding different viewpoints
- **Intention Recognition**: Inferring goals and motivations
- **Emotional Attribution**: Recognizing emotional states
- **Nested Beliefs**: Complex multi-agent reasoning

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Deployment**: Vercel-ready
- **Database**: Ready for Supabase integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- API keys for LLMs you want to test (OpenAI, Anthropic, etc.)

### Installation

```bash
# Navigate to platform directory
cd tom-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the platform.

## Project Structure

```
tom-platform/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/            # Dashboard interface
│   └── api/
│       └── test/             # Test execution API
├── components/
│   ├── TestResultsView.tsx   # Results display
│   └── CompetitiveBenchmark.tsx  # Benchmark comparison
├── lib/
│   ├── tests.ts              # ToM test definitions
│   ├── test-runner.ts        # Test execution engine
│   └── utils.ts              # Utility functions
└── types/
    └── index.ts              # TypeScript definitions
```

## Features

### Landing Page (`/`)

- Compelling value proposition focused on buyer pain points
- Social proof and trust indicators
- Feature highlights with benefits
- Clear CTAs to dashboard
- Competitive differentiation messaging

### Dashboard (`/dashboard`)

- Model configuration (OpenAI, Anthropic, Custom)
- Test suite selection (Quick Scan, Comprehensive, Category-focused)
- Real-time test execution
- Instant results with pass/fail indicators
- Competitive benchmarking against GPT-4, Claude, etc.
- Overall scoring and individual test breakdowns

### API (`/api/test`)

- Executes ToM tests against configured LLM
- Supports OpenAI and Anthropic providers
- Evaluates responses using NLP heuristics
- Returns structured results with scores

## Clean Code Practices

This codebase follows professional standards:

- **TypeScript**: Full type safety across the application
- **Component Separation**: Pure presentational components
- **API Abstraction**: Clean separation of business logic
- **Error Handling**: Comprehensive try/catch and validation
- **Code Organization**: Logical folder structure
- **Reusable Utilities**: DRY principles applied
- **Type Definitions**: Centralized in `types/`
- **Consistent Naming**: Clear, descriptive names throughout

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (from tom-platform directory)
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables

For production, set these environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## Roadmap

### MVP (Current)
- ✅ Landing page with value prop
- ✅ Dashboard interface
- ✅ Test execution engine
- ✅ Competitive benchmarking
- ✅ Results visualization

### Phase 2
- [ ] Supabase integration for test history
- [ ] User authentication and accounts
- [ ] PDF report generation
- [ ] Email alerts for score drops
- [ ] Pricing tiers and payment

### Phase 3
- [ ] Team collaboration features
- [ ] API access for CI/CD integration
- [ ] Custom test creation
- [ ] Advanced analytics dashboard
- [ ] Slack/Discord notifications

## Commercial Value Proposition

**For AI Product Teams:**
- A/B test prompts and models for empathy
- Pre-deployment validation
- Continuous monitoring for drift

**For Enterprise Leaders:**
- Board-ready compliance reports
- Competitive intelligence
- Regulatory documentation

**For Startups:**
- Prove differentiation to investors
- Customer RFP responses
- Marketing differentiation

## License

TBD - Commercial licensing model

---

Built with curiosity about machine cognition 🧠
