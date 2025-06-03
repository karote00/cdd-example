import * as Y from 'yjs'
import type { SceneTreeYjsChange, SelectionYjsChange } from '@cdd-example/utils'
import type { UpdateTransactionEvent } from '@cdd-example/reactive-events'
import DataTransact from './data-transact'
import { sceneTreeChanges, elementSelectionChanges } from './registry'

class Factory {
  sceneTreeMap: Y.Array<SceneTreeYjsChange> = sceneTreeChanges
  elementSelectionMap: Y.Array<SelectionYjsChange> = elementSelectionChanges
  transact: DataTransact = new DataTransact()

  startTransaction() {
    this.transact.start()
  }

  updateTransaction(event: UpdateTransactionEvent) {
    this.transact.update(event)
  }

  endTransaction() {
    this.transact.end()
  }

  undo() {
    this.transact.undo()
  }

  redo() {
    this.transact.redo()
  }
}

const factory = new Factory()
export default factory

export { Factory }
