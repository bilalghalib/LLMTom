/**
 * LLMTom End-to-End Tests with Puppeteer
 *
 * Tests all landing pages, navigation, accessibility, and user flows
 * Generates detailed HTML report with screenshots
 */

const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';
const REPORT_DIR = path.join(__dirname, '../test-reports');
const SCREENSHOT_DIR = path.join(REPORT_DIR, 'screenshots');

// Test results storage
const testResults = {
  timestamp: new Date().toISOString(),
  baseUrl: BASE_URL,
  summary: {
    total: 0,
    passed: 0,
    failed: 0,
    warnings: 0
  },
  tests: [],
  accessibility: {},
  performance: {},
  screenshots: []
};

// Ensure directories exist
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });
if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

/**
 * Helper function to record test result
 */
function recordTest(name, status, message, details = {}) {
  const test = {
    name,
    status, // 'pass', 'fail', 'warn'
    message,
    timestamp: new Date().toISOString(),
    ...details
  };

  testResults.tests.push(test);
  testResults.summary.total++;

  if (status === 'pass') testResults.summary.passed++;
  else if (status === 'fail') testResults.summary.failed++;
  else if (status === 'warn') testResults.summary.warnings++;

  console.log(`${status.toUpperCase()}: ${name} - ${message}`);
}

/**
 * Take screenshot and save
 */
async function takeScreenshot(page, name) {
  const filename = `${name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`;
  const filepath = path.join(SCREENSHOT_DIR, filename);

  await page.screenshot({
    path: filepath,
    fullPage: true
  });

  testResults.screenshots.push({
    name,
    filename,
    path: filepath
  });

  return filename;
}

/**
 * Test: Page loads successfully
 */
async function testPageLoad(page, url, pageName) {
  try {
    const response = await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    if (response && response.ok()) {
      await takeScreenshot(page, `${pageName}-loaded`);
      recordTest(`${pageName} Load`, 'pass', `Page loaded with status ${response.status()}`);
      return true;
    } else {
      recordTest(`${pageName} Load`, 'fail', `HTTP ${response ? response.status() : 'No response'}`);
      return false;
    }
  } catch (error) {
    recordTest(`${pageName} Load`, 'fail', `Error: ${error.message}`);
    return false;
  }
}

/**
 * Test: Navigation links work
 */
async function testNavigation(page, pageName) {
  try {
    // Find all navigation links
    const links = await page.$$eval('nav a', anchors =>
      anchors.map(a => ({ text: a.textContent.trim(), href: a.href }))
    );

    if (links.length === 0) {
      recordTest(`${pageName} Navigation`, 'warn', 'No navigation links found');
      return;
    }

    recordTest(`${pageName} Navigation`, 'pass', `Found ${links.length} navigation links`);

    // Test first link works (don't navigate away)
    const firstLink = await page.$('nav a');
    if (firstLink) {
      const href = await page.evaluate(el => el.href, firstLink);
      recordTest(`${pageName} Nav Link`, 'pass', `First link points to: ${href}`);
    }
  } catch (error) {
    recordTest(`${pageName} Navigation`, 'fail', `Error: ${error.message}`);
  }
}

/**
 * Test: Responsive design (mobile/tablet/desktop)
 */
async function testResponsive(page, pageName) {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 }
  ];

  for (const viewport of viewports) {
    try {
      await page.setViewport({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(500); // Let layout settle

      // Check for horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      if (hasHorizontalScroll) {
        recordTest(`${pageName} ${viewport.name}`, 'warn', 'Horizontal scrollbar detected');
      } else {
        recordTest(`${pageName} ${viewport.name}`, 'pass', 'No horizontal scroll');
      }

      await takeScreenshot(page, `${pageName}-${viewport.name.toLowerCase()}`);
    } catch (error) {
      recordTest(`${pageName} ${viewport.name}`, 'fail', `Error: ${error.message}`);
    }
  }

  // Reset to desktop
  await page.setViewport({ width: 1920, height: 1080 });
}

/**
 * Test: Accessibility with axe-core
 */
async function testAccessibility(page, pageName) {
  try {
    const results = await new AxePuppeteer(page).analyze();

    testResults.accessibility[pageName] = {
      violations: results.violations.length,
      passes: results.passes.length,
      incomplete: results.incomplete.length,
      details: results.violations.map(v => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        help: v.help,
        nodes: v.nodes.length
      }))
    };

    if (results.violations.length === 0) {
      recordTest(`${pageName} Accessibility`, 'pass', `No violations found (${results.passes.length} checks passed)`);
    } else {
      const critical = results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious');
      if (critical.length > 0) {
        recordTest(`${pageName} Accessibility`, 'fail', `${critical.length} critical violations found`);
      } else {
        recordTest(`${pageName} Accessibility`, 'warn', `${results.violations.length} minor violations found`);
      }
    }
  } catch (error) {
    recordTest(`${pageName} Accessibility`, 'fail', `Error: ${error.message}`);
  }
}

