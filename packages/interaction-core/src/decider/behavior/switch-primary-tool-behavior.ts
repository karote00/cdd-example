import { DetailType, InteractionEvent } from '@cdd-example/utils'
import { decideFromSwitchPrimaryToolRules } from '../rules'

export const decideSwitchPrimaryToolBehavior = (
  detail?: DetailType
): InteractionEvent => {
  return decideFromSwitchPrimaryToolRules(detail)
}
