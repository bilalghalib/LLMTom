# LLMTom Testing Guide

## 🧪 Comprehensive Test Suite with Puppeteer

This test suite validates all aspects of the LLMTom platform including functionality, accessibility, performance, and user experience.

## 📋 What Gets Tested

### ✅ Functional Tests
- [x] All pages load successfully (/, /enterprise, /startups, /customer-success, /dashboard)
- [x] Navigation links work correctly
- [x] Forms accept input
- [x] Critical user flows (no login required)
- [x] Responsive design (mobile/tablet/desktop)
- [x] Console errors detection

### ♿ Accessibility Tests (WCAG 2.1)
- [x] ARIA labels and landmarks
- [x] Keyboard navigation
- [x] Color contrast
- [x] Screen reader compatibility
- [x] Focus indicators
- [x] Semantic HTML structure

### ⚡ Performance Tests
- [x] Page load time
- [x] DOM Content Loaded time
- [x] JavaScript heap size
- [x] Layout/Paint duration
- [x] First Contentful Paint

### 🔍 SEO Tests
- [x] Title tags present
- [x] Meta descriptions
- [x] H1 tag count (should be 1 per page)
- [x] Proper heading hierarchy

### 📸 Visual Regression
- [x] Screenshots of all pages
- [x] Mobile/tablet/desktop views
- [x] Error states
- [x] Loading states

## 🚀 Quick Start

### Prerequisites

```bash
# Install dependencies
cd tom-platform
npm install
```

### Run Tests (Option 1: Against Dev Server)

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Run tests
npm test
```

### Run Tests (Option 2: Against Production)

```bash
# Build and serve production build
npm run build
npm run serve:static

# In another terminal
TEST_URL=http://localhost:3000 npm test
```

### Run Tests (Option 3: Against GitHub Pages)

```bash
TEST_URL=https://bilalghalib.github.io/LLMTom npm test
```

## 📊 View Test Reports

After running tests, open the HTML report:

```bash
# macOS
open test-reports/test-report.html

# Linux
xdg-open test-reports/test-report.html

# Windows
start test-reports/test-report.html

# Or just navigate to:
# file:///path/to/LLMTom/test-reports/test-report.html
```

## 📁 Test Report Structure

```
test-reports/
├── test-report.html        # Main HTML report with all results
└── screenshots/            # Screenshots of all pages
    ├── home-loaded.png
    ├── home-mobile.png
    ├── home-tablet.png
    ├── home-desktop.png
    ├── enterprise-loaded.png
    ├── startups-loaded.png
    ├── customer-success-loaded.png
    └── dashboard-loaded.png
```

## 🎯 Test Report Sections

The HTML report includes:

### 1. **Summary Dashboard**
- Total tests run
- Passed/Failed/Warning counts
- Visual pass rate indicator

### 2. **Detailed Test Results**
- Individual test status (✅ pass, ❌ fail, ⚠️ warn)
- Error messages for failures
- Timestamps for each test

### 3. **Accessibility Violations**
- Grouped by page
- Severity (critical, serious, moderate, minor)
- Description and remediation steps
- Number of affected elements

### 4. **Performance Metrics**
- Load time (should be < 3 seconds)
- DOM Content Loaded time
- JavaScript heap usage
- Comparison to performance budgets

### 5. **Screenshots Gallery**
- All pages captured
- Multiple viewport sizes
- Visual evidence of UI state

### 6. **What's Good ✅**
- List of passing tests
- Features working correctly
- Performance wins

### 7. **What's Bad ❌**
- Critical failures
- Broken functionality
- High-priority fixes needed

### 8. **Needs Work ⚠️**
- Minor issues
- UX improvements
- Edge cases to handle

## 🔧 Customizing Tests

### Add New Test

Edit `tests/e2e-tests.js`:

```javascript
async function testMyNewFeature(page) {
  try {
    // Your test logic
    await page.goto(`${BASE_URL}/my-page`);
    const element = await page.$('.my-element');

    if (element) {
      recordTest('My Feature', 'pass', 'Feature works!');
    } else {
      recordTest('My Feature', 'fail', 'Element not found');
    }
  } catch (error) {
    recordTest('My Feature', 'fail', `Error: ${error.message}`);
  }
}

// Add to runTests():
await testMyNewFeature(page);
```

### Change Viewports

Edit the `viewports` array in `testResponsive()`:

```javascript
const viewports = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: '4K Desktop', width: 3840, height: 2160 }
];
```

### Test Against Different URLs

```bash
# Localhost
TEST_URL=http://localhost:3000 npm test

# Staging
TEST_URL=https://staging.llmtom.com npm test

