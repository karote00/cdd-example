import { subscribeToDecideToCreateElement } from '@cdd-example/reactive-events'
import { HandlerDeps, SceneTreeHandlerAPIs } from '../../types'
import { PrimaryToolType } from '@cdd-example/utils'

export const initCreateElementHandlers = (
  render: HandlerDeps['render'],
  apis: SceneTreeHandlerAPIs
) => {
  subscribeToDecideToCreateElement(({ payload }) => {
    const { position, elementType } = payload
    const pos = render.getMousePosInWorkspace({
      clientX: position.x,
      clientY: position.y
    })

    switch (elementType) {
      case PrimaryToolType.RECTANGLE:
        apis.addRectangle(pos)
        break
    }
  })
}
