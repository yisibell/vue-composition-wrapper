import { computed } from '@vue/composition-api'
import { getCurrentInstance } from './utils'

/**
 * You might want to create a custom helper to 'convert' a non-Composition API property to a Composition-ready one. `wrapProperty` enables you to do that easily, returning either a computed or a bare property as required.
 * @param property the name of the property you would like to access. For example, `$store` to access `this.$store`.
 * @param makeComputed a boolean indicating whether the helper function should return a computed property or not. Defaults to `true`.
 */
export const wrapProperty = (
  property: string,
  makeComputed: boolean = true
) => {
  return () => {
    const vm = getCurrentInstance()
    if (!vm) throw new Error('This must be called within a setup function.')

    return makeComputed !== false
      ? (computed(() => vm[property]))
      : vm[property]
  }
}

export const useRouter = wrapProperty('$router', false)

export const useRoute = wrapProperty('$route')

export const useStore = wrapProperty('$store', false)
