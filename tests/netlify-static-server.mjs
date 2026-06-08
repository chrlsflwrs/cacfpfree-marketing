// Minimal static file server that emulates how Netlify serves this site's
// `out/` static export, including the rules from netlify.toml:
//   - asset (real file) requests take precedence over redirects
//   - "pretty URLs": /contact resolves to /contact.html
//   - SPA fallback: /*  ->  /index.html  (status 200) when nothing else matches
//
// This lets us reproduce the *deployed* behavior locally (the dev server does
// not), so Playwright can test the page exactly as a mobile visitor sees it.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..", "out");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
};

async function isFile(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}

// Resolve a request path to an on-disk file using Netlify-like precedence.
async function resolve(pathname) {
  const clean = decodeURIComponent(pathname.split("?")[0]);
  const candidates = [];
  // 1. exact file
  candidates.push(join(root, clean));
  // 2. pretty URL: /contact -> /contact.html
  if (!extname(clean)) candidates.push(join(root, clean + ".html"));
  // 3. directory index
  candidates.push(join(root, clean, "index.html"));
  for (const c of candidates) {
    if (await isFile(c)) return c;
  }
  // 4. SPA fallback from netlify.toml: /* -> /index.html 200
  return join(root, "index.html");
}

export function startServer(port = 0) {
  // A mutable "deploy token" injected into every HTML response. Tests flip it to
  // simulate a redeploy, then verify the service worker serves the *fresh* page
  // (network-first) rather than a stale cached one.
  const state = { token: "A" };

  const server = createServer(async (req, res) => {
    try {
      const url = req.url || "/";
      // Test hook to simulate a new deploy.
      if (url.startsWith("/__set_deploy")) {
        state.token = new URL(url, "http://x").searchParams.get("token") || "A";
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("ok:" + state.token);
        return;
      }
      const file = await resolve(url);
      const ext = extname(file);
      let body = await readFile(file);
      const headers = {
        "Content-Type": MIME[ext] || "application/octet-stream",
        // Mirror Netlify: SW script and HTML are always revalidated.
        "Cache-Control": "no-cache",
      };
      if (ext === ".html") {
        body = Buffer.from(
          body
            .toString("utf8")
            .replace("<head>", `<head><meta name="deploy-token" content="${state.token}">`)
        );
      }
      res.writeHead(200, headers);
      res.end(body);
    } catch (err) {
      res.writeHead(500);
      res.end("server error: " + err.message);
    }
  });
  return new Promise((resolvePromise) => {
    server.listen(port, () => {
      resolvePromise({
        server,
        port: server.address().port,
        setDeployToken: (t) => {
          state.token = t;
        },
      });
    });
  });
}

// Allow running standalone:  node tests/netlify-static-server.mjs 8888
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.argv[2]) || 8888;
  startServer(port).then(({ port }) =>
    console.log(`Netlify-emulation server on http://localhost:${port}`)
  );
}
