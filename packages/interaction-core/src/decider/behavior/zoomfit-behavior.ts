import { InteractionEvent } from '@cdd-example/utils'
import { decideZoomFitRules } from '../rules'

export const decideZoomFitBehavior = (): InteractionEvent => {
  return decideZoomFitRules()
}
