import { uiContext } from '@cdd-example/ui-context'
import { createStore } from '../utils'

export const useZoom = (): number => createStore(uiContext.zoom)
