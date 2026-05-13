# Prior Patent Search — static marketing site

English marketing site for **Prior Patent Search**, hosted on **GitHub Pages** with custom domain **priorpatents.com** (and **www**).

Public contact: **mailto:contact@priorpatents.com**

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` and verify layout, anchors, and the mailto link.

## Deploy (GitHub Pages)

1. Push this repository to GitHub (default branch, e.g. `main`).
2. In the repo: **Settings → Pages → Build and deployment**
   - **Source**: “Deploy from a branch” (or GitHub Actions if you later add a build).
   - **Branch**: your default branch, **folder**: `/ (root)`.
3. Confirm **`CNAME`** exists at the repo root with a single line:

   ```text
   priorpatents.com
   ```

4. After the first publish, set the **custom domain** in Pages settings to match your DNS plan (see below). Enable **Enforce HTTPS** once DNS and certificates are ready.

Official reference: [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Apex + `www` (both URLs)

You want **https://priorpatents.com** and **https://www.priorpatents.com** to serve the same site.

- **DNS (e.g. Cloudflare)**  
  - **Apex** `priorpatents.com`: add the **A** (and **AAAA** if you use IPv6) records GitHub documents for Pages.  
  - **`www`**: add a **CNAME** from `www` to your GitHub Pages host (for a **project site**, typically `<user>.github.io` or `<org>.github.io`; for a **user site**, follow the same doc section for your setup).

- **GitHub Pages UI**  
  Add both hostnames as needed and choose a **primary** domain; GitHub can redirect the other to HTTPS on the primary (behavior is described in the doc above).

Re-check the doc’s current IP list before pasting records; GitHub may change them.

## Cloudflare: Pages + Email Routing (MX)

If DNS is on **Cloudflare** and you use **Email Routing** for `contact@priorpatents.com`:

- Keep **MX** records required by Email Routing.
- Add **separate** records for the **website** (apex A/AAAA and `www` CNAME to Pages).  
  **MX is for mail; A/CNAME is for the web**—they coexist on the same zone.

## Updating the site

Edit `index.html`, `css/styles.css`, or `js/main.js`, then commit and push. Pages rebuilds on push.

## Repository layout

```text
.
├── CNAME                 # custom apex domain for GitHub Pages
├── .nojekyll             # skip Jekyll processing (static HTML)
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```
