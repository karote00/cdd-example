import { subscribeToDecideToUndoRedo } from '@cdd-example/reactive-events'
import { UNDO } from '@cdd-example/utils'
import { UndoActionAPIs } from '../../types'

export const initUndoRedoHandlers = (apis: UndoActionAPIs) => {
  subscribeToDecideToUndoRedo(({ payload }) => {
    switch (payload.undoredo) {
      case UNDO.UNDO:
        apis.undo()
        break
      case UNDO.REDO:
        apis.redo()
        break
    }
  })
}
