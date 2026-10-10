import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { fileURLToPath, URL } from 'node:url'

const root = fileURLToPath(new URL('../../', import.meta.url))

test('tracked public documentation and source do not link to retired Vercel hosts', () => {
  const files = execFileSync('git', ['ls-files', '-z'], { cwd: root })
    .toString()
    .split('\0')
    .filter((file) => /\.(md|mdx|html|[cm]?[jt]sx?|json)$/.test(file))
  const stale = files.filter((file) =>
    /https?:\/\/cdd-(?:docs|demo)\.vercel\.app\b/.test(
      readFileSync(new URL(`../../${file}`, import.meta.url), 'utf8')
    )
  )
  assert.deepEqual(stale, [])
})

test('the root README exposes both Cloudflare sites as safe external links', () => {
  const readme = readFileSync(
    new URL('../../README.md', import.meta.url),
    'utf8'
  )
  for (const project of ['cdd-docs', 'cdd-demo']) {
    const anchor = readme.match(
      new RegExp(`<a\\b[^>]*href="https://${project}\\.pages\\.dev/?"[^>]*>`)
    )?.[0]
    assert.ok(anchor, `Missing ${project} entry`)
    assert.match(anchor, /target="_blank"/)
    assert.match(anchor, /rel="noopener noreferrer"/)
  }
})
