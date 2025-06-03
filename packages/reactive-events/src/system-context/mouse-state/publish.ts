import { MouseSnapshot } from '@cdd-example/utils'
import { publishEvent } from '../../event-bus'
import { EventTypes } from '../../types'

export const updateMouseStata = (mosueState: MouseSnapshot) => {
  publishEvent({
    type: EventTypes.UPDATE_MOUSE_STATE,
    payload: {
      ...mosueState
    }
  })
}
