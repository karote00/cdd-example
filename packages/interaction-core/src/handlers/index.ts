import { InteractionActions, InteractionEvent } from '@cdd-example/utils'
import { PrimaryToolHandlers } from './primary-tool'
import { ElementHandlers } from './element'
import { UndoRedoHandlers } from './undoredo'
import { ZoomFitHandlers } from './zoomfit'
import { PanZoomHandlers } from './panzoom'

export const InteractionCoreHandlers: Record<
  InteractionActions,
  (payload?: InteractionEvent['payload']) => void
> = {
  ...PrimaryToolHandlers,
  ...ElementHandlers,
  ...UndoRedoHandlers,
  ...ZoomFitHandlers,
  ...PanZoomHandlers
}
