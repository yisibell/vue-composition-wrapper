import { useRoute } from './wrappers'
import { computed } from '@vue/composition-api'

/**
 * Gain access to route's query.
 */
const useRouteQuery = () => {
  const route = useRoute()
  return computed(() => route.value.query)
}

export default useRouteQuery
