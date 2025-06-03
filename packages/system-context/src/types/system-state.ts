import { SystemMode } from '@cdd-example/utils'

export interface SystemStateRawAPIs {
  getSystemMode: () => SystemMode
}

export type SystemStateAPIs = SystemStateRawAPIs
