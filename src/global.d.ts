
import { Route } from 'vue-router'
import { VueConstructor } from 'vue'

export type ComponentInstance = InstanceType<VueConstructor>
export interface VueProxyComponentInstance extends ComponentInstance {
  $route: Route
}