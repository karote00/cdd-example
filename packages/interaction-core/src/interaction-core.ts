import {
  SystemContextSnapshot,
  InputSystemEvents,
  DetailType,
  InteractionEvent
} from '@cdd-example/utils'
import { decideInteraction } from './decider'
import { InteractionCoreHandlers } from './handlers'

class InteractionCore {
  private _previousSession: InteractionEvent | null = null

  executeAction(
    eventName: InputSystemEvents,
    systemContextSnapshot: SystemContextSnapshot,
    detail?: DetailType
  ) {
    const interaction = decideInteraction(
      eventName,
      systemContextSnapshot,
      detail
    )

    this.dispatchSession(interaction)
  }

  startSession(
    eventName: InputSystemEvents,
    systemContextSnapshot: SystemContextSnapshot,
    detail?: DetailType
  ) {
    const interaction = decideInteraction(
      eventName,
      systemContextSnapshot,
      detail
    )
    this.dispatchSession(interaction)
  }

  updateSession(
    eventName: InputSystemEvents,
    systemContextSnapshot: SystemContextSnapshot,
    detail?: DetailType
  ) {
    const interaction = decideInteraction(
      eventName,
      systemContextSnapshot,
      detail
    )
    this._previousSession = interaction
  }

  endSession(
    eventName: InputSystemEvents,
    systemContextSnapshot: SystemContextSnapshot,
    detail?: DetailType
  ) {
    // const interaction = decideInteraction(eventName, systemContextSnapshot, detail)
    // this.cancelPreviousSession()
  }

  dispatchSession(interaction: InteractionEvent | null) {
    if (!interaction) {
      return
    }

    if (this._previousSession) {
      this.cancelPreviousSession()
    }

    const handler = InteractionCoreHandlers[interaction.type]
    if (handler) {
      handler(interaction.payload)
    }

    this._previousSession = interaction
  }

  cancelPreviousSession() {
    this._previousSession = null
  }
}

export { InteractionCore }

const interactionCore = new InteractionCore()
export default interactionCore
