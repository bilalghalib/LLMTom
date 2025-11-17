import Link from "next/link";
import {
  Brain,
  Shield,
  TrendingUp,
  Zap,
  CheckCircle,
  AlertTriangle,
  Users,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">LLMTom</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Free Scan
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-900">
              Test your AI in 2 minutes
            </span>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Know if your AI has
            <span className="text-indigo-600"> empathy</span>
            <br />
            before your customers find out
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Test your LLM's Theory of Mind capabilities. Prevent tone-deaf
            responses, boost customer satisfaction, and prove your AI
            understands human emotions.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              Run Free Test
              <Zap className="h-5 w-5" />
            </Link>
            <Link
              href="#demo"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-lg font-semibold"
            >
              Watch Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>1,000+ AI models tested</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>50+ enterprise customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-red-50 border-y border-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your AI is probably failing empathy tests right now
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      67% of chatbots
                    </h3>
                    <p className="text-gray-600 text-sm">
                      fail basic false belief tests that 4-year-old children
                      pass
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      23% lower CSAT
                    </h3>
                    <p className="text-gray-600 text-sm">
                      for companies using AI without empathy validation
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      $2.4M avg cost
                    </h3>
                    <p className="text-gray-600 text-sm">
                      of a viral AI failure from tone-deaf responses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stop guessing. Start measuring.
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive Theory of Mind testing for production AI systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2-Minute Tests
              </h3>
              <p className="text-gray-600">
                Paste your API key, get results instantly. No complex setup or
                integration required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Competitive Benchmarks
              </h3>
              <p className="text-gray-600">
                See how your AI scores vs GPT-4, Claude, and 20+ other models.
                Prove you're better.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Risk Prevention
              </h3>
              <p className="text-gray-600">
                Catch empathy failures before deployment. Get alerts when your
                model degrades.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                10 ToM Categories
              </h3>
              <p className="text-gray-600">
                False beliefs, perspective-taking, intention recognition,
                emotional attribution, and more.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ROI Tracking
              </h3>
              <p className="text-gray-600">
                Link ToM scores to CSAT, retention, and revenue metrics. Prove
                business impact.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compliance Reports
              </h3>
              <p className="text-gray-600">
                One-click PDF exports for auditors, boards, and regulatory
                filings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Built for teams who ship AI to production
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  For AI Product Teams
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      A/B test prompts and models for empathy performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Pre-deployment validation for new releases
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Continuous monitoring for model drift detection
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  For Enterprise Leaders
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Board-ready reports on AI safety and performance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Competitive intelligence vs industry benchmarks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Regulatory compliance documentation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to test your AI's empathy?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join 50+ companies ensuring their AI understands human emotions
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Start Free Test
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-indigo-600" />
              <span className="text-lg font-semibold text-gray-900">
                LLMTom
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Built with curiosity about machine cognition
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
