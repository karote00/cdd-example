import type { Factory } from '@cdd-example/factory'
import type { InputSystem } from '@cdd-example/input-system'
import type { InteractionCore } from '@cdd-example/interaction-core'
import type { Render } from '@cdd-example/render'

export interface HandlerDeps {
  inputSystem: InputSystem
  render: Render
  factory: Factory
  interactionCore: InteractionCore
}
