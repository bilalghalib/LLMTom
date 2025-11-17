"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Play, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { TEST_SUITES, BENCHMARK_SCORES } from "@/lib/tests";
import { TestResult } from "@/types";
import { cn, getScoreColor } from "@/lib/utils";
import TestResultsView from "@/components/TestResultsView";
import CompetitiveBenchmark from "@/components/CompetitiveBenchmark";

export default function Dashboard() {
  const [apiKey, setApiKey] = useState("");
  const [provider, setProvider] = useState<"openai" | "anthropic" | "custom">(
    "openai"
  );
  const [model, setModel] = useState("gpt-4");
  const [selectedSuite, setSelectedSuite] = useState("quick_scan");
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [overallScore, setOverallScore] = useState<number | null>(null);

  const runTests = async () => {
    if (!apiKey) {
      alert("Please enter your API key");
      return;
    }

    setIsRunning(true);
    setResults(null);
    setOverallScore(null);

    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider,
          apiKey,
          model,
          suiteId: selectedSuite,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setResults(data.results);
      setOverallScore(data.overallScore);
    } catch (error) {
      console.error("Test execution failed:", error);
      alert(`Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const suite = TEST_SUITES.find((s) => s.id === selectedSuite);
  const benchmarkScore = model in BENCHMARK_SCORES ? BENCHMARK_SCORES[model] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">LLMTom</span>
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Test Your AI's Theory of Mind
            </h1>
            <p className="text-lg text-gray-600">
              Run comprehensive empathy and perspective-taking tests on your LLM
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Configuration Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Configuration
                </h2>

                {/* Provider Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Provider
                  </label>
                  <select
                    value={provider}
                    onChange={(e) =>
                      setProvider(e.target.value as typeof provider)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  >
                    <option value="openai">OpenAI</option>
                    <option value="anthropic">Anthropic</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                {/* Model Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model
                  </label>
                  {provider === "openai" ? (
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    </select>
                  ) : provider === "anthropic" ? (
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    >
                      <option value="claude-3-5-sonnet-20241022">Claude 3.5 Sonnet</option>
                      <option value="claude-3-opus-20240229">Claude 3 Opus</option>
                      <option value="claude-3-sonnet-20240229">Claude 3 Sonnet</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="Enter model name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  )}
                </div>

                {/* API Key */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Key
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent font-mono text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Your key is never stored
                  </p>
                </div>

                {/* Test Suite Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Test Suite
                  </label>
                  <select
                    value={selectedSuite}
                    onChange={(e) => setSelectedSuite(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  >
                    {TEST_SUITES.map((suite) => (
                      <option key={suite.id} value={suite.id}>
                        {suite.name}
                      </option>
                    ))}
                  </select>
                  {suite && (
                    <p className="text-xs text-gray-500 mt-1">
                      {suite.description}
                    </p>
                  )}
                </div>

                {/* Run Button */}
                <button
                  onClick={runTests}
                  disabled={isRunning || !apiKey}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors",
                    isRunning || !apiKey
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  )}
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Running Tests...
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      Run Tests
                    </>
                  )}
                </button>

                {benchmarkScore && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">
                      Expected Score for {model}
                    </p>
                    <p className="text-2xl font-bold text-blue-700 mt-1">
                      {benchmarkScore}/100
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {!results && !isRunning && (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ready to test
                  </h3>
                  <p className="text-gray-600">
                    Configure your model and API key, then click "Run Tests" to
                    begin
                  </p>
                </div>
              )}

              {isRunning && (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <Loader2 className="h-16 w-16 text-indigo-600 mx-auto mb-4 animate-spin" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Running Tests
                  </h3>
                  <p className="text-gray-600">
                    Evaluating your AI's Theory of Mind capabilities...
                  </p>
                </div>
              )}

              {results && overallScore !== null && (
                <div className="space-y-6">
                  {/* Overall Score */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Overall Score
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className={cn(
                            "text-5xl font-bold",
                            getScoreColor(overallScore)
                          )}
                        >
                          {Math.round(overallScore)}/100
                        </div>
                        <p className="text-gray-600 mt-2">
                          {results.filter((r) => r.passed).length} of{" "}
                          {results.length} tests passed
                        </p>
                      </div>
                      {benchmarkScore && (
                        <div className="text-right">
                          <p className="text-sm text-gray-600">
                            vs {model} benchmark
                          </p>
                          <p
                            className={cn(
                              "text-3xl font-bold",
                              overallScore >= benchmarkScore
                                ? "text-green-600"
                                : "text-red-600"
                            )}
                          >
                            {overallScore >= benchmarkScore ? "+" : ""}
                            {Math.round(overallScore - benchmarkScore)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Competitive Benchmark */}
                  <CompetitiveBenchmark
                    yourScore={overallScore}
                    yourModel={model}
                  />

                  {/* Detailed Results */}
                  <TestResultsView results={results} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
