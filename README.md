# CACFP Free — Marketing Site

Next.js marketing site for [CACFPFree.com](https://cacfpfree.com), operated by CACFP Solutions.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
npm run build   # Generates static export in /out
```

The site is deployed via Netlify. Push to `main` triggers an automatic deploy.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/time-reports` | Time Reports product page |
| `/receipts` | Receipts product page |
| `/software` | CACFP Software (coming soon) + waitlist |
| `/pricing` | Pricing |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/contact` | Contact form |

## Netlify Forms Setup

The site uses [Netlify Forms](https://docs.netlify.com/forms/setup/) for form submissions. Two forms are configured:

### Forms in use

| Form name | Location | Purpose |
|---|---|---|
| `contact` | `/contact` | General contact form |
| `waitlist` | `/software` (waitlist section) | CACFP Software launch waitlist |

### Setting up email notifications (required after first deploy)

After Netlify processes a deploy that includes these forms, do the following for **each form**:

1. Go to [Netlify Dashboard](https://app.netlify.com) → your site → **Forms**
2. You should see both `contact` and `waitlist` forms listed
3. Click on a form → **Form notifications** → **Add notification** → **Email notification**
4. Enter: `support@cacfpsolutions.com`
5. Click **Save**
6. Repeat for the other form

Once configured, every form submission will send an email to `support@cacfpsolutions.com`. Submissions are also stored in the Netlify dashboard under Forms.

### Troubleshooting forms

If forms don't appear in the Netlify dashboard after deploy:
- Netlify detects forms by scanning the static HTML for `data-netlify="true"` during build
- Both forms include a hidden static HTML version for Netlify detection (in addition to the interactive React form)
- If still not detected, trigger a fresh deploy from the Netlify dashboard

## SEO

- **sitemap.xml**: `public/sitemap.xml` — lists all pages
- **robots.txt**: `public/robots.txt` — allows all crawlers
- **Structured data**: Organization JSON-LD on the homepage
- **Favicons**: SVG favicon in `public/favicon.svg` and `public/apple-touch-icon.svg`
  - For production, generate proper `.ico` and `.png` versions at [realfavicongenerator.net](https://realfavicongenerator.net)

## Brand Colors

| Name | Hex |
|---|---|
| Brand Purple | `#48195d` |
| Accent Orange | `#E8734A` |
| Background | `#fafafc` |
| Dark Text | `#1a1a2e` |
| Muted Text | `#6b7280` |
| Border Gray | `#e5e7eb` |
