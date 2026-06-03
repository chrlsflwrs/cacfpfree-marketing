// Contract tests for the two marketing forms after migrating off Netlify Forms
// to the TDR app API. Uses Node's built-in test runner (no new dependencies):
//   node --test tests/forms.test.mjs
//
// These assert the source contract of each form component plus a clean build.
// The live render + mocked-success/mocked-failure message rendering was also
// verified end-to-end against the running dev server during development.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { execFileSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contactSrc = readFileSync(join(root, "src/components/ContactForm.tsx"), "utf8");
const waitlistSrc = readFileSync(join(root, "src/components/SoftwareWaitlist.tsx"), "utf8");
const contactPageSrc = readFileSync(join(root, "src/app/contact/page.tsx"), "utf8");

const CONTACT_URL = "https://cacfp-free-tdr.vercel.app/api/forms/contact";
const WAITLIST_URL = "https://cacfp-free-tdr.vercel.app/api/forms/waitlist";

// 1. ContactForm submits to the TDR API endpoint with a JSON body.
test("ContactForm fetches the TDR contact API endpoint", () => {
  assert.ok(contactSrc.includes(CONTACT_URL), "contact API URL present");
  assert.ok(/fetch\(CONTACT_API_URL/.test(contactSrc), "fetch targets the TDR URL constant");
  assert.match(contactSrc, /"Content-Type":\s*"application\/json"/);
  assert.match(contactSrc, /JSON\.stringify\(\{\s*name,\s*email,\s*app,\s*message\s*\}\)/);
});

// 2. SoftwareWaitlist submits to the TDR API endpoint with the required body.
test("SoftwareWaitlist fetches the TDR waitlist API endpoint", () => {
  assert.ok(waitlistSrc.includes(WAITLIST_URL), "waitlist API URL present");
  assert.ok(/fetch\(WAITLIST_API_URL/.test(waitlistSrc), "fetch targets the TDR URL constant");
  assert.match(waitlistSrc, /"Content-Type":\s*"application\/json"/);
  assert.match(waitlistSrc, /JSON\.stringify\(\{\s*name,\s*email,\s*interest:\s*"CACFP Software"\s*\}\)/);
});

// 3. Success path: on { success: true } each form shows its existing success message.
test("forms show their success message on API success", () => {
  // Success is gated on res.ok && data.success, which flips the existing submitted state.
  assert.match(contactSrc, /res\.ok\s*&&\s*data\?\.success/);
  assert.match(contactSrc, /setSubmitted\(true\)/);
  assert.ok(contactSrc.includes("Message sent!"), "contact keeps its success copy");

  assert.match(waitlistSrc, /res\.ok\s*&&\s*data\?\.success/);
  assert.match(waitlistSrc, /setSubmitted\(true\)/);
  assert.ok(waitlistSrc.includes("You&apos;re on the list!"), "waitlist keeps its success copy");
});

// 4. Failure path: on a bad response or network error each form shows its error message.
test("forms show their error message on API failure", () => {
  assert.ok(
    contactSrc.includes("Something went wrong. Please email us directly at support@cacfpfree.com"),
    "contact error copy"
  );
  assert.ok(
    waitlistSrc.includes("Something went wrong. Please try again or email us at support@cacfpfree.com"),
    "waitlist error copy"
  );
  // Both must set the error in the catch block (network error) and the else branch (bad response).
  assert.ok((contactSrc.match(/setSubmitError\(/g) || []).length >= 2);
  assert.ok((waitlistSrc.match(/setSubmitError\(/g) || []).length >= 2);
});

// 5. No Netlify Forms references remain in either component (or the contact page).
test("no Netlify Forms references remain", () => {
  for (const [label, src] of [
    ["ContactForm.tsx", contactSrc],
    ["SoftwareWaitlist.tsx", waitlistSrc],
    ["contact/page.tsx", contactPageSrc],
  ]) {
    assert.ok(!/data-netlify/i.test(src), `${label} has no data-netlify`);
    assert.ok(!/form-name/i.test(src), `${label} has no form-name`);
    assert.ok(!/fetch\(["']\/["']/.test(src), `${label} has no fetch to "/"`);
  }
});

// 6. The static export build succeeds (exit code 0).
test("npm run build succeeds", () => {
  execFileSync("npm", ["run", "build"], {
    cwd: root,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
});
