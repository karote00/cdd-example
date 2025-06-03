import {
  SystemContextSnapshot,
  InputSystemEvents,
  DetailType,
  PrimaryToolType,
  PositionData,
  UNDO,
  PanZoom,
  MouseSnapshot
} from '@cdd-example/utils'
import { publishEvent } from '../event-bus'
import { EventTypes } from '../types'

export const executeAction = (
  eventName: InputSystemEvents,
  systemContextSnapshot: SystemContextSnapshot,
  detail?: DetailType
) => {
  publishEvent({
    type: EventTypes.EXECUTE_ACTION,
    payload: {
      eventName,
      systemContextSnapshot,
      detail
    }
  })
}

export const startSession = (
  eventName: InputSystemEvents,
  systemContextSnapshot: SystemContextSnapshot,
  detail?: DetailType
) => {
  publishEvent({
    type: EventTypes.START_SESSION,
    payload: {
      eventName,
      systemContextSnapshot,
      detail
    }
  })
}

export const updateSession = (
  eventName: InputSystemEvents,
  systemContextSnapshot: SystemContextSnapshot,
  detail?: DetailType
) => {
  publishEvent({
    type: EventTypes.UPDATE_SESSION,
    payload: {
      eventName,
      systemContextSnapshot,
      detail
    }
  })
}

export const endSession = (
  eventName: InputSystemEvents,
  systemContextSnapshot: SystemContextSnapshot,
  detail?: DetailType
) => {
  publishEvent({
    type: EventTypes.END_SESSION,
    payload: {
      eventName,
      systemContextSnapshot,
      detail
    }
  })
}

export const decideToSwitchPrimaryTool = (primaryTool: PrimaryToolType) => {
  publishEvent({
    type: EventTypes.DECIDE_TO_SWITCH_PRIMARY_TOOL,
    payload: {
      primaryTool
    }
  })
}

export const decideToCreateElement = (
  position: PositionData,
  elementType: PrimaryToolType
) => {
  publishEvent({
    type: EventTypes.DECIDE_TO_CREATE_ELEMENT,
    payload: {
      position,
      elementType
    }
  })
}

export const decideToUndoRedo = (undoredo: UNDO) => {
  publishEvent({
    type: EventTypes.DECIDE_TO_UNDOREDO,
    payload: {
      undoredo
    }
  })
}

export const decideToZoomFit = () => {
  publishEvent({
    type: EventTypes.DECIDE_TO_ZOOM_FIT
  })
}

export const decideToPanZoom = (
  panzoom: PanZoom,
  mouse: MouseSnapshot['position'],
  wheel: MouseSnapshot['delta']
) => {
  publishEvent({
    type: EventTypes.DECIDE_TO_PAN_ZOOM,
    payload: {
      panzoom,
      mouse,
      wheel
    }
  })
}
