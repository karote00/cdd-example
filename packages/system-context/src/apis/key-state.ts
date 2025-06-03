import { KeySnapshot } from '@cdd-example/utils'
import { HandlerDeps, KeyStateAPIs } from '../types'

export const createKeyStateAPIs = (
  keyState: HandlerDeps['keyState']
): KeyStateAPIs => ({
  updateKeyState(keySnapshot: KeySnapshot) {
    keyState.set(keySnapshot)
  },
  getKeyState() {
    return keyState.current
  }
})
