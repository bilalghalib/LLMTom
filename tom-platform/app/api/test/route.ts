import { NextResponse } from "next/server";
import { TEST_SUITES } from "@/lib/tests";
import { runTest } from "@/lib/test-runner";
import { ModelConfig } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { provider, apiKey, model, suiteId } = body;

    // Validation
    if (!provider || !apiKey || !model || !suiteId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find test suite
    const suite = TEST_SUITES.find((s) => s.id === suiteId);
    if (!suite) {
      return NextResponse.json({ error: "Invalid test suite" }, { status: 400 });
    }

    // Configure model
    const config: ModelConfig = {
      provider,
      apiKey,
      model,
      temperature: 0.7,
    };

    // Run all tests in suite
    const results = [];
    for (const test of suite.tests) {
      try {
        const result = await runTest(test, config);
        results.push(result);
      } catch (error) {
        // If individual test fails, return error
        console.error(`Test ${test.id} failed:`, error);
        return NextResponse.json(
          {
            error: `Test execution failed: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          },
          { status: 500 }
        );
      }
    }

    // Calculate overall score
    const overallScore =
      results.reduce((sum, r) => sum + r.score, 0) / results.length;

    return NextResponse.json({
      results,
      overallScore,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        error: `Internal server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
