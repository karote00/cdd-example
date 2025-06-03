import { InteractionActions, InteractionEvent } from '@cdd-example/utils'

export const decideZoomFitRules = (): InteractionEvent => {
  const interaction: InteractionEvent = {
    type: InteractionActions.INTERACTION_ZOOM_FIT
  }

  return interaction
}
