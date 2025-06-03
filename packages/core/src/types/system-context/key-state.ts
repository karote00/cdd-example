import { KeySnapshot } from '@cdd-example/utils'

export interface KeyStateActionAPIs {
  updateKeyState: (keySnapshot: KeySnapshot) => void
}

export type KeyStateAPIs = KeyStateActionAPIs
