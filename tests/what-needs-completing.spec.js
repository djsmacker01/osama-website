// @ts-check
const { test, expect } = require('@playwright/test');

const ROUTES = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/terms-and-conditions', name: 'Terms & Conditions' },
  { path: '/privacy-policy', name: 'Privacy Policy' },
  { path: '/cookie-policy', name: 'Cookie Policy' },
];

const HOME_SECTION_IDS = ['home', 'about', 'what-i-do', 'ventures', 'projects', 'volunteering', 'speaking', 'contact'];

test.describe('Routes load', () => {
  for (const { path, name } of ROUTES) {
    test(`${name} (${path}) loads without error`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page).toHaveTitle(/Nurudeen/);
    });
  }
});

test.describe('Home page structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('key sections are present', async ({ page }) => {
    for (const id of HOME_SECTION_IDS) {
      await expect(page.locator(`#${id}`)).toBeVisible({ timeout: 15000 });
    }
  });

  test('navigation and footer are visible', async ({ page }) => {
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Internal links', () => {
  test('footer policy links work', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /terms/i }).first().click();
    await expect(page).toHaveURL(/terms-and-conditions/);
    await page.goto('/');
    await page.getByRole('link', { name: /privacy/i }).first().click();
    await expect(page).toHaveURL(/privacy-policy/);
    await page.goto('/');
    await page.getByRole('link', { name: /cookie/i }).first().click();
    await expect(page).toHaveURL(/cookie-policy/);
  });

  test('About page link works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about|full timeline/i }).first().click();
    await expect(page).toHaveURL(/\/(about|$)/);
  });
});

test.describe('What might need completing', () => {
  test('reports placeholder images and generic links', async ({ page }) => {
    const suggestions = [];

    await page.goto('/');

    // Placeholder images (placehold.co) – consider replacing with real assets
    const placeholderImgs = await page.locator('img[src*="placehold.co"]').count();
    if (placeholderImgs > 0) {
      suggestions.push(`Replace ${placeholderImgs} placeholder image(s) (placehold.co) with real project assets.`);
    }

    // Generic Instagram link – consider updating to real profile
    const instagramLink = await page.locator('a[href="https://instagram.com"]').count();
    if (instagramLink > 0) {
      suggestions.push('Update Footer: replace generic "https://instagram.com" with your real Instagram profile URL.');
    }

    // Check for broken in-page anchor (e.g. #story if anything still links to it)
    const storyLinks = await page.locator('a[href="#story"]').count();
    if (storyLinks > 0) {
      suggestions.push('Remove or update link(s) pointing to #story (story section was removed).');
    }

    // Optional: check meta description
    const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
    if (!metaDesc || metaDesc.length < 50) {
      suggestions.push('Consider adding a longer meta description for SEO.');
    }

    if (suggestions.length > 0) {
      console.log('\n--- Things to complete / improve ---');
      suggestions.forEach((s, i) => console.log(`${i + 1}. ${s}`));
      console.log('-----------------------------------\n');
    }

    // Don’t fail the test – this is informational
    expect(true).toBe(true);
  });
});
