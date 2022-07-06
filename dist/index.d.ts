import VueRouter, { Route } from 'vue-router';
import { Store } from 'vuex';
import { ComputedRef } from '@vue/composition-api';
import { VueConstructor } from 'vue';

type ComponentInstance = InstanceType<VueConstructor>

interface UseContextReturn {
  app: ComponentInstance
  store: Store<unknown>
  route: ComputedRef<Route>
  router: VueRouter
  query: ComputedRef<Route['query']>
  params: ComputedRef<Route['params']>
}

interface StorageInstance {
  getStorage(key: string): any
  setStorage(key: string, value: any): void
  removeStorage(key: string): void
  clearStorage(): void
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

declare function useStorage(persistent?: boolean): StorageInstance
declare function useSessionStorage(): StorageInstance
declare function useLocalStorage(): StorageInstance

export { useContext, useLocalStorage, useRoute, useRouteParams, useRouteQuery, useRouter, useSessionStorage, useStorage, useStore, wrapProperty };
