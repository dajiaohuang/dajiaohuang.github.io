const assert = require('node:assert/strict');
const path = require('node:path');

const playwrightModule = process.argv[2] || 'playwright';
const { chromium } = require(playwrightModule);

const baseUrl = process.argv[3] || 'http://127.0.0.1:4187';
const artifacts = path.resolve(__dirname, '..', 'test-artifacts');
const viewports = {
  desktop: { width: 1440, height: 1050 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
  narrow: { width: 320, height: 720 },
};

async function assertNoOverflow(page, label) {
  const overflow = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  const widest = Math.max(overflow.document, overflow.body);
  assert.ok(widest <= overflow.viewport + 1, `${label}: horizontal overflow ${JSON.stringify(overflow)}`);
}

async function revealAll(page) {
  const dimensions = await page.evaluate(() => ({
    height: document.documentElement.scrollHeight,
    step: Math.max(240, Math.floor(window.innerHeight * 0.72)),
  }));
  for (let y = 0; y < dimensions.height; y += dimensions.step) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(45);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(120);
}

let browser;

(async () => {
  const report = { viewports: {}, consoleErrors: [], pageErrors: [] };
  browser = await chromium.launch({ headless: true });

  const desktopContext = await browser.newContext({ viewport: viewports.desktop });
  const page = await desktopContext.newPage();
  page.on('console', (message) => {
    if (message.type() === 'error') report.consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => report.pageErrors.push(String(error)));

  const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  assert.equal(await page.title(), 'Wu Shuwen — Systems, agents, and evidence');
  assert.equal(await page.locator('h1').innerText(), 'I build systems that can explain themselves.');
  assert.equal(await page.locator('main section').count(), 5);
  assert.equal(await page.locator('article.project').count(), 5);
  assert.equal(await page.locator('img:not([alt])').count(), 0);
  assert.ok(await page.locator("a[href='#work']").first().isVisible());
  await assertNoOverflow(page, 'desktop');

  await page.locator("[data-map-node][data-title='RepoStew']").focus();
  assert.match(await page.locator('[data-map-copy]').innerText(), /careful operating system/);

  await page.locator('[data-theme-toggle]').click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.reload({ waitUntil: 'networkidle' });
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.locator('[data-theme-toggle]').click();
  await revealAll(page);
  await page.screenshot({ path: path.join(artifacts, 'desktop.png'), fullPage: true });

  for (const asset of ['/styles.css', '/app.js', '/assets/favicon.svg', '/site.webmanifest', '/robots.txt', '/sitemap.xml']) {
    const assetResponse = await desktopContext.request.get(`${baseUrl}${asset}`);
    assert.equal(assetResponse.status(), 200, asset);
  }

  await page.goto(`${baseUrl}/404.html`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('h1').innerText(), 'The route ended here.');
  await desktopContext.close();

  for (const [label, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport });
    const viewportPage = await context.newPage();
    await viewportPage.goto(baseUrl, { waitUntil: 'networkidle' });
    await assertNoOverflow(viewportPage, label);
    report.viewports[label] = viewport;
    if (label === 'mobile') {
      await revealAll(viewportPage);
      await viewportPage.screenshot({ path: path.join(artifacts, 'mobile.png'), fullPage: true });
      assert.equal(await viewportPage.locator('.site-nav').evaluate((element) => getComputedStyle(element).position), 'fixed');
    }
    await context.close();
  }

  const noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: viewports.mobile });
  const noJsPage = await noJsContext.newPage();
  await noJsPage.goto(baseUrl, { waitUntil: 'networkidle' });
  assert.ok(await noJsPage.locator('h1').isVisible());
  assert.ok(await noJsPage.locator('.project').first().isVisible());
  await assertNoOverflow(noJsPage, 'no-js');
  await noJsContext.close();

  const reducedContext = await browser.newContext({ reducedMotion: 'reduce', viewport: viewports.mobile });
  const reducedPage = await reducedContext.newPage();
  await reducedPage.goto(baseUrl, { waitUntil: 'networkidle' });
  assert.equal(await reducedPage.locator('.reveal').first().evaluate((element) => getComputedStyle(element).opacity), '1');
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
