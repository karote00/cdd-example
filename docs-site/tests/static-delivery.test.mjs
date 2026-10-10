import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath, URL } from 'node:url'

const buildDirectory = fileURLToPath(new URL('../build/', import.meta.url))
const productionOrigin = 'https://cdd-docs.pages.dev'
const htmlFiles = readdirSync(buildDirectory, { recursive: true }).filter(
  (file) => file.endsWith('.html')
)

test('all generated pages use the published Cloudflare origin', () => {
  assert.ok(htmlFiles.length > 1, 'Build the complete documentation site first')
  for (const file of htmlFiles) {
    const html = readFileSync(join(buildDirectory, file), 'utf8')
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)
    assert.ok(canonical, `Missing canonical URL: ${file}`)
    assert.equal(new URL(canonical[1]).origin, productionOrigin, file)
  }
  const sitemap = readFileSync(join(buildDirectory, 'sitemap.xml'), 'utf8')
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  assert.ok(locations.length > 1)
  for (const [, location] of locations) {
    assert.equal(new URL(location).origin, productionOrigin)
  }
})

test('the upload includes entry pages, a real 404 page, and referenced assets', () => {
  for (const file of [
    'index.html',
    '404.html',
    'docs/concept/what-is-cdd/index.html'
  ]) {
    assert.ok(existsSync(join(buildDirectory, file)), file)
  }
  for (const file of htmlFiles) {
    const html = readFileSync(join(buildDirectory, file), 'utf8')
    const assets = html.matchAll(
      /(?:src|href)="(\/(?:assets|img)\/[^"?#]+)[^"]*"/g
    )
    for (const [, asset] of assets) {
      assert.ok(
        existsSync(join(buildDirectory, decodeURI(asset))),
        `${file}: ${asset}`
      )
    }
  }
})
