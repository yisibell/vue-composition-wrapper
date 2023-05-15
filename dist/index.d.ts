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

type UseContext = () => UseContextReturn

type UseStore = <S>() => Store<S>

type CurrentVueInstance = InstanceType<VueConstructor>

type GetCurrentInstance = () => CurrentVueInstance

type WrapProperty = <
  K extends keyof NonNullable<CurrentVueInstance>,
  T extends boolean = true
>(
  property: K,
  makeComputed?: T
) => () => T extends true
  ? ComputedRef<NonNullable<CurrentVueInstance>[K]>
  : NonNullable<CurrentVueInstance>[K]

type UseRoute = () => ComputedRef<Route>
type UseRouter = () => VueRouter
type UseRouteQuery = () => ComputedRef<Route['query']>
type UseRouteParams = () => ComputedRef<Route['params']>

declare const useContext: UseContext
declare const useStore: UseStore
declare const wrapProperty: WrapProperty
declare const getCurrentInstance: GetCurrentInstance

declare const useRoute: UseRoute
declare const useRouter: UseRouter
declare const useRouteQuery: UseRouteQuery
declare const useRouteParams: UseRouteParams

export { UseStore, getCurrentInstance, useContext, useRoute, useRouteParams, useRouteQuery, useRouter, useStore, wrapProperty };
