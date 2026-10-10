import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import test from 'node:test'
import { URL } from 'node:url'

const output = new URL('../../dist/', import.meta.url)

test('the demo has a static entry point with all referenced local assets', () => {
  const html = readFileSync(new URL('index.html', output), 'utf8')
  assert.match(html, /<div id="root"><\/div>/)
  assert.match(html, /<script\b[^>]*type="module"[^>]*src="\/assets\//)
  const references = [...html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)]
  assert.ok(references.length > 0)
  for (const [, path] of references) {
    assert.ok(existsSync(new URL(`.${path}`, output)), `Missing ${path}`)
  }
  const manifest = JSON.parse(
    readFileSync(new URL('manifest.json', output), 'utf8')
  )
  for (const icon of manifest.icons) {
    assert.ok(existsSync(new URL(icon.src, output)), `Missing ${icon.src}`)
  }
})

test('the upload contains only static files without credentials or server functions', () => {
  const files = readdirSync(output, { recursive: true })
  assert.ok(files.some((file) => /assets[/\\].*\.js$/.test(file)))
  assert.deepEqual(
    files.filter((file) =>
      /(^|[/\\])(?:\.env(?:\..*)?|\.git|\.vercel|functions|_worker\.js)([/\\]|$)/.test(
        file
      )
    ),
    []
  )
})
