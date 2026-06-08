import { test, expect } from "@playwright/test";

// These tests assert the STATED requirements for /contact, not whatever the
// markup happens to produce:
//   - the navbar renders as a styled component (no raw, unstyled link dump)
//   - the hero, form, and footer render correctly on an iPhone 14 viewport
//   - the desktop layout keeps its designed two-column form section
// They run on both the iphone-14 and desktop-chrome projects.

const isMobile = (name: string) => name === "iphone-14";

test.beforeEach(async ({ page }) => {
  await page.goto("/contact", { waitUntil: "load" });
});

// A page that renders "as an unformatted document" has no stylesheet applied:
// the body keeps the UA default background and the sticky header is static.
// This guard fails loudly if Tailwind/CSS ever fails to apply.
test("page is actually styled (CSS applied, not a raw document)", async ({ page }) => {
  const sheets = await page.evaluate(() => document.styleSheets.length);
  expect(sheets).toBeGreaterThanOrEqual(1);

  // brand site background (#fafafc) — a UA-default page would be transparent/white.
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(250, 250, 252)");

  // header is a styled, sticky, white bar — not inline static text.
  const header = page.locator("header").first();
  await expect(header).toHaveCSS("position", "sticky");
  await expect(header).toHaveCSS("background-color", "rgb(255, 255, 255)");
});

test("navbar renders correctly (styled brand + working responsive nav)", async ({
  page,
}, testInfo) => {
  const header = page.locator("header").first();
  await expect(header).toBeVisible();

  // Brand lockup is present and visible on every viewport.
  await expect(header.getByText("CACFP Free")).toBeVisible();

  // The desktop link row is `hidden lg:flex`. It is the thing that, when CSS
  // fails, dumps as a raw stack of links. Verify it follows the breakpoint.
  const desktopNav = page.locator("header nav.hidden");

  if (isMobile(testInfo.project.name)) {
    // Mobile: desktop link row must be collapsed (display:none) and the
    // hamburger control must be present — i.e. NOT a raw list of links.
    await expect(desktopNav).toBeHidden();
    await expect(page.getByRole("button", { name: /open menu|close menu/i })).toBeVisible();

    // The hamburger toggles a styled drawer with the nav links.
    await page.getByRole("button", { name: /open menu/i }).click();
    const drawer = page.locator("header .lg\\:hidden").last();
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible();
  } else {
    // Desktop: the link row is visible inline, hamburger is hidden.
    await expect(desktopNav).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(desktopNav.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(page.getByRole("button", { name: /open menu|close menu/i })).toBeHidden();
  }
});

test("hero, form, and footer all display correctly", async ({ page }) => {
  // --- Hero ---
  const h1 = page.getByRole("heading", { level: 1, name: "Get in touch" });
  await expect(h1).toBeVisible();
  await expect(h1).toHaveCSS("color", "rgb(255, 255, 255)"); // white on purple banner
  // The banner carries the brand purple gradient (inline style on the wrapper).
  const banner = page.locator('div[style*="linear-gradient"]').first();
  await expect(banner).toBeVisible();
  await expect(page.getByText("Have a question?", { exact: false }).first()).toBeVisible();

  // --- Form ---
  await expect(page.getByRole("heading", { name: "Send us a message" })).toBeVisible();
  await expect(page.getByLabel(/your name/i)).toBeVisible();
  await expect(page.getByLabel(/email address/i)).toBeVisible();
  await expect(page.getByLabel(/which cacfp app/i)).toBeVisible();
  await expect(page.getByLabel(/how can we help/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  // The form sits in a styled white card (not bare inputs on a plain page).
  const card = page.locator("form").locator("xpath=ancestor::div[contains(@class,'bg-white')][1]");
  await expect(card.first()).toHaveCSS("background-color", "rgb(255, 255, 255)");

  // --- Footer ---
  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
  await expect(footer.getByRole("link", { name: /privacy policy/i })).toBeVisible();
  await expect(footer.getByRole("link", { name: /terms of service/i })).toBeVisible();
  await expect(footer.getByText(/CACFP Solutions/i)).toBeVisible();
});

test("layout does not collapse or overflow horizontally", async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  // allow 1px rounding; anything more is a broken/collapsed layout.
  expect(overflow).toBeLessThanOrEqual(1);
});

test("desktop keeps its two-column form section (layout unchanged)", async ({
  page,
}, testInfo) => {
  test.skip(isMobile(testInfo.project.name), "desktop-only layout assertion");

  // The form section uses `grid lg:grid-cols-2`. On desktop that must resolve
  // to two columns (the designed layout), placing the form to the right of the
  // intro copy on the same row.
  const grid = page.locator("form").locator(
    "xpath=ancestor::div[contains(@class,'grid')][1]"
  );
  const cols = await grid.first().evaluate((el) => getComputedStyle(el).gridTemplateColumns);
  expect(cols.trim().split(/\s+/).length).toBe(2);

  const intro = page.getByText("Have a question about CACFP Free?", { exact: false });
  const introBox = await intro.boundingBox();
  const formBox = await page.locator("form").boundingBox();
  expect(introBox && formBox).toBeTruthy();
  // form column starts to the right of the intro column (side-by-side).
  expect(formBox!.x).toBeGreaterThan(introBox!.x + introBox!.width - 1);
});
