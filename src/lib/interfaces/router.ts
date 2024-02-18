import type { Route } from 'vue-router'
import type { ComputedRef } from 'vue'
import {
  useLink,
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from 'vue-router/composables'

export type UseRouteQuery = () => ComputedRef<Route['query']>
export type UseRouteParams = () => ComputedRef<Route['params']>

export type UseRoute = typeof useRoute
export type UseRouter = typeof useRouter

export type OnBeforeRouteLeave = typeof onBeforeRouteLeave
export type OnBeforeRouteUpdate = typeof onBeforeRouteUpdate

export type UseLink = typeof useLink
