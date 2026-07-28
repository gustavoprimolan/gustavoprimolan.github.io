# gustavoprimolan.github.io

Personal portfolio website for [Gustavo Primolan](https://github.com/gustavoprimolan).

**Live site:** [https://gustavoprimolan.github.io](https://gustavoprimolan.github.io)

---

## Technologies

This site is a static site built with modern web tooling. No runtime server is required after build.

| Technology | Role |
|------------|------|
| [Astro](https://astro.build/) 7 | Static site generator — pages, layouts, and build pipeline |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe configuration, scripts, and content schemas |
| HTML / CSS / JavaScript | Core web standards; minimal client-side JS for nav and animations |
| [MDX](https://mdxjs.com/) (`@astrojs/mdx`) | Blog posts with Markdown + optional JSX |
| [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) | Structured content for blog posts and accomplishments |
| [GitHub Actions](https://github.com/features/actions) | CI/CD — builds and deploys on every push |
| [GitHub Pages](https://pages.github.com/) | Free static hosting |

### Design & assets

- **Fonts:** [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts)
- **Profile photo:** `public/profile-picture.jpg`
- **Color palette:** Sky blue, forest green, and warm wood tones derived from the profile photo

### Requirements

- **Node.js** 22.12 or later (see `engines` in `package.json`)
- **npm** (comes with Node.js)

---

## Project structure

```text
/
├── public/                    # Static assets (images, favicon)
│   └── profile-picture.jpg
├── src/
│   ├── components/            # Reusable UI sections (Hero, About, etc.)
│   ├── content/
│   │   ├── blog/              # Blog posts (Markdown / MDX)
│   │   └── accomplishments/   # Certificates & milestones
│   ├── content.config.ts      # Content collection schemas
│   ├── data/site.ts           # Profile info, skills, projects
│   ├── layouts/               # Page layouts
│   ├── pages/                 # Routes (index, /blog, /accomplishments)
│   ├── scripts/main.ts        # Client-side interactions
│   └── styles/global.css      # Global styles
├── .github/workflows/deploy.yml  # GitHub Pages deployment
├── astro.config.mjs
└── package.json
```

### Routes

| URL | Description |
|-----|-------------|
| `/` | Portfolio homepage |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/accomplishments` | Full list of certificates and milestones |

---

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server (with hot reload):

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Other commands:

| Command | Action |
|---------|--------|
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Serve the production build locally |

---

## Publishing with GitHub Pages

This repository is named `gustavoprimolan.github.io`, which is a **user site**. GitHub automatically serves it at the root URL below.

### Live URL

Once deployed, the site is available at:

**[https://gustavoprimolan.github.io](https://gustavoprimolan.github.io)**

> User/org sites use `https://<username>.github.io`. Project sites would use `https://<username>.github.io/<repo-name>` instead — that does **not** apply here.

### One-time GitHub setup

1. **Push this repository to GitHub** (if you have not already):

   ```bash
   git add .
   git commit -m "Add Astro portfolio site"
   git push -u origin master
   ```

   Use `main` instead of `master` if that is your default branch.

2. **Enable GitHub Pages** in the repository on GitHub:
   - Go to **Settings → Pages**
   - Under **Build and deployment → Source**, select **GitHub Actions**

3. **Trigger the first deploy** by pushing to `main` or `master`, or manually:
   - Go to **Actions → Deploy to GitHub Pages → Run workflow**

### How deployment works

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push to `main` or `master`:

1. Checks out the code
2. Installs Node.js 22 and runs `npm ci`
3. Runs `npm run build` (output goes to `dist/`)
4. Uploads `dist/` to GitHub Pages

You can monitor progress under the **Actions** tab. After a successful run, changes are live within a minute or two.

### Troubleshooting

| Issue | What to check |
|-------|----------------|
| Site shows 404 | Pages source is set to **GitHub Actions**, not “Deploy from a branch” |
| Build fails in Actions | Open the failed workflow run and read the logs; often a Node or dependency issue |
| Changes not visible | Hard-refresh the browser (`Ctrl+Shift+R`) or wait for CDN cache |
| Wrong URL in metadata | `site` in `astro.config.mjs` should be `https://gustavoprimolan.github.io` |

---

## Adding content

### Blog post

Create a file in `src/content/blog/`, for example `my-post.md`:

```markdown
---
title: My first post
description: Short summary for the listing page
pubDate: 2026-07-28
tags: ['engineering']
---

Your content here...
```

Set `draft: false` to publish. Draft posts are excluded from the site.

### Accomplishment

Create a file in `src/content/accomplishments/`, for example `my-cert.md`:

```markdown
---
title: Certificate name
issuer: Issuing organization
date: 2024-01-15
category: tech
url: https://example.com/verify
credentialId: "ABC-123"
summary: Optional short description.
---
```

Categories: `tech`, `education`, `professional`, `personal`, `language`, `other`.

### Profile & projects

Edit [`src/data/site.ts`](src/data/site.ts) for name, links, skills, and featured projects.

---

## License

Personal portfolio — all rights reserved unless stated otherwise.
