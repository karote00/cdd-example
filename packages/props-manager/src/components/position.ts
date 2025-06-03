import {
  DefaultPositionData,
  PositionAttrs,
  PositionComponentRawData,
  PropertyTypes,
  Unit
} from '@cdd-example/utils'
import BaseComponent from './base'

class PositionComponent extends BaseComponent<PositionAttrs> {
  data: PositionAttrs = {
    id: '',
    type: PropertyTypes.POSITION,
    ...DefaultPositionData
  }

  constructor(data: Partial<PositionAttrs>) {
    super()

    this._init(data)
  }

  save(): PositionComponentRawData {
    return {
      ...super.save(),
      x: this.get('x'),
      y: this.get('y'),
      xUnit: this.get('xUnit'),
      yUnit: this.get('yUnit')
    }
  }

  load(data: PositionComponentRawData): void {
    this.data.x = data.x
    this.data.y = data.y
    this.data.xUnit = data.xUnit
    this.data.yUnit = data.yUnit
  }

  getValue(): Record<string, number> {
    return {
      x: this.data.x,
      y: this.data.y
    }
  }

  getUnit(): Record<string, Unit> {
    return {
      xUnit: this.data.xUnit,
      yUnit: this.data.yUnit
    }
  }
}

export default PositionComponent
