import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('ERROR:', msg.text());
  });
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://localhost:4321/admin/pages/bae1d0d1-2a06-413e-a5e9-57e1c007b2c2', { waitUntil: 'networkidle' });
  await browser.close();
})();
