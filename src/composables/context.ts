import { computed } from '@vue/composition-api'
import { getCurrentInstance } from './utils'

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
const useContext = () => {
  const vm = getCurrentInstance()
  if (!vm) throw new Error('This must be called within a setup function.')

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
