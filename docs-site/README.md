# CDD Documentation Website

The additional Cloudflare site is <a href="https://cdd-docs.pages.dev" target="_blank" rel="noopener noreferrer">cdd-docs.pages.dev</a>.
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

## Existing deployment

The existing `build` and `deploy` commands and `docusaurus.config.ts` retain
their existing behavior. `yarn workspace docs-site build`
still writes to `docs-site/build`, the directory used by Vercel. The original
configuration's placeholder production origin is deliberately unchanged.
The existing `deploy` command remains the Docusaurus GitHub Pages command.

The Demo and documentation Vercel configurations disable Git-triggered
deployment with `git.deploymentEnabled: false`. Existing Vercel projects,
install/build commands, and output directories are preserved for manual
deployment through Vercel. This does not remove existing deployments or resolve
account-level deployment restrictions. `yarn test:deployment` guards both
configurations in CI; ordinary push and PR validation does not publish a site.

Keep both Vercel projects disconnected from Git in **Settings → Git** as well.
This stops provider-side Git event handling, including account-blocked commit
statuses that can appear before branch configuration is evaluated. Existing
deployments can still be redeployed manually; new local builds can be published
with Vercel CLI linked to the existing project. Reconnecting Git would restore
that automatic event entry point.

## Build and verify the Cloudflare copy

```bash
yarn workspace docs-site typecheck
yarn workspace docs-site build
yarn workspace docs-site build:cloudflare
yarn workspace docs-site test:build:cloudflare
```

The additional build uses `docusaurus.cloudflare.config.ts` and writes static
HTML and assets to `docs-site/build-cloudflare`. It shares the same content and
theme while overriding only the public origin. The artifact tests verify the
original build keeps its origin, and check Cloudflare canonical URLs, sitemap
URLs, entry pages, the 404 page, and referenced static assets. Docusaurus also checks internal links during the build.

## Manual Cloudflare deployment

1. Complete the build and verification commands above.
2. In Cloudflare, open **Workers & Pages → cdd-docs → Create deployment**.
3. Choose **Production** and upload `docs-site/build-cloudflare` as a folder, or a ZIP of
   its contents. `index.html` must be at the upload root, not inside a `build-cloudflare`
   parent folder. Upload only the generated site, never the repository or secrets.
4. Select **Save and deploy** and wait for the successful deployment status.
5. Open the public site and `/docs/concept/what-is-cdd` directly, follow links
   in both the Concept and Example sections, and check an unknown URL returns
   the site's 404 page.

Each update requires this manual action. Do not connect a Git repository or add
push/merge deployment triggers. The Docusaurus `deploy` command targets GitHub
Pages and is not used for this Cloudflare project.

`docusaurus.cloudflare.config.ts` owns the Cloudflare public origin used by canonical URLs and the
sitemap. If the Cloudflare production domain changes, update it and the artifact test's
expected origin before rebuilding and uploading.
