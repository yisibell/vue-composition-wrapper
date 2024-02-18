import { useRoute } from './router'
import { computed } from 'vue'

/**
 * Gain access to route's query.
 */
const useRouteQuery = () => {
  const route = useRoute()
  return computed(() => route.query)
}

export default useRouteQuery
