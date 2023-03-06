import { computed } from 'vue'
import { useRoute } from './useRoute'

/**
 * Gain access to route's params
 */
const useRouteParams = () => {
  const route = useRoute()

  return computed(() => route.value.params)
}

export default useRouteParams
