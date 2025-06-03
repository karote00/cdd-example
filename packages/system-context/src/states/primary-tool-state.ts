import { DefaultPrimaryTool, PrimaryToolType } from '@cdd-example/utils'

export class PrimaryToolState {
  private _state: PrimaryToolType = DefaultPrimaryTool

  set(tool: PrimaryToolType) {
    this._state = tool
  }

  get current() {
    return this._state
  }
}

export default new PrimaryToolState()
