import { BehaviorSubject } from 'rxjs'
import { sceneTreeStore, uiContext } from '@cdd-example/ui-context'
import { ElementRawData } from '@cdd-example/utils'

import { createStore } from './utils'

export const useFlattenedIdsData = (): string[] =>
  createStore(uiContext.flattenedElementIds)

export const useElementData = (elementId: string): Partial<ElementRawData> => {
  const subject = sceneTreeStore.getElement(
    elementId
  ) as BehaviorSubject<ElementRawData>
  if (!subject) return {}
  return createStore(subject)
}
