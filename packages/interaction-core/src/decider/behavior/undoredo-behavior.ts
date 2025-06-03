import { InteractionEvent, SystemContextSnapshot } from '@cdd-example/utils'
import { decideUndoRedoRules } from '../rules'

export const decideUndoRedoBehavior = (
  systemContextSnapshot: SystemContextSnapshot
): InteractionEvent => {
  return decideUndoRedoRules(systemContextSnapshot.key)
}
