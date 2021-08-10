import { VueConstructor } from 'vue'
import { getCurrentInstance as getVM } from '@vue/composition-api'

export type ComponentInstance = InstanceType<VueConstructor>

export function getCurrentInstance() {
  const vm = getVM()

  if (!vm) return

  return vm.proxy as ComponentInstance
}