import { TestResult } from "@/types";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestResultsViewProps {
  results: TestResult[];
}

export default function TestResultsView({ results }: TestResultsViewProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Detailed Results
        </h3>
      </div>

      <div className="divide-y divide-gray-200">
        {results.map((result, index) => (
          <div key={result.id} className="p-6">
            <div className="flex items-start gap-4">
              {/* Pass/Fail Icon */}
              <div className="flex-shrink-0 mt-1">
                {result.passed ? (
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {result.testName}
                  </h4>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      result.passed
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    )}
                  >
                    {result.passed ? "Passed" : "Failed"}
                  </span>
                </div>

                {/* AI Response */}
                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    AI Response:
                  </p>
                  <p className="text-gray-800 bg-gray-50 p-3 rounded border border-gray-200">
                    {result.response}
                  </p>
                </div>

                {/* Expected Behavior */}
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-gray-700">
                      Expected behavior:
                    </span>{" "}
                    <span className="text-gray-600">
                      {result.expectedBehavior}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
