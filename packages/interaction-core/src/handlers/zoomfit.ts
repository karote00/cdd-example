import { decideToZoomFit } from '@cdd-example/reactive-events'
import { InteractionActions } from '@cdd-example/utils'

export const ZoomFitHandlers = {
  [InteractionActions.INTERACTION_ZOOM_FIT]: () => {
    decideToZoomFit()
  }
}
