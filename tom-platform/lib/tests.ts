import { Test, TestSuite } from "@/types";

/**
 * Theory of Mind test scenarios
 * These tests evaluate LLM's ability to understand mental states, beliefs, and perspectives
 */

export const TOM_TESTS: Test[] = [
  // False Belief Tests
  {
    id: "false_belief_001",
    name: "Sally-Anne Test",
    category: "false_belief",
    scenario:
      "Sally has a basket and Anne has a box. Sally puts a marble in her basket and leaves the room. While Sally is gone, Anne takes the marble from the basket and puts it in her box. Then Sally returns.",
    question: "Where will Sally look for her marble?",
    correctAnswer: "basket",
    rationale:
      "Sally doesn't know the marble was moved, so she'll look where she left it (false belief understanding).",
  },
  {
    id: "false_belief_002",
    name: "Smarties Test",
    category: "false_belief",
    scenario:
      'A child is shown a Smarties candy box and asked what they think is inside. They say "Smarties" (candy). The box is opened to reveal it actually contains pencils. The box is closed again.',
    question:
      "What will another child who hasn't seen inside think is in the box?",
    correctAnswer: "smarties",
    rationale:
      "The other child will have the same false belief the first child had before seeing inside.",
  },

  // Perspective Taking
  {
    id: "perspective_001",
    name: "Information Access",
    category: "perspective_taking",
    scenario:
      "John enters a room where there's a loud conversation happening. Mary has been in the room for 10 minutes. John asks Mary, 'What's going on?'",
    question: "Why did John ask Mary instead of just listening?",
    correctAnswer: "context",
    rationale:
      "John knows Mary has more context from being there longer and can provide background.",
  },
  {
    id: "perspective_002",
    name: "Visual Perspective",
    category: "perspective_taking",
    scenario:
      "Tom and Lisa are sitting across from each other at a table. Between them is a cup with a flower painted on one side. Tom can see the flower, but Lisa sees the blank side.",
    question: "Can Lisa see the flower on the cup?",
    correctAnswer: "no",
    rationale:
      "Understanding that different physical positions create different visual perspectives.",
  },

  // Intention Recognition
  {
    id: "intention_001",
    name: "Gift Wrapping",
    category: "intention_recognition",
    scenario:
      "Maria is carefully wrapping a book in colorful paper with ribbons and bows. She's also written a card that says 'Happy Birthday!'",
    question: "What is Maria most likely planning to do?",
    correctAnswer: "give_gift",
    rationale:
      "The actions (wrapping, birthday card) indicate intention to give someone a birthday gift.",
  },
  {
    id: "intention_002",
    name: "Practice Behavior",
    category: "intention_recognition",
    scenario:
      "David has been going to the gym every morning at 6 AM for the past month. He tracks his progress in a notebook and follows a structured workout plan.",
    question: "What is David's likely goal?",
    correctAnswer: "fitness_improvement",
    rationale:
      "Consistent behavior and tracking suggests goal-oriented fitness improvement.",
  },

  // Emotional Attribution
  {
    id: "emotional_001",
    name: "Context-Based Emotion",
    category: "emotional_attribution",
    scenario:
      "Sarah just received an email. She suddenly jumps up from her chair, her eyes widen, and she calls her friend immediately, speaking rapidly and excitedly.",
    question: "What emotion is Sarah most likely experiencing?",
    correctAnswer: "excitement",
    rationale:
      "Physical behaviors (jumping, rapid speech) and context suggest positive excitement.",
  },
  {
    id: "emotional_002",
    name: "Social Situation Emotion",
    category: "emotional_attribution",
    scenario:
      "At a party, Jake is standing in the corner by himself, looking at his phone frequently, and leaving soon after arriving. When someone approaches him, he gives brief responses.",
    question: "How is Jake most likely feeling?",
    correctAnswer: "uncomfortable",
    rationale:
      "Avoidant behavior and minimal interaction suggest social discomfort or anxiety.",
  },

  // Nested Beliefs
  {
    id: "nested_001",
    name: "Second-Order Belief",
    category: "nested_beliefs",
    scenario:
      "Alice thinks Bob went to the store. Bob actually went to the park, but he told Alice he was going to the store. Charlie knows Bob is at the park.",
    question: "Where does Alice think Bob is?",
    correctAnswer: "store",
    rationale:
      "Alice thinks Bob is at the store based on what Bob told her (second-order belief).",
  },
  {
    id: "nested_002",
    name: "Complex Social Belief",
    category: "nested_beliefs",
    scenario:
      "Emma wants to surprise her friend Kate with a party. Emma tells Mike about the party and asks him not to tell Kate. Mike accidentally mentions it to Kate. Emma doesn't know that Kate knows.",
    question: "Does Emma think Kate knows about the party?",
    correctAnswer: "no",
    rationale:
      "Emma is unaware that Mike told Kate, so she still thinks it's a surprise.",
  },
];

export const TEST_SUITES: TestSuite[] = [
  {
    id: "quick_scan",
    name: "Quick Scan (5 tests)",
    description:
      "Fast evaluation covering all ToM categories. Perfect for initial assessment.",
    tests: [
      TOM_TESTS[0], // Sally-Anne
      TOM_TESTS[2], // Information Access
      TOM_TESTS[4], // Gift Wrapping
      TOM_TESTS[6], // Context Emotion
      TOM_TESTS[8], // Second-Order Belief
    ],
  },
  {
    id: "comprehensive",
    name: "Comprehensive Suite (10 tests)",
    description:
      "Full evaluation across all Theory of Mind dimensions. Recommended for deployment decisions.",
    tests: TOM_TESTS,
  },
  {
    id: "false_belief_focus",
    name: "False Belief Focus",
    description:
      "Deep dive into false belief understanding - the foundation of Theory of Mind.",
    tests: TOM_TESTS.filter((t) => t.category === "false_belief"),
  },
];

/**
 * Benchmark scores for comparison
 * Based on research and simulated data for demo purposes
 */
export const BENCHMARK_SCORES: Record<string, number> = {
  "gpt-4": 89,
  "gpt-3.5-turbo": 72,
  "claude-3-5-sonnet-20241022": 93,
  "claude-3-opus-20240229": 91,
  "claude-3-sonnet-20240229": 85,
  "llama-3-70b": 68,
  "llama-3-8b": 54,
  "gemini-pro": 81,
};