/**
 * Test: Performance metrics
 */
async function testPerformance(page, pageName) {
  try {
    const metrics = await page.metrics();
    const performanceMetrics = JSON.parse(
      await page.evaluate(() => JSON.stringify(window.performance.timing))
    );

    const loadTime = performanceMetrics.loadEventEnd - performanceMetrics.navigationStart;
    const domContentLoaded = performanceMetrics.domContentLoadedEventEnd - performanceMetrics.navigationStart;

    testResults.performance[pageName] = {
      loadTime: loadTime,
      domContentLoaded: domContentLoaded,
      scriptDuration: metrics.ScriptDuration,
      layoutDuration: metrics.LayoutDuration,
      jsHeapUsedSize: metrics.JSHeapUsedSize
    };

    if (loadTime < 3000) {
      recordTest(`${pageName} Performance`, 'pass', `Load time: ${loadTime}ms`);
    } else if (loadTime < 5000) {
      recordTest(`${pageName} Performance`, 'warn', `Load time: ${loadTime}ms (slow)`);
    } else {
      recordTest(`${pageName} Performance`, 'fail', `Load time: ${loadTime}ms (too slow)`);
    }
  } catch (error) {
    recordTest(`${pageName} Performance`, 'warn', `Could not measure: ${error.message}`);
  }
}

/**
 * Test: Critical user flows (no login required)
 */
async function testCriticalFlows(page) {
  try {
    // Test 1: Navigation from home to enterprise
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
    const enterpriseLink = await page.$('a[href="/enterprise"]');
    if (enterpriseLink) {
      await enterpriseLink.click();
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
      const url = page.url();
      if (url.includes('/enterprise')) {
        recordTest('Flow: Home → Enterprise', 'pass', 'Navigation successful');
      } else {
        recordTest('Flow: Home → Enterprise', 'fail', `Ended at: ${url}`);
      }
    } else {
      recordTest('Flow: Home → Enterprise', 'warn', 'Enterprise link not found');
    }

    // Test 2: Navigate to dashboard
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
    const dashboardLink = await page.$('a[href="/dashboard"]');
    if (dashboardLink) {
      await dashboardLink.click();
      await page.waitForNavigation({ waitUntil: 'networkidle2' });
      const url = page.url();
      if (url.includes('/dashboard')) {
        recordTest('Flow: Home → Dashboard', 'pass', 'Navigation successful');
        await takeScreenshot(page, 'dashboard-view');
      } else {
        recordTest('Flow: Home → Dashboard', 'fail', `Ended at: ${url}`);
      }
    }
  } catch (error) {
    recordTest('Critical Flows', 'fail', `Error: ${error.message}`);
  }
}

/**
 * Test: Form validation (dashboard)
 */
async function testDashboardForm(page) {
  try {
    await page.goto(`${BASE_URL}/dashboard`, { waitUntil: 'networkidle2' });

    // Try to submit without API key
    const runButton = await page.$('button:has-text("Run Tests"), button:has-text("Run")');
    if (runButton) {
      const isDisabled = await page.evaluate(btn => btn.disabled, runButton);
      if (isDisabled) {
        recordTest('Dashboard Validation', 'pass', 'Run button disabled without API key');
      } else {
        recordTest('Dashboard Validation', 'warn', 'Run button not disabled (should validate API key)');
      }
    } else {
      recordTest('Dashboard Validation', 'warn', 'Run button not found');
    }

    // Check for form inputs
    const inputs = await page.$$('input, select');
    if (inputs.length > 0) {
      recordTest('Dashboard Form', 'pass', `Found ${inputs.length} form inputs`);
    } else {
      recordTest('Dashboard Form', 'warn', 'No form inputs found');
    }
  } catch (error) {
    recordTest('Dashboard Form', 'fail', `Error: ${error.message}`);
  }
}

/**
 * Test: Console errors
 */
async function checkConsoleErrors(page, pageName) {
  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
    if (msg.type() === 'warning') warnings.push(msg.text());
  });

  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.waitForTimeout(2000); // Wait for any async errors

  if (errors.length === 0) {
    recordTest(`${pageName} Console Errors`, 'pass', 'No console errors');
  } else {
    recordTest(`${pageName} Console Errors`, 'fail', `${errors.length} errors: ${errors[0]}`);
  }

  if (warnings.length > 0) {
    recordTest(`${pageName} Console Warnings`, 'warn', `${warnings.length} warnings`);
  }
}

/**
 * Test: SEO basics
 */
