import type { UseContext } from '../src/lib/interfaces/context'
import type { UseStore } from '../src/lib/interfaces/store'
import type {
  WrapProperty,
  GetCurrentInstance,
} from '../src/lib/interfaces/core'
import type {
  UseRoute,
  UseRouteParams,
  UseRouteQuery,
  UseRouter,
  OnBeforeRouteLeave,
  OnBeforeRouteUpdate,
  UseLink,
} from '../src/lib/interfaces/router'

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

export {
  getCurrentInstance,
  useContext,
  useStore,
  UseStore,
  useRoute,
  useRouter,
  useRouteQuery,
  useRouteParams,
  useLink,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  wrapProperty,
}
