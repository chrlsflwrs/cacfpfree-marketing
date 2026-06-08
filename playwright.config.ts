import { defineConfig, devices } from "@playwright/test";

// The e2e suite runs against the real static export served Netlify-style.
// `webServer` builds `out/` and serves it on PORT (default 8899). Set SKIP_BUILD=1
// to reuse an existing build for faster local iteration.
const PORT = Number(process.env.PORT) || 8899;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      // Real iPhone 14 metrics (390x664 viewport, DPR 3, mobile + touch).
      // Forced onto Chromium so we get reliable mobile emulation + service
      // worker support without a second browser download.
      name: "iphone-14",
      use: { ...devices["iPhone 14"], defaultBrowserType: "chromium" },
    },
    {
      name: "desktop-chrome",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } },
    },
  ],
  webServer: {
    command: "node tests/build-and-serve.mjs",
    url: baseURL,
    timeout: 240_000,
    reuseExistingServer: !process.env.CI,
  },
});
