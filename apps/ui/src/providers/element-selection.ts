import { createStore } from './utils'
import { uiContext } from '@cdd-example/ui-context'

export const useElementSelection = (): Set<string> =>
  createStore(uiContext.elementSelection)
