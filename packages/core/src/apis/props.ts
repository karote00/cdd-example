import { propsLoadData, propsSaveData } from '@cdd-example/reactive-events'
import { PropsComponentRawData } from '@cdd-example/utils'
import { PropsRawAPIs } from '../types'

export const createPropsAPIs = (): PropsRawAPIs => {
  return {
    propsLoadData(data: PropsComponentRawData) {
      propsLoadData(data)
    },
    async propsSaveData() {
      return await propsSaveData()
    }
  }
}
