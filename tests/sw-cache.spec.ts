import { test, expect } from "@playwright/test";

// Regression test for the real root cause of the "unstyled /contact on mobile"
// report: the service worker was cache-first for navigations and precached HTML.
// After a redeploy the cached HTML pointed at a purged, content-hashed CSS file,
// so the page rendered with no styles. The fix makes navigations network-first.
//
// The Netlify-emulation test server injects a mutable <meta name="deploy-token">
// and exposes /__set_deploy?token=... to simulate a redeploy. We verify that
// after a redeploy a reload serves the FRESH page (not a stale cached one).
//
// Runs once (on the iphone-14 project) — the SW behavior is engine-independent
// and the test mutates shared server state, so we keep it single-pathed.

test.describe.configure({ mode: "serial" });

test.afterEach(async ({ request }) => {
  await request.get("/__set_deploy?token=A"); // reset shared server state
});

test("service worker serves fresh HTML after a redeploy (no stale unstyled page)", async ({
  page,
  request,
}, testInfo) => {
  test.skip(testInfo.project.name !== "iphone-14", "run once; behavior is engine-independent");

  await request.get("/__set_deploy?token=A");
  await page.goto("/contact", { waitUntil: "load" });

  // Wait for the service worker to install and take control of this client.
  await page.waitForFunction(() => navigator.serviceWorker?.controller != null, null, {
    timeout: 20_000,
  });
  expect(await page.evaluate(() => navigator.serviceWorker?.controller != null)).toBe(true);
  expect(
    await page.evaluate(
      () => document.querySelector('meta[name="deploy-token"]')?.getAttribute("content")
    )
  ).toBe("A");

  // Simulate a new deploy, then revisit the page the way a returning user would.
  await request.get("/__set_deploy?token=B");
  await page.reload({ waitUntil: "load" });

  // Network-first navigation must surface the new deploy, NOT a stale cached copy.
  const token = await page.evaluate(
    () => document.querySelector('meta[name="deploy-token"]')?.getAttribute("content")
  );
  expect(token, "stale cache-first SW would return 'A' and break styling").toBe("B");

  // And the freshly served page is fully styled (CSS applied through the SW).
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(250, 250, 252)");
  await expect(page.locator("header").first()).toHaveCSS("position", "sticky");
});

test("service worker does not break styling on a normal repeat visit", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "iphone-14", "run once");

  await page.goto("/contact", { waitUntil: "load" });
  await page.waitForFunction(() => navigator.serviceWorker?.controller != null, null, {
    timeout: 20_000,
  });
  // Reload now that the SW controls the page — styles must still apply.
  await page.reload({ waitUntil: "load" });
  await expect(page.locator("body")).toHaveCSS("background-color", "rgb(250, 250, 252)");
  await expect(page.getByRole("heading", { level: 1, name: "Get in touch" })).toBeVisible();
});