async function testSEO(page, pageName) {
  try {
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => null);
    const h1Count = await page.$$eval('h1', elements => elements.length);

    if (title && title.length > 0) {
      recordTest(`${pageName} SEO Title`, 'pass', `Title: "${title}"`);
    } else {
      recordTest(`${pageName} SEO Title`, 'fail', 'No title tag');
    }

    if (metaDescription) {
      recordTest(`${pageName} SEO Meta`, 'pass', 'Meta description present');
    } else {
      recordTest(`${pageName} SEO Meta`, 'warn', 'No meta description');
    }

    if (h1Count === 1) {
      recordTest(`${pageName} SEO H1`, 'pass', 'Exactly one H1 tag');
    } else {
      recordTest(`${pageName} SEO H1`, 'warn', `${h1Count} H1 tags (should be 1)`);
    }
  } catch (error) {
    recordTest(`${pageName} SEO`, 'fail', `Error: ${error.message}`);
  }
}

/**
 * Main test runner
 */
async function runTests() {
  console.log('🚀 Starting LLMTom E2E Tests...\n');
  console.log(`Testing: ${BASE_URL}\n`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

    // Test all landing pages
    const pages = [
      { url: '/', name: 'Home' },
      { url: '/enterprise', name: 'Enterprise' },
      { url: '/startups', name: 'Startups' },
      { url: '/customer-success', name: 'Customer Success' },
      { url: '/dashboard', name: 'Dashboard' }
    ];

    for (const testPage of pages) {
      console.log(`\n📄 Testing: ${testPage.name}`);
      console.log('─'.repeat(50));

      const loaded = await testPageLoad(page, `${BASE_URL}${testPage.url}`, testPage.name);

      if (loaded) {
        await testNavigation(page, testPage.name);
        await testResponsive(page, testPage.name);
        await testAccessibility(page, testPage.name);
        await testPerformance(page, testPage.name);
        await testSEO(page, testPage.name);
        await checkConsoleErrors(page, testPage.name);
      }
    }

    // Test critical flows
    console.log('\n🔄 Testing Critical User Flows');
    console.log('─'.repeat(50));
    await testCriticalFlows(page);

    // Test dashboard form
    console.log('\n📝 Testing Dashboard Form');
    console.log('─'.repeat(50));
    await testDashboardForm(page);

  } catch (error) {
    console.error('Fatal error:', error);
    recordTest('Test Suite', 'fail', `Fatal error: ${error.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  // Generate HTML report
  generateHTMLReport();

  // Print summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total Tests: ${testResults.summary.total}`);
  console.log(`✅ Passed: ${testResults.summary.passed}`);
  console.log(`❌ Failed: ${testResults.summary.failed}`);
  console.log(`⚠️  Warnings: ${testResults.summary.warnings}`);
  console.log(`\n📄 Report: ${path.join(REPORT_DIR, 'test-report.html')}`);
  console.log('='.repeat(70) + '\n');

  // Exit with error code if tests failed
  process.exit(testResults.summary.failed > 0 ? 1 : 0);
}

/**
 * Generate HTML report
 */
function generateHTMLReport() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LLMTom Test Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .header h1 { font-size: 2.5em; margin-bottom: 10px; }
    .header p { opacity: 0.9; }
    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .summary-card {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      text-align: center;
    }
    .summary-card h3 { color: #666; font-size: 0.9em; margin-bottom: 10px; }
    .summary-card .number { font-size: 3em; font-weight: bold; }
    .summary-card.passed .number { color: #10b981; }
    .summary-card.failed .number { color: #ef4444; }
    .summary-card.warnings .number { color: #f59e0b; }
    .summary-card.total .number { color: #667eea; }
    .section {
      background: white;
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .section h2 {
      font-size: 1.5em;
      margin-bottom: 20px;
      color: #333;
      border-bottom: 2px solid #667eea;
      padding-bottom: 10px;
    }
    .test-result {
      padding: 15px;
      margin-bottom: 10px;
      border-left: 4px solid #ccc;
      background: #f9f9f9;
      border-radius: 5px;
    }
    .test-result.pass { border-left-color: #10b981; background: #f0fdf4; }
    .test-result.fail { border-left-color: #ef4444; background: #fef2f2; }
    .test-result.warn { border-left-color: #f59e0b; background: #fffbeb; }
    .test-result .name { font-weight: bold; margin-bottom: 5px; }
    .test-result .message { color: #666; font-size: 0.9em; }
    .test-result .status {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 3px;
      font-size: 0.8em;
      margin-left: 10px;
    }
    .test-result.pass .status { background: #10b981; color: white; }
    .test-result.fail .status { background: #ef4444; color: white; }
    .test-result.warn .status { background: #f59e0b; color: white; }
    .screenshots {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .screenshot {
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }
    .screenshot img {
      width: 100%;
      height: auto;
      display: block;
    }
    .screenshot .caption {
      padding: 10px;
      background: #f9f9f9;
      font-size: 0.9em;
      text-align: center;
    }
    .accessibility-violations {
      margin-top: 20px;
    }
    .violation {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 10px;
    }
    .violation.critical { border-left: 4px solid #dc2626; }
    .violation.serious { border-left: 4px solid #ea580c; }
    .violation.moderate { border-left: 4px solid #f59e0b; }
    .violation.minor { border-left: 4px solid #84cc16; }
    .violation h4 { margin-bottom: 5px; color: #333; }
    .violation p { color: #666; font-size: 0.9em; }
    .performance-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
    .metric {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 5px;
      border-left: 3px solid #667eea;
    }
    .metric .label { color: #666; font-size: 0.9em; margin-bottom: 5px; }
    .metric .value { font-size: 1.5em; font-weight: bold; color: #333; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🧠 LLMTom Test Report</h1>
      <p>Generated: ${new Date(testResults.timestamp).toLocaleString()}</p>
      <p>Base URL: ${testResults.baseUrl}</p>
    </div>

    <div class="summary">
      <div class="summary-card total">
        <h3>Total Tests</h3>
        <div class="number">${testResults.summary.total}</div>
      </div>
      <div class="summary-card passed">
        <h3>Passed</h3>
        <div class="number">${testResults.summary.passed}</div>
      </div>
      <div class="summary-card failed">
        <h3>Failed</h3>
        <div class="number">${testResults.summary.failed}</div>
      </div>
      <div class="summary-card warnings">
        <h3>Warnings</h3>
        <div class="number">${testResults.summary.warnings}</div>
      </div>
    </div>

    <div class="section">
      <h2>Test Results</h2>
      ${testResults.tests.map(test => `
        <div class="test-result ${test.status}">
          <div class="name">
            ${test.name}
            <span class="status">${test.status.toUpperCase()}</span>
          </div>
          <div class="message">${test.message}</div>
        </div>
      `).join('')}
    </div>

    ${Object.keys(testResults.accessibility).length > 0 ? `
    <div class="section">
      <h2>Accessibility Violations</h2>
      ${Object.entries(testResults.accessibility).map(([page, data]) => `
        <h3>${page}</h3>
        <p>Found ${data.violations} violations, ${data.passes} checks passed</p>
        <div class="accessibility-violations">
          ${data.details.map(v => `
            <div class="violation ${v.impact}">
              <h4>${v.id} (${v.impact})</h4>
              <p><strong>${v.description}</strong></p>
              <p>${v.help} - ${v.nodes} affected elements</p>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
    ` : ''}

    ${Object.keys(testResults.performance).length > 0 ? `
    <div class="section">
      <h2>Performance Metrics</h2>
      ${Object.entries(testResults.performance).map(([page, metrics]) => `
        <h3>${page}</h3>
        <div class="performance-metrics">
          <div class="metric">
            <div class="label">Load Time</div>
            <div class="value">${metrics.loadTime}ms</div>
          </div>
          <div class="metric">
            <div class="label">DOM Content Loaded</div>
            <div class="value">${metrics.domContentLoaded}ms</div>
          </div>
          <div class="metric">
            <div class="label">JS Heap Used</div>
            <div class="value">${(metrics.jsHeapUsedSize / 1024 / 1024).toFixed(2)}MB</div>
          </div>
        </div>
      `).join('')}
    </div>
    ` : ''}

    ${testResults.screenshots.length > 0 ? `
    <div class="section">
      <h2>Screenshots</h2>
      <div class="screenshots">
        ${testResults.screenshots.map(screenshot => `
          <div class="screenshot">
            <img src="screenshots/${screenshot.filename}" alt="${screenshot.name}">
            <div class="caption">${screenshot.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <div class="section">
      <h2>What's Good ✅</h2>
      <ul>
        ${testResults.tests.filter(t => t.status === 'pass').slice(0, 10).map(t =>
          `<li>${t.name}: ${t.message}</li>`
        ).join('')}
      </ul>
    </div>

    <div class="section">
      <h2>What's Bad ❌</h2>
      <ul>
        ${testResults.tests.filter(t => t.status === 'fail').map(t =>
          `<li><strong>${t.name}</strong>: ${t.message}</li>`
        ).join('') || '<li>No critical failures!</li>'}
      </ul>
    </div>

    <div class="section">
      <h2>Needs Work ⚠️</h2>
      <ul>
        ${testResults.tests.filter(t => t.status === 'warn').map(t =>
          `<li>${t.name}: ${t.message}</li>`
        ).join('') || '<li>No warnings!</li>'}
      </ul>
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(REPORT_DIR, 'test-report.html'), html);
  console.log(`\n✅ HTML report generated: ${path.join(REPORT_DIR, 'test-report.html')}`);
}

// Run tests
runTests().catch(console.error);
