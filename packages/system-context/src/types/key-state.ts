import { KeySnapshot } from '@cdd-example/utils'

export interface KeyStateRawAPIs {
  getKeyState: () => KeySnapshot
}

export interface KeyStateActionAPIs {
  updateKeyState: (keySnapshot: KeySnapshot) => void
}

export type KeyStateAPIs = KeyStateActionAPIs & KeyStateRawAPIs
