import { computed } from '@vue/composition-api'
import { getCurrentInstance } from './utils'
import type { Route } from 'vue-router'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { VueConstructor } from 'vue'
import type { ComputedRef } from '@vue/composition-api'

type ComponentInstance = InstanceType<VueConstructor>

export interface UseContextReturn {
  app: ComponentInstance
  store: Store<unknown>
  route: ComputedRef<Route>
  router: VueRouter
  query: ComputedRef<Route['query']>
  params: ComputedRef<Route['params']>
}

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
const useContext: () => UseContextReturn = () => {
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
