import VueRouter, { Route } from 'vue-router'
import type { Store } from 'vuex'
import type { ComputedRef } from 'vue'
import type { UseContextReturn } from '../src/composables/context'

declare function useContext(): UseContextReturn

type UseStoreFunc = <S>() => Store<S>

declare const useStore: UseStoreFunc
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
  UseStoreFunc,
}
