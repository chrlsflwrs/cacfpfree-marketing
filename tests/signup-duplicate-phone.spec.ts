import { test, expect, type Page } from "@playwright/test";

/*
 * Duplicate-phone signup (owner decision 2026-10-10, CACFP Free Issue #183). CACFP Free answers a handoff whose mobile number another
 * account already uses with 409 {code: "phone_in_use", error}. This site must show that explanation next to the number, keep everything
 * the person typed, and NOT tell them their email already has an account. Supabase sign-up and the CACFP Free handoff are stubbed, so
 * nothing here reaches a real service.
 */

test.use({ serviceWorkers: "block" });

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-CACFP-Signup-Test-Code, apikey, x-client-info",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const REFUSAL = "That mobile number is already used by another CACFP Free account, so we did not create a new account. Please use a different number. If the number is yours, sign in instead.";

async function stubServices(page: Page, handoffReplies: Array<{ status: number; body: unknown }>) {
  const handoffPosts: unknown[] = [];
  await page.route("**/auth/v1/signup**", async (route) => {
    if (route.request().method() === "OPTIONS") return route.fulfill({ status: 204, headers: CORS });
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      headers: CORS,
      body: JSON.stringify({
        access_token: "stub-access-token",
        token_type: "bearer",
        expires_in: 3600,
        refresh_token: "stub-refresh-token",
        user: { id: "00000000-0000-4000-8000-000000000001", email: "dup@example.test", aud: "authenticated", app_metadata: {}, user_metadata: {}, created_at: new Date().toISOString() },
      }),
    });
  });
  await page.route("https://www.freecacfp.com/api/auth/handoff", async (route) => {
    const method = route.request().method();
    if (method === "OPTIONS") return route.fulfill({ status: 204, headers: CORS });
    if (method === "GET") return route.fulfill({ status: 200, contentType: "application/json", headers: CORS, body: "{}" });
    handoffPosts.push(route.request().postDataJSON());
    const reply = handoffReplies.shift() ?? { status: 500, body: {} };
    await route.fulfill({ status: reply.status, contentType: "application/json", headers: CORS, body: JSON.stringify(reply.body) });
  });
  await page.route("https://www.freecacfp.com/auth/complete**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: "<html><body>complete</body></html>" }));
  return handoffPosts;
}

// Next.js keeps its own (empty) role=alert route announcer on every page, so pick the refusal by its text.
const refusalAlert = (page: Page) => page.getByRole("alert").filter({ hasText: "mobile number is already used" });

async function fillSignup(page: Page, mobile: string) {
  await page.goto("/signup");
  await page.getByLabel("Testing access code").fill("local-test-only");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("First name").fill("Dana");
  await page.getByLabel("Last name").fill("Directorson");
  await page.getByLabel("Email address").fill("dup@example.test");
  await page.getByLabel("Password", { exact: false }).first().fill("LocalPassword123!");
  await page.getByLabel("Your position").fill("Director");
  await page.getByLabel("Center / daycare name").fill("Sunshine Kids Academy");
  await page.getByLabel("Mobile phone number").fill(mobile);
}

test("a refused duplicate number is explained next to the number, keeps what was typed, and does not say the email has an account", async ({ page }) => {
  const posts = await stubServices(page, [{ status: 409, body: { code: "phone_in_use", error: REFUSAL } }]);
  await fillSignup(page, "(512) 555-0100");
  await page.getByRole("main").getByRole("button", { name: "Sign up free" }).click();

  await expect(refusalAlert(page)).toContainText("already used by another CACFP Free account");
  await expect(refusalAlert(page)).toContainText("did not create a new account");
  await expect(page.getByText("This mobile number is already used by another CACFP Free account.")).toBeVisible();
  await expect(page.getByText("This email is already associated with a CACFP Free account.")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Sign in instead" })).toHaveAttribute("href", "https://www.freecacfp.com/login");

  // Nothing the person typed was lost.
  await expect(page.getByLabel("First name")).toHaveValue("Dana");
  await expect(page.getByLabel("Email address")).toHaveValue("dup@example.test");
  await expect(page.getByLabel("Center / daycare name")).toHaveValue("Sunshine Kids Academy");
  await expect(page.getByLabel("Mobile phone number")).toHaveValue("(512) 555-0100");
  expect(posts).toHaveLength(1);
  expect((posts[0] as { mobile: string }).mobile).toBe("5125550100");
});

test("correcting the number and submitting again goes through to the app", async ({ page }) => {
  const posts = await stubServices(page, [
    { status: 409, body: { code: "phone_in_use", error: REFUSAL } },
    { status: 200, body: { session_token: "a", refresh_token: "b", path: "new" } },
  ]);
  await fillSignup(page, "(512) 555-0100");
  await page.getByRole("main").getByRole("button", { name: "Sign up free" }).click();
  await expect(refusalAlert(page)).toBeVisible();

  await page.getByLabel("Mobile phone number").fill("(512) 555-0199");
  await expect(refusalAlert(page), "editing the number clears the explanation").toHaveCount(0);
  await page.getByRole("main").getByRole("button", { name: "Sign up free" }).click();
  await expect(page.getByRole("status")).toContainText("You're all set!");
  await expect(page.getByRole("status")).toContainText("Your account is ready. Opening CACFP Free");
  await page.waitForURL("https://www.freecacfp.com/auth/complete**");
  expect(posts).toHaveLength(2);
  expect((posts[1] as { mobile: string }).mobile).toBe("5125550199");
});

test("the mobile field explains why a mobile number is needed and that reminders are optional", async ({ page }) => {
  await stubServices(page, []);
  await page.goto("/signup");
  await page.getByLabel("Testing access code").fill("local-test-only");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  const mobile = page.getByLabel("Mobile phone number");
  await expect(mobile).toHaveAttribute("aria-describedby", "signup-mobile-help");
  await expect(page.locator("#signup-mobile-help")).toContainText("secure sign-in links and optional meal reminders");
  await expect(page.locator("#signup-mobile-help")).toContainText("turn reminders off");
});

test("a different 409 (no code) still shows the existing account message, unchanged", async ({ page }) => {
  await stubServices(page, [{ status: 409, body: { error: "Email is already linked to a different ecosystem identity" } }]);
  await fillSignup(page, "(512) 555-0100");
  await page.getByRole("main").getByRole("button", { name: "Sign up free" }).click();
  await expect(page.getByText("This email is already associated with a CACFP Free account.")).toBeVisible();
  await expect(refusalAlert(page)).toHaveCount(0);
});

test("the explanation fits a phone screen without sideways scrolling", async ({ page }) => {
  await stubServices(page, [{ status: 409, body: { code: "phone_in_use", error: REFUSAL } }]);
  await fillSignup(page, "(512) 555-0100");
  await page.getByRole("main").getByRole("button", { name: "Sign up free" }).click();
  await expect(refusalAlert(page)).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
});
