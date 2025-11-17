import { Test, TestResult, ModelConfig } from "@/types";

/**
 * Evaluates an LLM response against expected ToM understanding
 */
export function evaluateResponse(
  test: Test,
  response: string
): { passed: boolean; score: number } {
  const normalizedResponse = response.toLowerCase().trim();
  const correctAnswer = test.correctAnswer.toLowerCase();

  // Simple keyword matching for demo
  // In production, this would use more sophisticated NLP/semantic matching
  const keywords = correctAnswer.split("_");
  const matchesKeyword = keywords.some((keyword) =>
    normalizedResponse.includes(keyword)
  );

  // Additional heuristics based on test category
  let passed = false;
  let score = 0;

  if (test.category === "false_belief") {
    // For Sally-Anne type tests, check if it mentions the original location
    if (test.id === "false_belief_001") {
      passed = normalizedResponse.includes("basket");
      score = passed ? 100 : 0;
    } else if (test.id === "false_belief_002") {
      passed =
        normalizedResponse.includes("smarties") ||
        normalizedResponse.includes("candy");
      score = passed ? 100 : 0;
    }
  } else if (test.category === "perspective_taking") {
    // Check for understanding of different perspectives
    passed = matchesKeyword;
    score = passed ? 100 : 0;
  } else if (test.category === "intention_recognition") {
    // Check for correct intention identification
    passed = matchesKeyword;
    score = passed ? 100 : 0;
  } else if (test.category === "emotional_attribution") {
    // Check for correct emotion identification
    passed = matchesKeyword;
    score = passed ? 100 : 0;
  } else if (test.category === "nested_beliefs") {
    // Check for correct nested belief understanding
    passed = matchesKeyword;
    score = passed ? 100 : 0;
  }

  // Fallback to keyword matching
  if (!passed && test.category !== "false_belief") {
    passed = matchesKeyword;
    score = passed ? 100 : 0;
  }

  return { passed, score };
}

/**
 * Calls an LLM API with a test scenario
 */
export async function callLLM(
  test: Test,
  config: ModelConfig
): Promise<string> {
  const prompt = `${test.scenario}

${test.question}

Please provide a brief, direct answer.`;

  if (config.provider === "openai") {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: config.temperature || 0.7,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error: ${error}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } else if (config.provider === "anthropic") {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": config.apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: config.model,
        max_tokens: 150,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Anthropic API error: ${error}`);
    }

    const data = await response.json();
    return data.content[0].text.trim();
  } else {
    // Simulated response for demo/custom providers
    // In production, this would call the actual custom API
    return simulateResponse(test);
  }
}

/**
 * Simulates an LLM response for testing purposes
 */
function simulateResponse(test: Test): string {
  const random = Math.random();

  // Simulate varying quality responses
  if (test.category === "false_belief") {
    if (test.id === "false_belief_001") {
      return random > 0.3
        ? "Sally will look for her marble in the basket, where she left it."
        : "Sally will look in the box because that's where the marble is now.";
    } else if (test.id === "false_belief_002") {
      return random > 0.3
        ? "The other child will think there are Smarties in the box."
        : "The other child will think there are pencils in the box.";
    }
  }

  // Fallback responses for other categories
  const responses = [
    `Based on the scenario, the answer is ${test.correctAnswer}.`,
    "Let me think about this...",
    "The most likely answer is " + test.correctAnswer,
  ];

  return responses[Math.floor(random * responses.length)];
}

/**
 * Runs a test against an LLM and returns the result
 */
export async function runTest(
  test: Test,
  config: ModelConfig
): Promise<TestResult> {
  try {
    const response = await callLLM(test, config);
    const evaluation = evaluateResponse(test, response);

    return {
      id: test.id,
      testName: test.name,
      score: evaluation.score,
      passed: evaluation.passed,
      response,
      expectedBehavior: test.rationale,
      timestamp: new Date(),
    };
  } catch (error) {
    console.error(`Test ${test.id} failed:`, error);
    throw error;
  }
}
