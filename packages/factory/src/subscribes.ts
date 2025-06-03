import type { UpdateTransactionEvent } from '@cdd-example/reactive-events'
import {
  subscribeToStartTransaction,
  subscribeToUpdateTransaction,
  subscribeToEndTransaction,
  subscribeToUndo,
  subscribeToRedo
} from '@cdd-example/reactive-events'
import factory from './factory'

export const initFactorySubscribe = () => {
  subscribeToStartTransaction(() => {
    factory.startTransaction()
  })

  subscribeToUpdateTransaction((event: UpdateTransactionEvent) => {
    factory.updateTransaction(event)
  })

  subscribeToEndTransaction(() => {
    factory.endTransaction()
  })

  subscribeToUndo(() => {
    factory.undo()
  })

  subscribeToRedo(() => {
    factory.redo()
  })
}
