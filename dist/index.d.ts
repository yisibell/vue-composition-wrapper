import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';
import { ComputedRef, VueConstructor } from 'vue';

type ComponentInstance = InstanceType<VueConstructor>

interface UseContextReturn {
  app: ComponentInstance
  store: Store<unknown>
  route: ComputedRef<Route>
  router: VueRouter
  query: ComputedRef<Route['query']>
  params: ComputedRef<Route['params']>
}

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

export { useContext, useRoute, useRouteParams, useRouteQuery, useRouter, useStore, wrapProperty };
