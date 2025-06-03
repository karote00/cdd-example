import { decideToUndoRedo } from '@cdd-example/reactive-events'
import { InteractionActions, InteractionEvent } from '@cdd-example/utils'

export const UndoRedoHandlers = {
  [InteractionActions.INTERACTION_UNDOREDO]: (
    payload?: InteractionEvent['payload']
  ) => {
    decideToUndoRedo(payload.undoredo)
  }
}
