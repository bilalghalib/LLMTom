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

### Architecture (Planned)

```
llm_tom/
├── tests/              # ToM test scenarios and datasets
├── evaluators/         # Scoring and analysis modules
├── models/            # LLM interface adapters
├── benchmarks/        # Standardized benchmark suites
└── visualizations/    # Results visualization tools
```

## Current Status

**This is currently an empty repository.** The project is in the conceptual phase and awaiting implementation.

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

## 5 Pros (Once Implemented)

1. **Research Value**: Addresses fundamental questions about LLM cognitive capabilities
2. **Practical Applications**: ToM is crucial for AI assistants, chatbots, and collaborative AI
3. **Standardized Evaluation**: Provides objective metrics for an under-studied capability
4. **Comparative Analysis**: Enables fair comparison across different LLM architectures
5. **Interpretability**: Helps understand what LLMs "understand" about human cognition

## 5 Cons (Current Limitations)

1. **No Implementation**: Currently just an empty repository with a concept
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

## Getting Started (When Code Exists)

```bash
# Installation (future)
pip install llm-tom

# Run basic evaluation (future)
python -m llm_tom.evaluate --model gpt-4 --test-suite basic-tom

# Generate report (future)
python -m llm_tom.report --output results/
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

*Last Updated: 2025-11-16*
*Status: Conceptual Phase*
