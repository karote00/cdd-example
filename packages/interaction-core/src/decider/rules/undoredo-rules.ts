import {
  InteractionActions,
  InteractionEvent,
  KeySnapshot,
  UNDO
} from '@cdd-example/utils'

export const decideUndoRedoRules = (
  keySnapshot: KeySnapshot
): InteractionEvent => {
  const interaction: InteractionEvent = {
    type: InteractionActions.INTERACTION_UNDOREDO,
    payload: {
      undoredo: keySnapshot.shift ? UNDO.REDO : UNDO.UNDO
    }
  }

  return interaction
}
