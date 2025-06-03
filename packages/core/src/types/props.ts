import { PropsComponentRawData } from '@cdd-example/utils'

export interface PropsRawAPIs {
  propsLoadData: (data: PropsComponentRawData) => void
  propsSaveData: () => Promise<PropsComponentRawData>
}

export type PropsAPIs = PropsRawAPIs
