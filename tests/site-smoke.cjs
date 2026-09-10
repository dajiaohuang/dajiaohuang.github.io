const assert = require('node:assert/strict');
const path = require('node:path');

const playwrightModule = process.argv[2] || 'playwright';
const { chromium } = require(playwrightModule);
const baseUrl = process.argv[3] || 'http://127.0.0.1:4187';
const artifacts = path.resolve(__dirname, '..', 'test-artifacts');
const viewports = {
  desktop: { width: 1440, height: 1000 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
  narrow: { width: 320, height: 720 },
};
const heightLimits = { desktop: 3300, tablet: 4400, mobile: 6500, narrow: 7200 };

async function layout(page) {
  return page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
    height: document.documentElement.scrollHeight,
  }));
}

async function assertCompactLayout(page, label) {
  const metrics = await layout(page);
  assert.ok(Math.max(metrics.documentWidth, metrics.bodyWidth) <= metrics.viewportWidth + 1, `${label}: horizontal overflow ${JSON.stringify(metrics)}`);
  assert.ok(metrics.height <= heightLimits[label], `${label}: page is no longer compact ${JSON.stringify(metrics)}`);
}

let browser;

(async () => {
  const report = { viewports: {}, consoleErrors: [], pageErrors: [] };
  browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({ viewport: viewports.desktop });
  const page = await context.newPage();
  page.on('console', (message) => { if (message.type() === 'error') report.consoleErrors.push(message.text()); });
  page.on('pageerror', (error) => report.pageErrors.push(String(error)));

  const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  assert.equal(await page.title(), 'Wu Shuwen — 软件工程、智能体与开源');
  assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN');
  assert.equal(await page.locator('h1').innerText(), 'Wu Shuwen');
  assert.equal(await page.locator('main section').count(), 5);
  assert.equal(await page.locator('.project-row').count(), 5);
  assert.equal(await page.locator('.contribution-item').count(), 9);
  assert.equal(await page.locator('#contributions .section-label').innerText(), 'OPEN SOURCE / 179 PRS');
  assert.deepEqual(
    await page.locator('.contribution-item').evaluateAll((items) => items.map((item) => item.innerText.replace(/\n/g, ' '))),
    [
      'PraisonAI 33',
      'VisActor / VChart 9',
      'ByteDance / g3 6',
      'ByteDance / vArmor 5',
      'HKUDS / nanobot 6',
      'Turso 5',
      'Web Infra / Rspress 4',
      'Volcengine / OpenViking 3',
      'Puppeteer 3',
    ],
  );
  assert.equal(await page.locator('.research-row').count(), 3);
  assert.equal(await page.locator('img:not([alt])').count(), 0);
  assert.equal(await page.locator('.contribution-item[href*="dajiaohuang/"]').count(), 0);
  assert.equal(await page.locator('.contribution-item[href*="SagaSmithAI/"]').count(), 0);
  await assertCompactLayout(page, 'desktop');

  await page.locator('[data-language-toggle]').click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.equal(await page.title(), 'Wu Shuwen — Software engineering, agents, and open source');
  assert.match(await page.locator('.hero-lede').innerText(), /explicit boundaries/);
  assert.equal(await page.locator('.contribution-animation img').getAttribute('alt'), 'Wu Shuwen’s animated GitHub Contribution Activity');
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('html').getAttribute('data-lang'), 'en');
  await page.locator('[data-language-toggle]').click();

  await page.locator('[data-theme-toggle]').click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.locator('[data-theme-toggle]').click();
  await page.screenshot({ path: path.join(artifacts, 'desktop.png'), fullPage: true });

  for (const asset of ['/styles.css', '/app.js', '/assets/favicon.svg', '/site.webmanifest', '/robots.txt', '/sitemap.xml']) {
    const assetResponse = await context.request.get(`${baseUrl}${asset}`);
    assert.equal(assetResponse.status(), 200, asset);
  }
  for (const external of [
    'https://raw.githubusercontent.com/dajiaohuang/dajiaohuang/main/output/github-contribution-grid-snake.svg',
    'https://dajiaohuang.github.io/RepoStew_skills/',
    'https://dajiaohuang.github.io/Archive_and_Apply_Skill/',
  ]) {
    const externalResponse = await context.request.get(external);
    assert.equal(externalResponse.status(), 200, external);
  }

  await page.goto(`${baseUrl}/404.html`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('h1').innerText(), '这条路径到这里结束。');
  await context.close();

  for (const [label, viewport] of Object.entries(viewports)) {
    const viewportContext = await browser.newContext({ viewport });
    const viewportPage = await viewportContext.newPage();
    await viewportPage.goto(baseUrl, { waitUntil: 'networkidle' });
    await assertCompactLayout(viewportPage, label);
    await viewportPage.locator('[data-language-toggle]').evaluate((element) => element.click());
    const englishMetrics = await layout(viewportPage);
    assert.ok(Math.max(englishMetrics.documentWidth, englishMetrics.bodyWidth) <= englishMetrics.viewportWidth + 1, `${label}-en: horizontal overflow ${JSON.stringify(englishMetrics)}`);
    report.viewports[label] = { ...viewport, pageHeight: englishMetrics.height };
    if (label === 'mobile') await viewportPage.screenshot({ path: path.join(artifacts, 'mobile.png'), fullPage: true });
    await viewportContext.close();
  }

  const noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: viewports.mobile });
  const noJsPage = await noJsContext.newPage();
  await noJsPage.goto(baseUrl, { waitUntil: 'networkidle' });
  assert.equal(await noJsPage.locator('html').getAttribute('lang'), 'zh-CN');
  assert.equal(await noJsPage.locator('.hero-lede').innerText(), '我构建边界清晰、状态可复现、证据可追溯的软件系统。');
  assert.ok(await noJsPage.locator('.project-row').first().isVisible());
  await assertCompactLayout(noJsPage, 'mobile');
  await noJsContext.close();

  const reducedContext = await browser.newContext({ reducedMotion: 'reduce', viewport: viewports.mobile });
  const reducedPage = await reducedContext.newPage();
  await reducedPage.goto(baseUrl, { waitUntil: 'networkidle' });
  assert.equal(await reducedPage.locator('.contribution-animation').evaluate((element) => getComputedStyle(element).display), 'none');
  assert.equal(await reducedPage.locator('.activity-static').evaluate((element) => getComputedStyle(element).display), 'block');
  await reducedContext.close();

  await browser.close();
  assert.deepEqual(report.consoleErrors, []);
  assert.deepEqual(report.pageErrors, []);
  console.log(JSON.stringify(report, null, 2));
})().catch(async (error) => {
  if (browser) await browser.close();
  console.error(error);
  process.exitCode = 1;
});
