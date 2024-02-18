import type { UseContext } from '../interfaces/context'
import { getCurrentInstance } from './utils'
import { useRoute, useRouter } from './router'
import { useStore } from './useStore'
import useRouteParams from './routeParams'
import useRouteQuery from './routeQuery'

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

  const store = useStore()
  const route = useRoute()
  const router = useRouter()
  const query = useRouteQuery()
  const params = useRouteParams()

  return {
    app: vm,
    store,
    router,
    route,
    query,
    params,
  }
}

export default useContext
