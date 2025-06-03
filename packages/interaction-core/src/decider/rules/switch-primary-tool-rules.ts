import {
  DetailType,
  InteractionActions,
  InteractionEvent
} from '@cdd-example/utils'

export const decideFromSwitchPrimaryToolRules = (
  detail?: DetailType
): InteractionEvent => {
  return {
    type: InteractionActions.INTERACTION_SWITCH_PRIMARY_TOOL,
    payload: {
      primaryTool: detail?.primaryTool
    }
  }
}
