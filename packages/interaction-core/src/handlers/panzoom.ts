import { decideToPanZoom } from '@cdd-example/reactive-events'
import { InteractionActions, InteractionEvent } from '@cdd-example/utils'

export const PanZoomHandlers = {
  [InteractionActions.INTERACTION_PAN_ZOOM]: (
    payload?: InteractionEvent['payload']
  ) => {
    decideToPanZoom(payload.panzoom, payload.mouse, payload.wheel)
  }
}
