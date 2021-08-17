import VueRouter, { Route } from 'vue-router';
export { Route } from 'vue-router';
import { VueConstructor } from 'vue';
import { Store } from 'vuex';
import { ComputedRef } from '@vue/composition-api';

type ComponentInstance = InstanceType<VueConstructor>

declare function useContext(): {
  app: ComponentInstance
  store: Store<unknown>
  route: ComputedRef<Route>
  router: VueRouter
  query: ComputedRef<{}>
  params: ComputedRef<{}>
}

declare function useStore(): Store<unknown>
declare function useRoute(): ComputedRef<Route>
declare function useRouter(): VueRouter
declare function useRouteQuery(): ComputedRef<{}>
declare function useRouteParams(): ComputedRef<{}>
declare function wrapProperty(property: string, makeComputed?: boolean): ComputedRef<unknown> | unknown

export { useContext, useRoute, useRouteParams, useRouteQuery, useRouter, useStore, wrapProperty };
