import type { UseContext } from '../src/interfaces/context'
import type { UseStore } from '../src/interfaces/store'
import type { WrapProperty, GetCurrentInstance } from '../src/interfaces/core'
import type {
  UseRoute,
  UseRouteParams,
  UseRouteQuery,
  UseRouter,
} from '../src/interfaces/router'

declare const useContext: UseContext
declare const useStore: UseStore
declare const wrapProperty: WrapProperty
declare const getCurrentInstance: GetCurrentInstance

declare const useRoute: UseRoute
declare const useRouter: UseRouter
declare const useRouteQuery: UseRouteQuery
declare const useRouteParams: UseRouteParams

export {
  getCurrentInstance,
  useContext,
  useStore,
  UseStore,
  useRoute,
  useRouter,
  useRouteQuery,
  useRouteParams,
  wrapProperty,
}
