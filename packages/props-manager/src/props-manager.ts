import { OWNER, PropertyTypes, PROPS_ACTIONS } from '@cdd-example/utils'
import type {
  PropertyComponentInstanceDataTypes,
  PropertyComponentInstanceTypes,
  PropertyComponentRawData,
  PropsChange,
  PropsComponentRawData
} from '@cdd-example/utils'
import { EventTypes, updateTransaction } from '@cdd-example/reactive-events'
import { createProperty } from './utils'

class PropsManager {
  _components: Map<string, PropertyComponentInstanceTypes> = new Map()
  _deletedMap: Map<string, PropertyComponentInstanceTypes> = new Map()
  changes: PropsChange[] = []

  load(data: PropsComponentRawData) {
    Object.keys(data).forEach((componentId) => {
      const newProperty = createProperty(
        data[componentId]
      ) as PropertyComponentInstanceTypes
      this.addToMap(newProperty)
    })
  }

  save(): PropsComponentRawData {
    const data = {} as PropsComponentRawData
    this._components.forEach((component, componentId) => {
      data[componentId] = component.save()
    })

    return data
  }

  addChange(change: PropsChange) {
    this.changes.push(change)
  }

  cleanChanges() {
    this.changes = []
  }

  getComponentById(
    componentId: string
  ): PropertyComponentInstanceTypes | undefined {
    return this._components.get(componentId)
  }

  addToMap(component: PropertyComponentInstanceTypes) {
    const comId = component.get('id')
    if (!component || !comId) {
      return
    }

    this.removeFromDeletedMap(comId)
    this._components.set(comId, component)
  }

  removeFromMap(componentId: string) {
    const component = this.getComponentById(componentId)
    if (!component) {
      return
    }

    this.addToDeletedMap(component)
    this._components.delete(componentId)
  }

  addToDeletedMap(component: PropertyComponentInstanceTypes) {
    this._deletedMap.set(component.get('id'), component)
  }

  removeFromDeletedMap(componentId: string) {
    this._deletedMap.delete(componentId)
  }

  getRestoreComponentById(componentId: string) {
    return this._deletedMap.get(componentId)
  }

  addChangeForAddProperty(property: PropertyComponentInstanceTypes) {
    this.addChange({
      eventName: EventTypes.ADD_PROPERTY,
      data: [property.save()],
      action: PROPS_ACTIONS.ADD_PROPERTY,
      owner: OWNER.PROPS,
      undoType: EventTypes.REMOVE_PROPERTY,
      undoAction: EventTypes.REMOVE_PROPERTY
    })
  }

  addChangeForRemoveProperty(property: PropertyComponentInstanceTypes) {
    this.addChange({
      eventName: EventTypes.REMOVE_PROPERTY,
      data: [property.save()],
      action: PROPS_ACTIONS.REMOVE_PROPERTY,
      owner: OWNER.PROPS,
      undoType: EventTypes.ADD_PROPERTY,
      undoAction: EventTypes.ADD_PROPERTY
    })
  }

  createProperty(propData: Partial<PropertyComponentRawData>) {
    if (!propData.type) {
      throw new Error('Type is required!')
    }

    const newProperty = createProperty({
      ...propData,
      type: propData.type as PropertyTypes
    }) as PropertyComponentInstanceTypes
    this.addChangeForAddProperty(newProperty)
    return newProperty
  }

  addProperty(
    propComponents: PropertyComponentInstanceTypes[]
  ): Record<PropertyTypes, string> {
    return propComponents.reduce(
      (acc, com) => {
        if (!com) {
          return acc
        }

        this.addToMap(com)
        acc[com.get('type')] = com.get('id')
        return acc
      },
      {} as Record<PropertyTypes, string>
    )
  }

  removeProperty(propComponentIds: string[]) {
    propComponentIds.forEach((propComponentId) => {
      this.removeFromMap(propComponentId)
    })
  }

  updatePropsData<K extends keyof PropertyComponentInstanceDataTypes>(
    componentId: string,
    key: K,
    data: PropertyComponentInstanceDataTypes[K]
  ) {
    const component = this.getComponentById(componentId)
    if (!component) {
      return
    }

    component.set(key, data)
  }

  commitChanges() {
    this.changes.forEach((change) => {
      updateTransaction(change.eventName, change)
    })
    this.cleanChanges()
  }
}

const propsManager = new PropsManager()

export default propsManager
export { PropsManager }
