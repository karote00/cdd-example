import { PrimaryToolType, MouseSnapshot, KeySnapshot } from '@cdd-example/utils'
import {
  emitSwitchPrimaryTool,
  requestCurrentPrimaryTool,
  switchPrimaryTool,
  updateKeyState,
  updateMouseStata
} from '@cdd-example/reactive-events'
import { SystemContextAPIs } from '../types'

export const createSystemContextAPIs = (): SystemContextAPIs => {
  return {
    async getCurrentPrimaryTool() {
      return await requestCurrentPrimaryTool()
    },
    switchPrimaryTool(tool: PrimaryToolType) {
      switchPrimaryTool(tool)
      emitSwitchPrimaryTool()
    },
    updateMouseState(mouseSnapshot: MouseSnapshot) {
      updateMouseStata(mouseSnapshot)
    },
    updateKeyState(keySnapshot: KeySnapshot) {
      updateKeyState(keySnapshot)
    }
  }
}
