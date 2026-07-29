import { chromium } from 'playwright';
import assert from 'node:assert/strict';

let browser;

try {
  console.log('Launching browser...');
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Navigating to example.com...');
  await page.goto('https://example.com/', { waitUntil: 'domcontentloaded' });

  const h1Content = await page.$eval('h1', (element) => element.textContent);
  assert.equal(h1Content, 'Example Domain');
  console.log('Browser smoke test passed.');
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser?.close();
}
