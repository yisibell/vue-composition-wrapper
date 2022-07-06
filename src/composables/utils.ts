import { VueConstructor } from 'vue'
import { getCurrentInstance as getVM } from 'vue'

export function getCurrentInstance() {
  const vm = getVM()

  if (!vm) return

  return vm.proxy as InstanceType<VueConstructor>
}
