import type { UseStoreFunc } from '../../types'
import { getCurrentInstance } from './utils'

/**
 * Gain access to the store just like using this.$store in a non-Composition API manner. You can also provide an injection key or custom type to get back a semi-typed store:
 * @example
  ```ts
  import { defineComponent, useStore } from 'vue-composition-wrapper'
  export interface State {
    count: number
  }
  export const key: InjectionKey<Store<State>> = Symbol()
  export default defineComponent({
    setup() {
      const store = useStore()
      const store = useStore(key)
      const store = useStore<State>()
      // In both of these cases, store.state.count will be typed as a number
    }
  })
  ```
 */
export const useStore: UseStoreFunc = () => {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('This must be called within a setup function.')

  return vm.$store
}
