import type { ChangeHandler, DataTypes } from '@cdd-example/utils'
import { OWNER, SCENE_TREE_ACTIONS } from '@cdd-example/utils'
import { EventTypes } from '@cdd-example/reactive-events'
import sceneTree from '../sceneTree'

export default class ElementChangeHandler implements ChangeHandler {
  addChange(data: {
    id: string
    key: string
    before: DataTypes
    after: DataTypes
  }): void {
    sceneTree.addChange({
      action: SCENE_TREE_ACTIONS.UPDATE_ELEMENT_COMPUTED_DATA,
      owner: OWNER.SCENE_TREE,
      eventName: EventTypes.UPDATE_COMPUTED_DATA,
      ...data
    })
  }
}
