import { InteractionEvent, SystemContextSnapshot } from '@cdd-example/utils'
import { decideFromSelectRules, decideFromMoveRules } from '../rules'

export const decideSelectBehavior = (
  systemContextSnapshot: SystemContextSnapshot
): InteractionEvent | null => {
  const { mouse, target } = systemContextSnapshot

  if (mouse.dragging && target.selectedElementIds.length > 0) {
    return decideFromMoveRules(systemContextSnapshot)
  }

  return decideFromSelectRules(systemContextSnapshot)
}
