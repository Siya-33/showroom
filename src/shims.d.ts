// support unocss attributify mode for react

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}

}
