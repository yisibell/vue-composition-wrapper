import { useRoute } from './useRoute'
import { computed } from 'vue'

/**
 * Gain access to route's query.
 */
const useRouteQuery = () => {
  const route = useRoute()
  return computed(() => route.value.query)
}

export default useRouteQuery
