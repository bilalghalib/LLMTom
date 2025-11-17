/**
 * Type definitions for LLMTom platform
 */

export interface TestResult {
  id: string;
  testName: string;
  score: number;
  passed: boolean;
  response: string;
  expectedBehavior: string;
  timestamp: Date;
}

export interface TestSuite {
  id: string;
  name: string;
  description: string;
  tests: Test[];
}

export interface Test {
  id: string;
  name: string;
  category: TestCategory;
  scenario: string;
  question: string;
  correctAnswer: string;
  rationale: string;
}

export type TestCategory =
  | "false_belief"
  | "perspective_taking"
  | "intention_recognition"
  | "emotional_attribution"
  | "nested_beliefs";

export interface ModelConfig {
  provider: "openai" | "anthropic" | "custom";
  apiKey: string;
  model: string;
  temperature?: number;
}

export interface DashboardStats {
  totalTests: number;
  averageScore: number;
  passRate: number;
  comparisonScore: number; // vs GPT-4 baseline
}

export interface CompetitiveBenchmark {
  modelName: string;
  score: number;
  category: string;
}

export interface TestRun {
  id: string;
  modelConfig: ModelConfig;
  results: TestResult[];
  overallScore: number;
  createdAt: Date;
  completedAt?: Date;
  status: "pending" | "running" | "completed" | "failed";
}
