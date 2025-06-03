import { redo, undo } from '@cdd-example/reactive-events'
import { UndoActionAPIs } from '../types'

export const createUndoAPIs = (): UndoActionAPIs => {
  return {
    undo() {
      undo()
    },
    redo() {
      redo()
    }
  }
}
