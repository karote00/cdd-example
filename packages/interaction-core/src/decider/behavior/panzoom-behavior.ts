import { InteractionEvent, SystemContextSnapshot } from '@cdd-example/utils'
import { decidePanZoomRules } from '../rules'

export const decidePanZoomBehavior = (
  systemContextSnapshot: SystemContextSnapshot
): InteractionEvent => {
  return decidePanZoomRules(
    systemContextSnapshot.key,
    systemContextSnapshot.mouse
  )
}
