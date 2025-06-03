import { ComputedAttrs, ElementRawData, EntityTypes } from '@cdd-example/utils'
import Frame from './components/frame'
import Group from './components/group'
import Rectangle from './components/rectangle'
import Workspace from './components/workspace'

const entityClassMap = {
  [EntityTypes.UNDEFINED]: undefined,
  [EntityTypes.FRAME]: Frame,
  [EntityTypes.GROUP]: Group,
  [EntityTypes.RECTANGLE]: Rectangle,
  [EntityTypes.OVAL]: Rectangle // FIXME: Change this after finish OVAL component
} as const

const initWorkspaceData = {
  type: EntityTypes.WORKSPACE
}

export const createElement = (elementData: Partial<ElementRawData>) => {
  if (
    elementData.type === EntityTypes.WORKSPACE ||
    elementData.type === EntityTypes.ELEMENT ||
    elementData.type === EntityTypes.UNDEFINED
  ) {
    return null
  }

  const elementType = elementData.type ?? EntityTypes.UNDEFINED
  const EntityClass = entityClassMap[elementType]
  if (!EntityClass) {
    throw new Error('Ivalid entity type.')
  }

  // Already know what type we need, and it should be insert by the component itself
  delete elementData.type

  return new EntityClass(elementData)
}

export const createWorkspace = (workspaceData = initWorkspaceData) => {
  if (workspaceData.type !== EntityTypes.WORKSPACE) {
    return null
  }

  const newWorkspace = new Workspace()
  newWorkspace.load(workspaceData)
  return newWorkspace
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type UnknownObject = Record<string, any>

const DefaultRawKeys: (keyof ElementRawData)[] = ['id', 'type', 'name', 'props']

/**
 * Removes non-raw fields from an element object and returns the stripped fields.
 *
 * @param elementData - The original element object which may contain extra fields.
 * @param rawKeys - Keys that should be kept in the original object (defaults to ElementRawData keys).
 * @returns An object containing the stripped (non-raw) fields.
 */
export function stripNonRawFields(
  elementData: UnknownObject,
  rawKeys: (keyof ElementRawData)[] = DefaultRawKeys
): Record<string, ComputedAttrs[keyof ComputedAttrs]> {
  const stripped = {} as UnknownObject

  for (const key in elementData) {
    if (!rawKeys.includes(key as keyof ElementRawData)) {
      stripped[key] = elementData[key]
    }
  }

  // Remove all non-raw keys from the original object
  Object.keys(stripped).forEach((key) => {
    /* eslint-disable-next-line @typescript-eslint/no-dynamic-delete */
    delete elementData[key]
  })

  return stripped
}
