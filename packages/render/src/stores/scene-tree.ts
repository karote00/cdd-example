import type {
  DataTypes,
  ElementRawData,
  WorkspaceRawData
} from '@cdd-example/utils'
import { EntityTypes } from '@cdd-example/utils'
import sceneTree from '@cdd-example/scene-tree'
import { RenderElementData } from '../types'

import render from '../render'

class RenderSceneTree {
  private _workspace: WorkspaceRawData | null

  constructor() {
    this._workspace = null
  }

  reload() {
    const currentWorkspaceData =
      sceneTree.currentWorkspace.save() as WorkspaceRawData
    this._workspace = currentWorkspaceData

    // Create root render node
    render.switchWorkspace({
      label: currentWorkspaceData.id,
      x: 0,
      y: 0
    })

    // Create all element render node
    sceneTree.getAllElements().forEach((element) => {
      const renderElementData = this._getRenderData(element.get('id'))
      if (element.get('type') !== EntityTypes.WORKSPACE) {
        this.addElement(renderElementData)
      }
    })
  }

  private _getRenderData(id: string) {
    const element = sceneTree.getElementById(id)
    const elementComputedData = element.getAllComputedData()
    const elementData = {
      ...element.save(),
      ...elementComputedData
    } as RenderElementData

    return elementData
  }

  addElementById(id: string) {
    const renderElementData = this._getRenderData(id)
    this.addElement(renderElementData)
  }

  addElement(data: RenderElementData) {
    render.addElement(data)
  }

  removeElement(data: ElementRawData, parentId?: string) {
    render.removeElement(data.id, parentId)
  }

  updateElement(
    elementId: string,
    key: string,
    before: DataTypes,
    after: DataTypes
  ) {
    render.updateElement(elementId, key, before, after)
  }
}

export { RenderSceneTree }

const renderSceneTree = new RenderSceneTree()
export default renderSceneTree
