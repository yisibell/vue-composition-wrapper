import type { Route } from 'vue-router'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { VueConstructor } from 'vue'
import type { ComputedRef } from 'vue'

type ComponentInstance = InstanceType<VueConstructor>

export interface UseContextReturn {
  app: ComponentInstance
  store: Store<unknown>
  route: Route
  router: VueRouter
  query: ComputedRef<Route['query']>
  params: ComputedRef<Route['params']>
}

export type UseContext = () => UseContextReturn
