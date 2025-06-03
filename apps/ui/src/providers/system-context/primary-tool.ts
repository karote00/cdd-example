import { uiContext } from '@cdd-example/ui-context'
import { PrimaryToolType } from '@cdd-example/utils'
import { createStore } from '../utils'

export const usePrimaryTool = (): PrimaryToolType =>
  createStore(uiContext.primaryTool)
