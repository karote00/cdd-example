import { MIXED_STRING } from '@cdd-example/utils'

type MixedType = typeof MIXED_STRING

export interface ElementProperties {
  x: number | MixedType
  y: number | MixedType
  width: number | MixedType
  height: number | MixedType
  rotation: number | MixedType
  //   fills: string[] | MixedType
  //   fill: FillAttrs | MixedType
}
