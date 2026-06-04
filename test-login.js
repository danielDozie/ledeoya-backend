import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    } else {
      console.log('LOG:', msg.text());
    }
  });
  
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
  });

  try {
    const url = 'http://localhost:4324/admin/login';
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'load' });

    console.log('Logging in...');
    await page.waitForSelector('input[type="email"]');
    await page.fill('input[type="email"]', 'admin@ledeoya.local');
    await page.fill('input[type="password"]', 'L3YHEOPFQy3Gp2omX^15(&fZ');
    
    await page.click('button[type="submit"]');
    
    console.log('Waiting for navigation...');
    await page.waitForNavigation({ waitUntil: 'load' });
    
    console.log('Navigating directly to item...');
    await page.goto('http://localhost:4324/admin/pages/bae1d0d1-2a06-413e-a5e9-57e1c007b2c2', { waitUntil: 'load' });
    
    console.log('Waiting 5 seconds for any delayed hydration errors...');
    await page.waitForTimeout(5000);
  } catch (err) {
    console.log('SCRIPT ERROR:', err.message);
  } finally {
    console.log('Closing browser...');
    await browser.close();
  }
})();
