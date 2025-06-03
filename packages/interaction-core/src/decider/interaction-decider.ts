import {
  InteractionEvent,
  SystemContextSnapshot,
  InputSystemEvents,
  DetailType
} from '@cdd-example/utils'
import {
  decideDragStartBehavior,
  decidePanZoomBehavior,
  decideSwitchPrimaryToolBehavior,
  decideUndoRedoBehavior,
  decideZoomFitBehavior
} from './behavior'

export const decideInteraction = (
  eventName: InputSystemEvents,
  systemContextSnapshot: SystemContextSnapshot,
  detail?: DetailType
): InteractionEvent | null => {
  switch (eventName) {
    case InputSystemEvents.INPUT_DRAG_START:
      return decideDragStartBehavior(systemContextSnapshot)
    case InputSystemEvents.INPUT_SHORTCUT_SWITCH_PRIMARY_TOOL:
      return decideSwitchPrimaryToolBehavior(detail)
    case InputSystemEvents.INPUT_SHORTCUT_UNDOREDO:
      return decideUndoRedoBehavior(systemContextSnapshot)
    case InputSystemEvents.INPUT_SHORTCUT_ZOOM_PRESET:
      return decideZoomFitBehavior()
    case InputSystemEvents.INPUT_WHEEL_SCROLL:
      return decidePanZoomBehavior(systemContextSnapshot)
    default:
      return null
  }
}
