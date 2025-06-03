import {
  subscribeToUpdateUndoRedoStatus,
  subscribeToAddElement,
  subscribeToRemoveElement,
  subscribeToChangeComputedData,
  updateTransaction,
  subscribeToUpdateComputedData,
  finishAddRectangle,
  subscribeToSceneTreeInit,
  subscribeToSceneTreeLoadData,
  subscribeToSceneTreeSaveData,
  finishSceneTreeSaveData
} from '@cdd-example/reactive-events'
import type { ComputedAttrs, ElementInstanceTypes } from '@cdd-example/utils'
import { UNDO } from '@cdd-example/utils'
import propsManager from '@cdd-example/props-manager'
import sceneTree from './sceneTree'
import { stripNonRawFields } from './utils'

const commitSceneTreeTransaction = () => {
  sceneTree.changes.forEach((change) => {
    updateTransaction(change.eventName, change)
  })
  sceneTree.cleanChanges()
}

export const initSceneTreeSubscribes = () => {
  let inUndoRedo = false
  subscribeToUpdateUndoRedoStatus(({ payload }) => {
    inUndoRedo = payload.status !== UNDO.NONE
  })

  subscribeToSceneTreeInit(() => {
    sceneTree.init()
  })

  subscribeToSceneTreeLoadData(({ payload }) => {
    sceneTree.load(payload.data)
  })

  subscribeToSceneTreeSaveData(({ payload }) => {
    finishSceneTreeSaveData(payload.requestId, sceneTree.save())
  })

  subscribeToAddElement(({ payload }) => {
    const { data, parent, index, requestId } = payload

    let newRectangle

    const propOverrides = stripNonRawFields(data)
    if (inUndoRedo) {
      newRectangle = sceneTree.getRestoreElementById(data.id as string)
    } else {
      newRectangle = sceneTree.createElement(data)
    }

    if (newRectangle) {
      // Override props after finish creating new instance
      Object.keys(propOverrides).forEach((propKey) => {
        newRectangle.updateComputedData(
          propKey as keyof ComputedAttrs,
          propOverrides[propKey]
        )
      })
      propsManager.commitChanges()
    }

    sceneTree.addNewElement(newRectangle as ElementInstanceTypes, parent, index)
    commitSceneTreeTransaction()

    finishAddRectangle(requestId, newRectangle?.get('id') as string)
  })

  subscribeToRemoveElement(({ payload }) => {
    const { data, parent, index } = payload
    sceneTree.removeElement(data, index, parent)

    commitSceneTreeTransaction()
  })

  subscribeToChangeComputedData(async ({ payload }) => {
    const { elementIds, key, data } = payload

    elementIds.forEach((elementId) => {
      type KEY = keyof ComputedAttrs
      sceneTree.updateComputedData(
        elementId,
        key as KEY,
        data as ComputedAttrs[KEY]
      )
    })
    commitSceneTreeTransaction()
  })

  subscribeToUpdateComputedData(({ payload }) => {
    const { id, key, after } = payload

    sceneTree.updateComputedData(
      id,
      key as keyof ComputedAttrs,
      after as ComputedAttrs[keyof ComputedAttrs]
    )
    commitSceneTreeTransaction()
  })
}
