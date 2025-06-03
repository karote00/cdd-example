import {
  subscribeToDecideToPanZoom,
  subscribeToDecideToZoomFit
} from '@cdd-example/reactive-events'
import { ViewportAPIs } from '../../types'
import { PanZoom, ZOOM_SMOOTH_RATIO } from '@cdd-example/utils'

export const initViewportHandlers = (apis: ViewportAPIs) => {
  subscribeToDecideToZoomFit(() => {
    apis.zoomFit()
  })

  subscribeToDecideToPanZoom(async ({ payload }) => {
    // console.log('panzoom', payload.panzoom, payload.wheel)
    switch (payload.panzoom) {
      case PanZoom.PAN: {
        const { x, y } = payload.wheel
        const currentPosition = await apis.getViewportPosition()
        apis.panTo(currentPosition.x - x, currentPosition.y - y)
        break
      }
      case PanZoom.ZOOM: {
        const { x: clientX, y: clientY } = payload.mouse
        const { y: deltaY } = payload.wheel
        const currentScale = await apis.getViewportScale()
        // Adjust zoom scale based on wheel direction. deltaY > 0 means scrolling up (zoom in)
        // Using a smaller scale factor (1.05) for smoother zooming
        const newScale =
          currentScale *
          (deltaY > 0 ? 1 + ZOOM_SMOOTH_RATIO : 1 - ZOOM_SMOOTH_RATIO)
        apis.zoomToCenter(newScale, clientX, clientY)
        break
      }
    }
  })
}
