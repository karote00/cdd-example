import { MouseSnapshot } from '@cdd-example/utils'
import { HandlerDeps, MouseStateAPIs } from '../types'

export const createMouseStateAPIs = (
  mouseState: HandlerDeps['mouseState']
): MouseStateAPIs => ({
  updateMouseState(mouseSnapshot: MouseSnapshot) {
    mouseState.set(mouseSnapshot)
  },
  getMouseState() {
    return mouseState.current
  }
})
