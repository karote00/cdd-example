import { decideToSwitchPrimaryTool } from '@cdd-example/reactive-events'
import { InteractionActions, InteractionEvent } from '@cdd-example/utils'

export const PrimaryToolHandlers = {
  [InteractionActions.INTERACTION_SWITCH_PRIMARY_TOOL]: (
    payload?: InteractionEvent['payload']
  ) => {
    decideToSwitchPrimaryTool(payload.primaryTool)
  }
}
