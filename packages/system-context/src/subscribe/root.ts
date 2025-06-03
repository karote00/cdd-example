import {
  finishRequestSystemContextSnapshot,
  subscribeToRequestSystemContextSnapshot
} from '@cdd-example/reactive-events'
import { RootAPIs } from '../types'

export const initRootSubscribe = (apis: RootAPIs) => {
  subscribeToRequestSystemContextSnapshot(({ payload }) => {
    const systemContextSnapshot = apis.getSystemContextSnapshot()
    finishRequestSystemContextSnapshot(payload.requestId, systemContextSnapshot)
  })
}
