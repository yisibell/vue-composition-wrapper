import { getCurrentInstance as getVM } from 'vue'
import type { GetCurrentInstance } from '../interfaces/core'

export const getCurrentInstance: GetCurrentInstance = function () {
  const vm = getVM()
  if (!vm) throw new Error('This must be called within a setup function.')

  return vm.proxy
}
