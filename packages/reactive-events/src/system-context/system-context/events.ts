import { SystemContextSnapshot } from '@cdd-example/utils'
import { EventTypes } from '../../types'

export interface RequestSystemContextSnapshotEvent {
  type: EventTypes
  payload: {
    requestId: string
  }
}

export interface FinishRequestSystemContextSnapshotEvent {
  type: EventTypes
  payload: {
    requestId: string
    systemContextSnapshot: SystemContextSnapshot
  }
}

export type SystemContextSubEvents =
  | RequestSystemContextSnapshotEvent
  | FinishRequestSystemContextSnapshotEvent
