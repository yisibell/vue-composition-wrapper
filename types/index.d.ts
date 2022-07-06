import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'
import type { ComputedRef } from 'vue'
import type { UseContextReturn } from '../src/composables/context'

declare function useContext(): UseContextReturn

declare function useStore(): Store<unknown>
declare function useRoute(): ComputedRef<Route>
declare function useRouter(): VueRouter
declare function useRouteQuery(): ComputedRef<Route['query']>
declare function useRouteParams(): ComputedRef<Route['params']>

declare function wrapProperty(
  property: string,
  makeComputed?: boolean
): ComputedRef<unknown> | unknown

export {
  useContext,
  useStore,
  useRoute,
  useRouter,
  useRouteQuery,
  useRouteParams,
  wrapProperty,
}
