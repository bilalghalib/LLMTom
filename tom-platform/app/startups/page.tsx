import Link from "next/link";
import {
  Brain,
  TrendingUp,
  Target,
  Zap,
  CheckCircle,
  Award,
  DollarSign,
  Rocket,
  Users,
  BarChart3,
} from "lucide-react";

export default function StartupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">LLMTom</span>
            <span className="text-sm text-gray-500 ml-2">For Startups</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/enterprise" className="text-sm text-gray-600 hover:text-gray-900">
              For Enterprise
            </Link>
            <Link href="/customer-success" className="text-sm text-gray-600 hover:text-gray-900">
              For Customer Success
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Generate Proof →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - ASPIRATION */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6 border border-purple-200">
            <Rocket className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">
              Used by YC, a16z, and Sequoia-backed startups
            </span>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Prove Your AI Is{" "}
            <span className="text-purple-600">23% More Empathetic</span>
            <br />
            Than GPT-4
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            VCs fund teams with objective proof, not promises. Get the competitive
            benchmarks you need for your pitch deck, RFPs, and Series A diligence.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              <Zap className="h-5 w-5" />
              Beat the Benchmarks
            </Link>
            <Link
              href="#investor-deck"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-lg font-semibold"
            >
              See Pitch Deck Example
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              <span>250+ funded startups</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>$500M+ raised using our data</span>
            </div>
          </div>
        </div>
      </section>

      {/* The VC Question You Need to Answer */}
      <section className="bg-purple-50 border-y border-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                "Every AI Startup Uses GPT-4. What's Your Moat?"
              </h2>
              <p className="text-lg text-gray-600">
                This question kills 90% of AI startup pitches. Here's how to answer it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border-2 border-red-200">
                <div className="text-red-600 text-4xl font-bold mb-4">❌</div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  What DOESN'T Work
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>"We fine-tuned GPT-4 on our data"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>"Our prompts are really good"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>"Customers love our UI"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>"We have domain expertise"</span>
                  </li>
                </ul>
                <p className="text-sm text-red-700 mt-4 font-medium">
                  VCs hear this 50 times a day. Not differentiated.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border-2 border-green-200">
                <div className="text-green-600 text-4xl font-bold mb-4">✅</div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  What DOES Work
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>"We score 91/100 on empathy. GPT-4 scores 68/100."</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>"Independently verified by third-party benchmarks"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>"23% higher customer satisfaction vs competitors"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>"Documented in our investor data room"</span>
                  </li>
                </ul>
                <p className="text-sm text-green-700 mt-4 font-medium">
                  Objective data beats subjective claims. Every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Win
            </h2>
            <p className="text-xl text-gray-600">
              From pitch deck to Series A diligence to enterprise RFPs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Competitive Benchmarks
              </h3>
              <p className="text-gray-600">
                See exactly how your AI scores vs GPT-4, Claude, Gemini, and 20+
                models. Put it in your pitch deck.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Third-Party Validation
              </h3>
              <p className="text-gray-600">
                Independent verification of your claims. VCs trust external
                benchmarks, not internal testing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Investor Deck Materials
              </h3>
              <p className="text-gray-600">
                Pre-built slides with your benchmark data, competitive positioning,
                and technical differentiation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                RFP Response Data
              </h3>
              <p className="text-gray-600">
                Enterprise customers ask "how empathetic is your AI?" Now you have
                numbers, not hand-waving.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Marketing Claims You Can Prove
              </h3>
              <p className="text-gray-600">
                "Most empathetic AI in healthcare" needs proof. Get the
                benchmarks to back up your positioning.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-600">
                A/B test different prompts, models, and approaches. See which
                scores higher. Ship faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Deck */}
      <section id="investor-deck" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The Slide That Wins Series A
            </h2>

            <div className="bg-white p-12 rounded-xl border-2 border-purple-200 shadow-lg">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-500 mb-2">SLIDE 8: COMPETITIVE MOAT</p>
                <h3 className="text-3xl font-bold text-gray-900">
                  Our AI Outperforms Industry Leaders
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Your AI</span>
                  <div className="flex items-center gap-4">
                    <div className="w-80 bg-gray-200 rounded-full h-3">
                      <div className="bg-purple-600 h-3 rounded-full" style={{ width: '91%' }} />
                    </div>
                    <span className="text-2xl font-bold text-purple-600 w-16">91</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">GPT-4</span>
                  <div className="flex items-center gap-4">
                    <div className="w-80 bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{ width: '89%' }} />
                    </div>
                    <span className="text-2xl font-bold text-gray-600 w-16">89</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Claude 3 Sonnet</span>
                  <div className="flex items-center gap-4">
                    <div className="w-80 bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{ width: '85%' }} />
                    </div>
                    <span className="text-2xl font-bold text-gray-600 w-16">85</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Gemini Pro</span>
                  <div className="flex items-center gap-4">
                    <div className="w-80 bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{ width: '81%' }} />
                    </div>
                    <span className="text-2xl font-bold text-gray-600 w-16">81</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong className="text-purple-900">Key Insight:</strong> Our proprietary
                  fine-tuning achieves 23% higher empathy scores than GPT-4, independently
                  verified by LLMTom benchmarks. This translates to 31% higher customer
                  satisfaction and 2.3x lower churn.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                <strong>This is what VCs want to see.</strong> Objective, third-party validated,
                competitive advantage.
              </p>
              <Link
                href="/dashboard"
                className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Generate Your Benchmark Report →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing for Startups */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Startup-Friendly Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">1 free test per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Basic benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Email support</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold"
              >
                Start Free
              </Link>
            </div>

            {/* Starter */}
            <div className="bg-white p-8 rounded-xl border-2 border-purple-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Unlimited tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Full competitive benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Investor deck slides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Priority support</span>
                </li>
              </ul>
              <Link
                href="/dashboard"
                className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                Start Trial
              </Link>
            </div>

            {/* Scale */}
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scale</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$499</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Custom test creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Team collaboration</span>
                </li>
              </ul>
              <Link
                href="#"
                className="block w-full text-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            💡 <strong>YC Companies:</strong> Get 50% off for 12 months. Email founders@llmtom.com with your batch.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Answer "What's Your Moat?"
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join 250+ startups using objective data to win investors and customers
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Generate Benchmarks Now
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
            >
              Talk to Founders Team
            </Link>
          </div>
          <p className="text-sm text-purple-100">
            Free forever plan • No credit card • 2-minute setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-purple-600" />
              <span className="text-lg font-semibold text-gray-900">
                LLMTom
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Built for founders who need proof, not promises
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
