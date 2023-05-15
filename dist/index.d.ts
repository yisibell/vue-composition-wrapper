import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';
import { ComputedRef, VueConstructor } from 'vue';
import { useRoute as useRoute$1, useRouter as useRouter$1, onBeforeRouteLeave as onBeforeRouteLeave$1, onBeforeRouteUpdate as onBeforeRouteUpdate$1, useLink as useLink$1 } from 'vue-router/composables';

type ComponentInstance = InstanceType<VueConstructor>

interface UseContextReturn {
  app: ComponentInstance
  store: Store<unknown>
  route: Route
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

type UseRouteQuery = () => ComputedRef<Route['query']>
type UseRouteParams = () => ComputedRef<Route['params']>

type UseRoute = typeof useRoute$1
type UseRouter = typeof useRouter$1

type OnBeforeRouteLeave = typeof onBeforeRouteLeave$1
type OnBeforeRouteUpdate = typeof onBeforeRouteUpdate$1

type UseLink = typeof useLink$1

declare const useContext: UseContext
declare const useStore: UseStore
declare const wrapProperty: WrapProperty
declare const getCurrentInstance: GetCurrentInstance

declare const useRoute: UseRoute
declare const useRouter: UseRouter

declare const useRouteQuery: UseRouteQuery
declare const useRouteParams: UseRouteParams

declare const useLink: UseLink

declare const onBeforeRouteLeave: OnBeforeRouteLeave
declare const onBeforeRouteUpdate: OnBeforeRouteUpdate

export { UseStore, getCurrentInstance, onBeforeRouteLeave, onBeforeRouteUpdate, useContext, useLink, useRoute, useRouteParams, useRouteQuery, useRouter, useStore, wrapProperty };
