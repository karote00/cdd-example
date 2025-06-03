import { KeySnapshot } from '@cdd-example/utils'
import { EventTypes } from '../../types'

export interface UpdateKeyStateEvent {
  type: EventTypes
  payload: KeySnapshot
}

export type KeyStateEvents = UpdateKeyStateEvent
