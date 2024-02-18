import { computed } from 'vue'
import { useRoute } from './router'

/**
 * Gain access to route's params
 */
const useRouteParams = () => {
  const route = useRoute()

  return computed(() => route.params)
}

export default useRouteParams
