import { BENCHMARK_SCORES } from "@/lib/tests";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompetitiveBenchmarkProps {
  yourScore: number;
  yourModel: string;
}

export default function CompetitiveBenchmark({
  yourScore,
  yourModel,
}: CompetitiveBenchmarkProps) {
  const benchmarks = Object.entries(BENCHMARK_SCORES)
    .map(([model, score]) => ({
      model,
      score,
      isYours: model === yourModel,
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Competitive Benchmark
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        See how your model performs against industry leaders
      </p>

      <div className="space-y-3">
        {benchmarks.map((benchmark, index) => {
          const yourActualScore =
            benchmark.model === yourModel ? yourScore : benchmark.score;
          const percentWidth = (yourActualScore / 100) * 100;
          const isOutperforming =
            benchmark.model === yourModel && yourScore > benchmark.score;
          const isUnderperforming =
            benchmark.model === yourModel && yourScore < benchmark.score;

          return (
            <div key={benchmark.model}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    {benchmark.model}
                  </span>
                  {benchmark.isYours && (
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                      You
                    </span>
                  )}
                  {isOutperforming && (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  )}
                  {isUnderperforming && (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    benchmark.isYours
                      ? yourScore >= benchmark.score
                        ? "text-green-600"
                        : "text-red-600"
                      : "text-gray-900"
                  )}
                >
                  {Math.round(yourActualScore)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    benchmark.isYours
                      ? yourScore >= benchmark.score
                        ? "bg-green-600"
                        : "bg-red-600"
                      : "bg-gray-400"
                  )}
                  style={{ width: `${percentWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
        <p className="text-sm font-medium text-indigo-900">
          Your ranking: #{benchmarks.findIndex((b) => b.model === yourModel) + 1}{" "}
          of {benchmarks.length}
        </p>
        <p className="text-xs text-indigo-700 mt-1">
          {yourScore >= BENCHMARK_SCORES["gpt-4"]
            ? "Excellent! You're outperforming GPT-4"
            : yourScore >= BENCHMARK_SCORES["claude-3-sonnet-20240229"]
            ? "Good performance, competitive with leading models"
            : "Consider fine-tuning or prompt engineering to improve"}
        </p>
      </div>
    </div>
  );
}
