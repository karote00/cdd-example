import { PrimaryToolType } from '@cdd-example/utils'
import uiContext from '../../ui-context'

export class PrimaryToolStore {
  updatePrimaryTool(tool: PrimaryToolType) {
    uiContext.updatePrimaryTool(tool)
  }
}
