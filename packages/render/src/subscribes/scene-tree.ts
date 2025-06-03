import type {
  SceneTreeYjsChange,
  AddRemoveElementChange,
  UpdateElementChange
} from '@cdd-example/utils'
import factory from '@cdd-example/factory'
import { SCENE_TREE_ACTIONS } from '@cdd-example/utils'
import { subscribeToSceneTreeLoadComplete } from '@cdd-example/reactive-events'
import renderSceneTree from '../stores/scene-tree'

const updateRenderSceneTree = (change: SceneTreeYjsChange['payload']) => {
  switch (change.action) {
    case SCENE_TREE_ACTIONS.ADD_ELEMENT: {
      renderSceneTree.addElementById((change as AddRemoveElementChange).data.id)
      break
    }
    case SCENE_TREE_ACTIONS.REMOVE_ELEMENT: {
      const { parentId, data } = change as AddRemoveElementChange
      renderSceneTree.removeElement(data, parentId)
      break
    }
    case SCENE_TREE_ACTIONS.UPDATE_ELEMENT_COMPUTED_DATA: {
      const { id, key, before, after } = change as UpdateElementChange
      renderSceneTree.updateElement(id, key, before, after)
      break
    }
  }
}

// @ts-expect-error: It's YJS event
export const handleSceneTreeChange = (event) => {
  const processChanges = (
    items: typeof event.changes.added | typeof event.changes.deleted
  ) => {
    // @ts-expect-error: It's YJS event
    items.forEach((item) => {
      // @ts-expect-error: It's YJS event
      item.content.getContent().forEach((change) => {
        updateRenderSceneTree(change)
      })
    })
  }

  processChanges(event.changes.added)
  processChanges(event.changes.deleted)
}

let hasInit = false

let sceneTreeLoadCompleteSubscription = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unsubscribe: () => {}
}

export const initSceneTreeDataContext = () => {
  if (hasInit) {
    return
  }

  sceneTreeLoadCompleteSubscription = subscribeToSceneTreeLoadComplete(() => {
    renderSceneTree.reload()
  })

  const sceneTreeArray = factory.sceneTreeMap
  sceneTreeArray.observe(handleSceneTreeChange)

  hasInit = true
}

export const renderSceneTreeClear = () => {
  sceneTreeLoadCompleteSubscription.unsubscribe()
}
