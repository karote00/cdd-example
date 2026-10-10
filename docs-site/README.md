# CDD Documentation Website

The public site is <a href="https://cdd-docs.pages.dev" target="_blank" rel="noopener noreferrer">cdd-docs.pages.dev</a>.
It is a static Docusaurus site deployed manually to the Cloudflare Pages
`cdd-docs` project using Direct Upload. There is no Cloudflare Git integration
or automatic deployment on push or merge.

## Local development

Run these commands from the repository root, using the Node.js and Yarn versions
declared in `package.json`:

```bash
yarn install --immutable
yarn workspace docs-site dev:docs
```

## Build and verify

```bash
yarn workspace docs-site typecheck
yarn workspace docs-site build
yarn workspace docs-site test:build
```

The build writes static HTML and assets to `docs-site/build`. The artifact tests
check canonical URLs, sitemap URLs, entry pages, the 404 page, and referenced
static assets. Docusaurus also checks internal links during the build.

## Manual Cloudflare deployment

1. Complete the build and verification commands above.
2. In Cloudflare, open **Workers & Pages → cdd-docs → Create deployment**.
3. Choose **Production** and upload `docs-site/build` as a folder, or a ZIP of
   its contents. `index.html` must be at the upload root, not inside a `build`
   parent folder. Upload only the generated site, never the repository or secrets.
4. Select **Save and deploy** and wait for the successful deployment status.
5. Open the public site and `/docs/concept/what-is-cdd` directly, follow links
   in both the Concept and Example sections, and check an unknown URL returns
   the site's 404 page.

Each update requires this manual action. Do not connect a Git repository or add
push/merge deployment triggers. The Docusaurus `deploy` command targets GitHub
Pages and is not used for this Cloudflare project.

`docusaurus.config.ts` owns the public origin used by canonical URLs and the
sitemap. If the production domain changes, update it and the artifact test's
expected origin before rebuilding and uploading.
