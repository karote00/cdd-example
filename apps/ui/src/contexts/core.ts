import core from '@cdd-example/core'

// For debug
if (process.env.NODE_ENV === 'development') {
  window.__Core__ = core
}

export default core
