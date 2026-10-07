import { test, expect } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test("password can be shown and hidden without clearing it or submitting signup", async ({ page }) => {
  let handoffPosts = 0;
  await page.route("https://www.freecacfp.com/api/auth/handoff", async (route) => {
    if (route.request().method() === "POST") handoffPosts += 1;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-CACFP-Signup-Test-Code",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
      body: "{}",
    });
  });
  await page.goto("/signup");
  await page.getByLabel("Testing access code").fill("local-test-only");
  await page.getByRole("button", { name: "Continue", exact: true }).click();

  const password = page.getByLabel("Password", { exact: false }).first();
  await password.fill("LocalPassword123!");
  await expect(password).toHaveAttribute("type", "password");

  const show = page.getByRole("button", { name: "Show password", exact: true });
  await expect(show).toBeVisible();
  const size = await show.boundingBox();
  expect(size?.height).toBeGreaterThanOrEqual(48);
  await show.click();
  await expect(password).toHaveAttribute("type", "text");
  await expect(password).toHaveValue("LocalPassword123!");
  await expect(page.getByRole("button", { name: "Hide password" })).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "Hide password", exact: true }).click();
  await expect(password).toHaveAttribute("type", "password");
  await expect(password).toHaveValue("LocalPassword123!");
  await expect(page.getByText("First name is required", { exact: true })).toHaveCount(0);
  expect(handoffPosts).toBe(0);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});
