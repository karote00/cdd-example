import { MouseSnapshot } from '@cdd-example/utils'
import { EventTypes } from '../../types'

export interface UpdateMouseStateEvent {
  type: EventTypes
  payload: MouseSnapshot
}

export type MouseStateEvents = UpdateMouseStateEvent
