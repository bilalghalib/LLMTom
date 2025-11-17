# LLMTom - Claude Code Documentation

## Project Overview

LLMTom is a **Theory of Mind (ToM) evaluation framework** for Large Language Models. This project aims to systematically test and measure LLMs' ability to understand mental states, beliefs, intentions, and perspectives - capabilities collectively known as "Theory of Mind" in cognitive science.

## What This Project Does

### Core Functionality (Proposed)

1. **False Belief Tests**: Implements classic ToM tests (Sally-Anne test, Smarties test) adapted for LLM evaluation
2. **Perspective-Taking Scenarios**: Tests LLMs' ability to reason about what different agents know or believe
3. **Intention Recognition**: Evaluates understanding of goals, desires, and motivations
4. **Emotional State Attribution**: Measures ability to infer emotional states from context
5. **Nested Belief Reasoning**: Tests higher-order ToM ("A thinks that B believes that C knows...")

### Architecture (Implemented)

```
tom-platform/
├── app/
│   ├── page.tsx           # Landing page (conversion-optimized)
│   ├── dashboard/         # Test execution interface
│   │   └── page.tsx       # Main dashboard
│   └── api/
│       └── test/          # Test execution API endpoint
│           └── route.ts   # POST handler for test runs
├── components/
│   ├── TestResultsView.tsx       # Detailed results display
│   └── CompetitiveBenchmark.tsx  # Benchmark comparison chart
├── lib/
│   ├── tests.ts           # ToM test definitions (10 tests)
│   ├── test-runner.ts     # Test execution & evaluation engine
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── config/                # Configuration (future Supabase)
```

## Current Status

**✅ MVP Platform Implemented!** The project has evolved from concept to a fully functional commercial SaaS platform.

**Stack**: Next.js 15, TypeScript, Tailwind CSS, Vercel-ready
**Location**: `tom-platform/` directory

## Development with Claude Code

### Recommended Workflow

1. **Start with Test Design**: Create a comprehensive suite of ToM tests
2. **Build Model Adapters**: Implement interfaces for different LLM providers (OpenAI, Anthropic, etc.)
3. **Implement Evaluators**: Create automated scoring mechanisms
4. **Add Benchmarks**: Establish baseline metrics
5. **Visualization**: Build dashboards for results analysis

### Key Implementation Considerations

- **Standardization**: Ensure tests are consistent and reproducible
- **Bias Mitigation**: Account for training data contamination
- **Difficulty Calibration**: Range from simple to complex ToM reasoning
- **Multi-modal Support**: Consider vision-language models for richer scenarios
- **Human Baseline**: Include human performance data for comparison

## 5 Pros (Implemented Platform)

1. **Research Value**: Addresses fundamental questions about LLM cognitive capabilities
2. **Practical Applications**: ToM is crucial for AI assistants, chatbots, and collaborative AI
3. **Standardized Evaluation**: Provides objective metrics for an under-studied capability
4. **Comparative Analysis**: Enables fair comparison across different LLM architectures
5. **Interpretability**: Helps understand what LLMs "understand" about human cognition

## 5 Cons (Current MVP Limitations)

1. **No Persistence**: Tests aren't saved to database yet (Supabase integration pending)
2. **Complexity**: ToM is notoriously difficult to evaluate even in humans
3. **Anthropomorphization Risk**: May incorrectly attribute human-like understanding to statistical patterns
4. **Benchmark Contamination**: Popular ToM tests may already be in training data
5. **Validity Questions**: Unclear if text-only tests capture genuine ToM vs. pattern matching

## 5 Future Evolution Paths

### 1. **Multi-Agent Simulation Framework**
Transform into a full simulation environment where multiple LLM agents interact, requiring genuine ToM for coordination and competition. Think "LLM social dynamics lab."

### 2. **Real-time ToM Training**
Develop reinforcement learning environments where models learn ToM through interaction, not just pre-training. Could advance AI alignment research.

### 3. **Cross-Cultural ToM Benchmarks**
Expand beyond Western psychological tests to include diverse cultural perspectives on mental state attribution and social cognition.

### 4. **ToM-Enhanced Applications**
Build practical tools: therapy chatbots with empathy, negotiation AI, educational tutors that adapt to student understanding, or game NPCs with believable psychology.

### 5. **Neurosymbolic Integration**
Combine neural LLMs with symbolic reasoning systems to model beliefs explicitly (using belief logic, epistemic reasoning), creating hybrid systems with provable ToM capabilities.

## Getting Started

```bash
# Navigate to platform
cd tom-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000

# Build for production
npm run build

# Deploy to Vercel
vercel
```

## Contributing

This project is in its infancy. Contributions are welcome in:
- Test scenario design
- Evaluation methodology
- LLM adapter implementations
- Documentation and research insights

## Resources & References

- Premack & Woodruff (1978): Original "Does the chimpanzee have a theory of mind?"
- Baron-Cohen et al. (1985): Sally-Anne test
- Kosinski (2023): "Theory of Mind May Have Spontaneously Emerged in Large Language Models"
- Ullman (2023): "Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks"

## License

TBD

---

## Commercial Implementation Summary

**What We Built:**
- Landing page with pain-point-driven value proposition
- Dashboard for running ToM tests on any LLM
- 10 Theory of Mind tests across 5 categories
- Real-time competitive benchmarking
- Beautiful results visualization
- Clean, production-ready TypeScript codebase

**Target Buyers:**
1. Enterprise AI teams ($50K-200K/year)
2. LLM API providers ($100K+/year)
3. AI startups ($10K-50K/year)
4. Customer success platforms ($50K-150K/year)

**Buyer Intent Triggers:**
- Instant value: 2-minute test with immediate results
- Competitive comparison: "You score 67, GPT-4 scores 89"
- Risk prevention: Catch failures before customers do
- ROI proof: Link to CSAT metrics
- Compliance: One-click reports

**Next Steps for Scale:**
1. Supabase integration for test history
2. Stripe payment integration
3. User authentication
4. PDF report generation
5. Team collaboration features

---

*Last Updated: 2025-11-16*
*Status: MVP Implemented - Ready for Demo*
