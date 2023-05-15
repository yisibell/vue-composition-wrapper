import { computed } from 'vue'
import { getCurrentInstance } from './utils'
import type { UseContext } from '../interfaces/context'

/**
 * `useContext` will return the Vue context.
 * @example
  ```ts
  import { defineComponent, ref, useContext } from 'vue-composition-wrapper'
  export default defineComponent({
    setup() {
      const { store } = useContext()
      store.dispatch('myAction')
    },
  })
  ```
 */
const useContext: UseContext = () => {
  const vm = getCurrentInstance()
  if (!vm)
    throw new Error(`"useContext" must be called within a setup function.`)

  return {
    app: vm,
    store: vm.$store,
    router: vm.$router,
    route: computed(() => vm.$route),
    query: computed(() => vm.$route.query),
    params: computed(() => vm.$route.params),
  }
}

export default useContext
