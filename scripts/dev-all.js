import { exec } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function getPackages() {
  const packagesDir = path.resolve(__dirname, '../packages')
  const dirs = await fs.readdir(packagesDir, { withFileTypes: true })
  const packageDirs = dirs
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

  return packageDirs.map((pkgName) => ({
    dir: path.join('packages', pkgName),
    cmd: 'yarn dev'
  }))
}

/**
 * Run a shell command in a given working directory
 * @param {string} cmd Command to execute
 * @param {string} cwd Working directory
 * @returns {Promise<void>}
 */
function runCommand(cmd, cwd) {
  return new Promise((resolve, reject) => {
    console.log(`Starting "${cmd}" in ${cwd} ...`)

    const proc = exec(cmd, { cwd })

    proc.stdout.on('data', (data) => {
      process.stdout.write(`[${path.basename(cwd)}] ${data}`)
    })

    proc.stderr.on('data', (data) => {
      process.stderr.write(`[${path.basename(cwd)} ERROR] ${data}`)
    })

    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`Finished "${cmd}" in ${cwd}`)
        resolve()
      } else {
        reject(new Error(`Command failed with code ${code}: ${cmd} at ${cwd}`))
      }
    })
  })
}

/**
 * Run all dev scripts in parallel for listed packages + ui app
 */
async function runAll() {
  try {
    const pkgs = await getPackages()

    pkgs.push({
      dir: 'apps/ui',
      cmd: 'yarn react:start'
    })

    await Promise.all(
      pkgs.map(({ dir, cmd }) => {
        return runCommand(cmd, path.resolve(__dirname, '../' + dir))
      })
    )
  } catch (err) {
    console.error(err)
  }
}

runAll()
