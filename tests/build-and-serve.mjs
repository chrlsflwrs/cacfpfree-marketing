// Used by Playwright's `webServer`. Builds the static export (unless SKIP_BUILD=1)
// and serves `out/` exactly the way Netlify does (see netlify-static-server.mjs),
// so the e2e tests exercise the real production output — service worker included.
import { execFileSync } from "node:child_process";
import { startServer } from "./netlify-static-server.mjs";

const port = Number(process.env.PORT) || 8899;

if (process.env.SKIP_BUILD !== "1") {
  execFileSync("npx", ["next", "build"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
}

await startServer(port);
console.log(`[test] serving out/ on http://localhost:${port}`);
