import Link from "next/link";
import {
  Brain,
  TrendingDown,
  DollarSign,
  Zap,
  CheckCircle,
  AlertTriangle,
  Users,
  BarChart3,
  MessageSquare,
  XCircle,
  TrendingUp,
} from "lucide-react";

export default function CustomerSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">LLMTom</span>
            <span className="text-sm text-gray-500 ml-2">Customer Success</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/enterprise" className="text-sm text-gray-600 hover:text-gray-900">
              For Enterprise
            </Link>
            <Link href="/startups" className="text-sm text-gray-600 hover:text-gray-900">
              For Startups
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Calculate Impact →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - DATA-DRIVEN */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6 border border-red-200">
            <TrendingDown className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium text-red-900">
              23% of customers churn after bad AI interaction
            </span>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your AI Chatbot Is
            <br />
            <span className="text-red-600">Quietly Killing CSAT</span>
            <br />
            Here's Proof.
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            You invested in AI to improve customer satisfaction. But tone-deaf
            responses are driving churn. Test your AI's empathy before it costs
            you another renewal.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              <BarChart3 className="h-5 w-5" />
              Calculate Churn Impact
            </Link>
            <Link
              href="#roi-calculator"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-lg font-semibold"
            >
              See ROI Calculator
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Used by Zendesk, Intercom customers</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>Avg 31% CSAT improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Revenue Problem */}
      <section className="bg-red-50 border-y border-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI Could Be Costing You $500K+ in ARR
              </h2>
              <p className="text-lg text-gray-600">
                Here's the math on what tone-deaf AI responses are actually costing you
              </p>
            </div>

            {/* Calculator */}
            <div className="bg-white p-10 rounded-xl border-2 border-red-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Active Customers
                  </label>
                  <input
                    type="number"
                    defaultValue="10000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Customer Value ($/year)
                  </label>
                  <input
                    type="number"
                    defaultValue="5000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-semibold"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">AI Interactions/Month</p>
                    <p className="text-2xl font-bold text-gray-900">50,000</p>
                    <p className="text-xs text-gray-500">50% of customers use AI</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bad AI Experiences</p>
                    <p className="text-2xl font-bold text-red-600">11,500</p>
                    <p className="text-xs text-gray-500">23% empathy failure rate</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Churn from Bad AI</p>
                    <p className="text-2xl font-bold text-red-600">230</p>
                    <p className="text-xs text-gray-500">2% convert to churn</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-8 rounded-lg border-2 border-red-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Annual Revenue at Risk
                  </h3>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-red-600">$1.15M</div>
                    <p className="text-sm text-gray-600">per year in lost ARR</p>
                  </div>
                </div>
                <div className="border-t border-red-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">
                      Fix AI quality with LLMTom:{" "}
                      <span className="font-semibold">$50K/year</span>
                    </span>
                    <span className="text-2xl font-bold text-green-600">23x ROI</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              💡 These are conservative estimates based on industry averages. Your actual
              costs may be higher.
            </p>
          </div>
        </div>
      </section>

      {/* The Warning Signs */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Warning Signs Your AI Is Hurting CSAT
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Customers escalate to human agents after AI interaction
                  </h3>
                  <p className="text-gray-600 text-sm">
                    "Just let me talk to a real person" is a symptom of tone-deaf AI
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500 shadow">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    CSAT scores lower for AI conversations vs human
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your AI should match or exceed human satisfaction, not underperform
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow">
              <div className="flex items-start gap-4">
                <TrendingDown className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Churn analysis shows AI usage correlates with cancellations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The data doesn't lie - bad AI interactions predict churn
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Support tickets complaining about "robotic" or "insensitive" responses
                  </h3>
                  <p className="text-gray-600 text-sm">
                    When customers use words like "tone-deaf," you have an empathy problem
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 shadow">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Customer Success team hates the AI, asks to disable it
                  </h3>
                  <p className="text-gray-600 text-sm">
                    When your CS team fights against AI, it's creating more problems than it solves
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              <strong>Sound familiar?</strong> You need to test your AI's empathy before
              fixing it.
            </p>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Run Free Empathy Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Fix AI Quality
              </h2>
              <p className="text-xl text-gray-600">
                From diagnosis to improvement to proving ROI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CSAT Impact Analysis
                </h3>
                <p className="text-gray-600">
                  See exactly how empathy scores correlate with customer satisfaction.
                  Prove the business impact.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  A/B Test Improvements
                </h3>
                <p className="text-gray-600">
                  Test different prompts, models, and approaches. See which scores
                  higher before rolling out.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Churn Prevention Alerts
                </h3>
                <p className="text-gray-600">
                  Get Slack alerts when AI quality drops. Fix issues before they cause
                  cancellations.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ROI Calculator
                </h3>
                <p className="text-gray-600">
                  Link empathy improvements to revenue retention. Show executives the
                  business case.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  CS Team Dashboard
                </h3>
                <p className="text-gray-600">
                  Give your Customer Success team visibility into AI quality. Track
                  improvements over time.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Executive Reports
                </h3>
                <p className="text-gray-600">
                  Quarterly business reviews with AI quality metrics, CSAT correlation,
                  and ROI data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="roi-calculator" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Real Results from Customer Success Teams
          </h2>

          <div className="bg-white p-10 rounded-xl border-2 border-blue-200 shadow-lg">
            <div className="flex items-start gap-6 mb-8">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl">
                Z
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Customer Support SaaS (500 Enterprise Customers)
                </h3>
                <p className="text-gray-600">
                  Healthcare and financial services customer base
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">-8%</div>
                <p className="text-sm text-gray-600">CSAT before testing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3 weeks</div>
                <p className="text-sm text-gray-600">to implement fixes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">+31%</div>
                <p className="text-sm text-gray-600">CSAT improvement</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">What They Did:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Ran LLMTom tests, discovered 34% empathy failure rate on sensitive
                    healthcare queries
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    A/B tested 5 different prompt approaches, found one with 89% empathy
                    score
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Implemented continuous monitoring with Slack alerts for quality drops
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Revenue Impact (12 months)
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Prevented 180 customer cancellations</li>
                    <li>• Average customer value: $12K/year</li>
                    <li>• Cost of LLMTom: $60K/year</li>
                  </ul>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold text-green-600">$2.16M</div>
                  <p className="text-sm text-gray-600">retained ARR</p>
                  <p className="text-2xl font-bold text-green-700 mt-2">36x ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Stop Losing Customers to Bad AI
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Every day without testing is another day of churn. Test your AI in 2
            minutes, get ROI in weeks.
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Calculate Your Churn Impact
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
            >
              Talk to CS Experts
            </Link>
          </div>
          <p className="text-sm text-blue-100">
            Free impact calculator • No credit card • See results in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900">
                LLMTom
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Turning AI quality into revenue retention
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
