import {
  subscribeToSelectElements,
  updateTransaction
} from '@cdd-example/reactive-events'
import { elementSelection } from '../selections/element-selection'

export const initElementSelectionSubscribes = () => {
  subscribeToSelectElements(({ payload }) => {
    elementSelection.select(payload.after)

    elementSelection.changes.forEach((change) => {
      updateTransaction(change.eventName, change)
    })
    elementSelection.cleanChanges()
  })
}
