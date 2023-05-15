import VueRouter, { Route } from 'vue-router'
import type { ComputedRef } from 'vue'

export type UseRoute = () => ComputedRef<Route>
export type UseRouter = () => VueRouter
export type UseRouteQuery = () => ComputedRef<Route['query']>
export type UseRouteParams = () => ComputedRef<Route['params']>
