import { KeySnapshot } from '@cdd-example/utils'
import { publishEvent } from '../../event-bus'
import { EventTypes } from '../../types'

export const updateKeyState = (keySnapshot: KeySnapshot) => {
  publishEvent({
    type: EventTypes.UPDATE_KEY_STATE,
    payload: {
      ...keySnapshot
    }
  })
}
