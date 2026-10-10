# CDD Demo

Open <a href="https://cdd-demo.pages.dev" target="_blank" rel="noopener noreferrer">CDD Demo</a>
or read the <a href="https://cdd-docs.pages.dev" target="_blank" rel="noopener noreferrer">CDD documentation</a>.

The demo is a Vite/React application with a browser-rendered canvas. It does not
require a backend, server functions, AI credentials, or a database service.
Scenes and theme preferences are stored in localStorage on each hostname.
The Cloudflare copy cannot access data saved under the previous hostname.

## Local development

From the repository root, use the Node.js and Yarn versions in `package.json`:

```bash
yarn install --immutable
yarn dev:all
```

See the root README for the available tools and keyboard shortcuts.

## Build and verify

```bash
yarn gen:turbo
yarn test:deployment
yarn react:build
yarn test:build:demo
yarn lint:ci
yarn test:ci
```

The existing build produces the static site in the repository's `dist/`
directory. The Vercel plugin also prepares Vercel output separately; only
`dist/` is needed by Cloudflare. The artifact test checks the entry page, local
asset references, manifest icons, and absence of server functions and secrets.

## Manual Cloudflare deployment

The `cdd-demo` Pages project uses Direct Upload, with no Git integration.

1. Run the build and verification commands above.
2. Open **Workers & Pages → cdd-demo → Create deployment** in Cloudflare.
3. Choose **Production** and upload `dist/`, or a ZIP of its contents. Keep
   `index.html` at the upload root. Do not upload the repository, `.vercel/`,
   credentials, or local configuration.
4. Select **Save and deploy** and wait for success.
5. Open the public demo. Create a rectangle, select it, change its properties,
   and check undo/redo and reload persistence. On a fresh browser scene, use
   **RESET** once if the rectangle tool does not respond, as described in the
   root README.

Pushes and merges validate the code only. Every publication requires a separate
manual upload. The existing Vercel project and its build settings remain intact;
keep **Settings → Git** disconnected and `git.deploymentEnabled` set to `false`.
Manual Vercel deployment remains available subject to the account's limits.
