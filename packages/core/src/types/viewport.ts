import { PositionData } from '@cdd-example/utils'

export interface ViewportRawAPIs {
  getViewportPosition: () => Promise<PositionData>
  getViewportScale: () => Promise<number>
}

export interface ViewportActionAPIs {
  zoomFit: () => void
  panTo: (x: number, y: number) => void
  zoomToCenter: (scale: number, centerX: number, centerY: number) => void
}

export type ViewportAPIs = ViewportRawAPIs & ViewportActionAPIs
