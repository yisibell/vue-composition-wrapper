import { getCurrentInstance } from './utils'
import { computed, ComputedRef } from 'vue'

/**
 * You might want to create a custom helper to 'convert' a non-Composition API property to a Composition-ready one. `wrapProperty` enables you to do that easily, returning either a computed or a bare property as required.
 * @param property the name of the property you would like to access. For example, `$store` to access `this.$store`.
 * @param makeComputed a boolean indicating whether the helper function should return a computed property or not. Defaults to `true`.
 */
export const wrapProperty = <
  K extends keyof NonNullable<ReturnType<typeof getCurrentInstance>>,
  T extends boolean = true
>(
  property: K,
  makeComputed?: T
) => {
  return (): T extends true
    ? ComputedRef<NonNullable<ReturnType<typeof getCurrentInstance>>[K]>
    : NonNullable<ReturnType<typeof getCurrentInstance>>[K] => {
    const vm = getCurrentInstance()
    if (!vm) throw new Error('This must be called within a setup function.')

    return makeComputed !== false
      ? (computed(() => vm[property]) as any)
      : vm[property]
  }
}
