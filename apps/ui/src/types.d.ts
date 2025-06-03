import Core from '@cdd-example/core'

// For local debug
declare global {
  interface Window {
    __Core__: Core
  }
}
