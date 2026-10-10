import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { URL } from 'node:url'

for (const [file, buildCommand, outputDirectory] of [
  ['vercel.json', 'turbo run react:build', 'dist'],
  ['docs-site/vercel.json', 'yarn build', 'build']
]) {
  test(`${file} disables Git deployment while preserving manual build settings`, () => {
    const config = JSON.parse(
      readFileSync(new URL(`../../${file}`, import.meta.url), 'utf8')
    )
    assert.equal(config.git.deploymentEnabled, false)
    assert.equal(config.buildCommand, buildCommand)
    assert.equal(config.outputDirectory, outputDirectory)
    assert.equal(
      config.installCommand,
      'corepack enable && corepack prepare yarn@4.3.1 --activate && yarn set version 4.3.1 && yarn install --immutable'
    )
  })
}