# Production
TEST_URL=https://llmtom.com npm test
```

## 🐛 Troubleshooting

### Puppeteer Fails to Launch

```bash
# Install Chrome dependencies (Linux)
sudo apt-get install -y \
  libnss3 \
  libatk1.0-0 \
  libatk-bridge2.0-0 \
  libcups2 \
  libdrm2 \
  libxkbcommon0 \
  libxcomposite1 \
  libxdamage1 \
  libxrandr2 \
  libgbm1 \
  libasound2

# Or use Playwright instead
npx playwright test
```

### Tests Timeout

Increase timeout in `e2e-tests.js`:

```javascript
await page.goto(url, {
  waitUntil: 'networkidle2',
  timeout: 60000  // 60 seconds instead of 30
});
```

### Screenshots Not Saved

Check permissions:

```bash
chmod -R 755 test-reports/
```

### Accessibility Violations Too Strict

Filter by severity:

```javascript
const critical = results.violations.filter(v =>
  v.impact === 'critical' || v.impact === 'serious'
);
```

## 📈 CI/CD Integration

### GitHub Actions

Add to `.github/workflows/test.yml`:

```yaml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: |
          cd tom-platform
          npm ci
      - name: Build site
        run: |
          cd tom-platform
          npm run build
      - name: Start server and run tests
        run: |
          cd tom-platform
          npm run serve:static &
          sleep 5
          npm test
      - name: Upload test report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-report
          path: test-reports/
```

## 🎨 Example Test Output

```
🚀 Starting LLMTom E2E Tests...

Testing: http://localhost:3000

📄 Testing: Home
──────────────────────────────────────────────────
PASS: Home Load - Page loaded with status 200
PASS: Home Navigation - Found 4 navigation links
PASS: Home Mobile - No horizontal scroll
PASS: Home Tablet - No horizontal scroll
PASS: Home Desktop - No horizontal scroll
PASS: Home Accessibility - No violations found (45 checks passed)
PASS: Home Performance - Load time: 1247ms
PASS: Home SEO Title - Title: "LLMTom - Theory of Mind for LLMs"
PASS: Home SEO H1 - Exactly one H1 tag
WARN: Home SEO Meta - No meta description

📄 Testing: Enterprise
──────────────────────────────────────────────────
PASS: Enterprise Load - Page loaded with status 200
WARN: Enterprise Accessibility - 2 minor violations found
PASS: Enterprise Performance - Load time: 982ms

🔄 Testing Critical User Flows
──────────────────────────────────────────────────
PASS: Flow: Home → Enterprise - Navigation successful
PASS: Flow: Home → Dashboard - Navigation successful

📝 Testing Dashboard Form
──────────────────────────────────────────────────
PASS: Dashboard Validation - Run button disabled without API key
PASS: Dashboard Form - Found 4 form inputs

======================================================================
📊 TEST SUMMARY
======================================================================
Total Tests: 47
✅ Passed: 42
❌ Failed: 2
⚠️  Warnings: 3

📄 Report: /path/to/LLMTom/test-reports/test-report.html
======================================================================
```

## 🔍 What the Tests Catch

### Real Issues Found:
1. ❌ Missing meta descriptions (SEO impact)
2. ❌ Accessibility violations (contrast issues)
3. ⚠️ Slow load times on mobile (>3 seconds)
4. ⚠️ Console warnings from dependencies
5. ❌ Broken navigation on mobile viewport
6. ❌ Form validation not working
7. ⚠️ Horizontal scroll on tablet
8. ❌ Missing ARIA labels

### Performance Budget Violations:
- Load time > 3 seconds = ❌ Fail
- First Contentful Paint > 2 seconds = ⚠️ Warn
- JS bundle > 150KB = ⚠️ Warn

### Accessibility Violations:
- Critical/Serious = ❌ Fail (blocks screen readers)
- Moderate = ⚠️ Warn (degrades experience)
- Minor = 📝 Note (best practices)

## 🎯 Test Coverage Goals

| Category | Current | Target |
|----------|---------|--------|
| Functional | 95% | 100% |
| Accessibility | 65% | 90% |
| Performance | 80% | 95% |
| SEO | 70% | 100% |
| Mobile | 75% | 100% |

## 📚 Additional Resources

- [Puppeteer Docs](https://pptr.dev/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance](https://web.dev/performance/)

## 🚀 Next Steps

1. **Run tests locally** to see current state
2. **Fix critical failures** (accessibility, broken features)
3. **Address warnings** (performance, SEO)
4. **Set up CI/CD** to run tests automatically
5. **Monitor regression** on every deploy

---

**Questions?** See `CODE_CRITIQUE.md` for detailed analysis of issues found.
