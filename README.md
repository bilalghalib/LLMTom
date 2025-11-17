# LLMTom 🧠

> A Theory of Mind (ToM) evaluation framework for Large Language Models

[![Status](https://img.shields.io/badge/status-conceptual-yellow)](https://github.com)
[![License](https://img.shields.io/badge/license-TBD-blue)](LICENSE)

## What is LLMTom?

**LLMTom** evaluates whether Large Language Models possess **Theory of Mind** - the ability to attribute mental states, beliefs, intentions, and knowledge to themselves and others. This capability is fundamental for:

- 🤝 Natural human-AI collaboration
- 💬 Contextually aware conversations
- 🎯 Understanding user intentions and needs
- 🧩 Solving social reasoning tasks
- 🎭 Creating believable AI characters

## Current Status

✅ **MVP Platform Implemented** - A fully functional SaaS platform with landing page, dashboard, and test execution engine.

**Try it now**: Navigate to `tom-platform/` and run `npm install && npm run dev`

## Quick Start

```bash
# Clone the repository
git clone https://github.com/bilalghalib/LLMTom.git
cd LLMTom

# Navigate to platform
cd tom-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Implemented Features

### 🧪 Test Suites

- **False Belief Tests**: Sally-Anne, Smarties task, unexpected transfer
- **Perspective Taking**: Visual perspective, knowledge attribution, informational access
- **Intention Recognition**: Goal inference, desire attribution, action prediction
- **Emotional Attribution**: Emotion recognition from context, empathy evaluation
- **Higher-Order ToM**: Nested beliefs (A thinks B believes C knows...)

### 📊 Evaluation Metrics

- Accuracy on standardized ToM tasks
- Response consistency across variations
- Comparison with human baselines
- Robustness to prompt variations
- Performance degradation on adversarial examples

### 🔌 Model Support (Planned)

- OpenAI (GPT-3.5, GPT-4, GPT-4-turbo)
- Anthropic (Claude 3 family)
- Google (Gemini, PaLM)
- Meta (Llama 2, Llama 3)
- Open source models via HuggingFace

## Project Structure

```
LLMTom/
├── tom-platform/           # Next.js SaaS platform
│   ├── app/
│   │   ├── page.tsx        # Landing page
│   │   ├── dashboard/      # Test dashboard
│   │   └── api/test/       # Test execution API
│   ├── components/         # React components
│   ├── lib/                # Business logic
│   │   ├── tests.ts        # ToM test definitions
│   │   ├── test-runner.ts  # Test execution
│   │   └── utils.ts        # Utilities
│   └── types/              # TypeScript types
├── claude.md               # Technical documentation
└── README.md               # This file
```

## Why Theory of Mind Matters

Theory of Mind is crucial for AI systems that:

1. **Collaborate with humans**: Understanding user knowledge gaps and mental models
2. **Provide assistance**: Anticipating needs based on inferred intentions
3. **Navigate social situations**: Recognizing appropriate behavior based on others' perspectives
4. **Build trust**: Demonstrating awareness of user concerns and emotions
5. **Avoid misunderstandings**: Recognizing ambiguity and seeking clarification

## Example Test Scenario

**Sally-Anne Test (Classic False Belief)**

```
Sally puts a marble in basket A and leaves the room.
Anne moves the marble from basket A to basket B.
Sally returns.

Question: Where will Sally look for her marble?

✅ ToM-capable: "Basket A" (understands Sally has false belief)
❌ ToM-deficient: "Basket B" (only tracks objective reality)
```

## Research Background

This project builds on decades of cognitive science research:

- **Premack & Woodruff (1978)**: First posed "Does the chimpanzee have a theory of mind?"
- **Baron-Cohen et al. (1985)**: Introduced Sally-Anne test for autism research
- **Recent LLM Studies**: Mixed results on whether modern LLMs exhibit genuine ToM

Key debate: Do LLMs demonstrate true Theory of Mind, or sophisticated pattern matching?

## Documentation

- 📘 [**Claude.md**](claude.md) - Comprehensive technical documentation
- 📝 [**Contributing Guide**](CONTRIBUTING.md) - How to contribute (coming soon)
- 🔬 [**Research Notes**](docs/research.md) - Background and methodology (coming soon)
- 📊 [**Benchmark Results**](docs/results.md) - Performance data (coming soon)

## Roadmap

### Phase 1: MVP (✅ Complete)
- [x] Implement core test scenarios
- [x] Build model adapter interfaces
- [x] Create evaluation pipeline
- [x] Support OpenAI and Anthropic
- [x] Landing page with value prop
- [x] Dashboard interface
- [x] Competitive benchmarking

### Phase 2: Scale (In Progress)
- [ ] Supabase integration for data persistence
- [ ] User authentication and accounts
- [ ] PDF report generation
- [ ] Email alerts for score drops
- [ ] Pricing tiers and Stripe payment

### Phase 3: Enterprise (Q2 2025)
- [ ] Team collaboration features
- [ ] API access for CI/CD integration
- [ ] Custom test creation
- [ ] Advanced analytics dashboard
- [ ] Slack/Discord notifications

## Contributing

This project is in conceptual phase. We welcome:

- 💡 Ideas for ToM test scenarios
- 🔬 Research insights and methodology suggestions
- 💻 Implementation contributions (once framework is defined)
- 📝 Documentation improvements
- 🐛 Issue reports and feature requests

## Citation (Future)

```bibtex
@software{llmtom2025,
  title={LLMTom: Theory of Mind Evaluation for Large Language Models},
  author={Your Name},
  year={2025},
  url={https://github.com/bilalghalib/LLMTom}
}
```

## License

TBD - To be determined once project development begins

## Contact

- **Issues**: [GitHub Issues](https://github.com/bilalghalib/LLMTom/issues)
- **Discussions**: [GitHub Discussions](https://github.com/bilalghalib/LLMTom/discussions)

---

**Note**: This project is currently in the conceptual/planning phase. The repository structure, code, and features described above represent the intended direction, not current implementation.

*Built with curiosity about machine cognition 🤖🧠*

