import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'
import type { ComputedRef } from '@vue/composition-api'
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

interface StorageInstance {
  getStorage(key: string): any
  setStorage(key: string, value: any): void
  removeStorage(key: string): void
  clearStorage(): void
}

declare function useStorage(persistent?: boolean): StorageInstance
declare function useSessionStorage(): StorageInstance
declare function useLocalStorage(): StorageInstance

export {
  useContext,
  useStore,
  useRoute,
  useRouter,
  useRouteQuery,
  useRouteParams,
  wrapProperty,
  useStorage,
  useSessionStorage,
  useLocalStorage,
}
