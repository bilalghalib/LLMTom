import Link from "next/link";
import {
  Brain,
  Shield,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  FileText,
  Bell,
  Users,
  XCircle,
  Clock,
} from "lucide-react";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">LLMTom</span>
            <span className="text-sm text-gray-500 ml-2">Enterprise</span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/startups" className="text-sm text-gray-600 hover:text-gray-900">
              For Startups
            </Link>
            <Link href="/customer-success" className="text-sm text-gray-600 hover:text-gray-900">
              For Customer Success
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Run Emergency Audit
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - FEAR-BASED */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-6 border border-red-200">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium text-red-900">
              Most AI incidents happen within 90 days of deployment
            </span>
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Your AI From Becoming
            <br />
            Tomorrow's{" "}
            <span className="text-red-600">PR Nightmare</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your chatbot could fail a basic empathy test that 4-year-olds pass.
            Find out before your customers do, before the board asks questions,
            and before it's on Twitter.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold flex items-center gap-2"
            >
              <Shield className="h-5 w-5" />
              Run Emergency Audit (2 min)
            </Link>
            <Link
              href="#proof"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors text-lg font-semibold"
            >
              See Risk Analysis
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Trusted by Fortune 500 AI teams</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>SOC 2 compliant reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Risks You're Taking */}
      <section className="bg-red-50 border-y border-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Every Day Without Testing, You're Betting Your Reputation
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <XCircle className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  $2.4M Average Cost
                </h3>
                <p className="text-gray-600 text-sm">
                  Of a viral "insensitive AI" incident. Lost revenue, brand
                  damage, executive time, legal fees.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <Clock className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  72 Hours to Crisis
                </h3>
                <p className="text-gray-600 text-sm">
                  From first bad interaction to full PR crisis. Your CEO will ask
                  "why didn't we catch this?"
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-red-200">
                <Users className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  Board-Level Questions
                </h3>
                <p className="text-gray-600 text-sm">
                  "Do we have AI safety protocols?" "How do we prevent this?"
                  "Who's accountable?"
                </p>
              </div>
            </div>

            {/* Real Example */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Real Scenario: Healthcare AI Tells Patient to "Stop
                    Complaining"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    A major hospital's AI chatbot told a cancer patient to "stop
                    complaining" about pain. Twitter thread went viral. CEO had to
                    issue public apology. AI program shut down pending review.
                  </p>
                  <p className="text-sm font-medium text-red-600">
                    This could have been caught with a 2-minute empathy test.
                  </p>
                </div>
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
              The AI Safety System Your Board Expects
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to prevent, detect, and respond to AI empathy
              failures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pre-Deployment Validation
              </h3>
              <p className="text-gray-600">
                Test every AI release before it reaches customers. Get pass/fail
                scores on 10 empathy dimensions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Board-Ready Reports
              </h3>
              <p className="text-gray-600">
                One-click PDF exports with executive summary, risk assessment,
                and competitive benchmarks. SOC 2 compliant.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Monitoring & Alerts
              </h3>
              <p className="text-gray-600">
                Continuous testing detects when your AI degrades. Slack alerts
                when empathy scores drop below threshold.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Competitive Intelligence
              </h3>
              <p className="text-gray-600">
                See how your AI scores vs GPT-4, Claude, and industry benchmarks.
                Prove you're safer than competitors.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Share results across Product, Legal, Compliance, and Executive
                teams. Role-based access controls.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                Documentation for EU AI Act, FDA medical AI, SOC 2 audits, and
                customer RFP responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              The Data Your Executives Need
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Risk Prevented
                  </h3>
                  <span className="text-4xl font-bold text-green-600">
                    $2.4M
                  </span>
                </div>
                <p className="text-gray-600">
                  Average cost of a viral AI incident. LLMTom catches failures
                  before deployment for $50K/year. <strong>48x ROI</strong>.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Time to Safety
                  </h3>
                  <span className="text-4xl font-bold text-indigo-600">
                    2 min
                  </span>
                </div>
                <p className="text-gray-600">
                  From API key to comprehensive safety report. No integration, no
                  training, no delays. Your board meeting is Friday.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Enterprise Adoption
                  </h3>
                  <span className="text-4xl font-bold text-blue-600">67%</span>
                </div>
                <p className="text-gray-600">
                  Of Fortune 500 AI teams now require empathy testing before
                  deployment. Don't be the last to implement safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait for a Crisis to Test Your AI
          </h2>
          <p className="text-xl mb-8 text-red-100">
            The CEO of a major healthcare company told us: "I wish we'd found
            these failures before our customers did."
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Run Emergency Audit Now
            </Link>
            <Link
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
            >
              Schedule Executive Briefing
            </Link>
          </div>
          <p className="text-sm text-red-100">
            Free safety scan • 2-minute test • Board-ready report
          </p>
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
              Enterprise AI Safety Platform
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
