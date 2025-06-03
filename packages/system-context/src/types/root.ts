import { SystemContextSnapshot } from '@cdd-example/utils'

export interface RootRawAPIs {
  getSystemContextSnapshot: () => SystemContextSnapshot
}

export type RootAPIs = RootRawAPIs
