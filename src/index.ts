import useContext from './composables/context'
import { wrapProperty } from './composables/wrappers'
import { useStore } from './composables/useStore'
import { getCurrentInstance } from './composables/utils'

import { useRoute } from './composables//useRoute'
import { useRouter } from './composables//useRouter'
import useRouteQuery from './composables/routeQuery'
import useRouteParams from './composables/routeParams'

export {
  getCurrentInstance,
  useContext,
  wrapProperty,
  useRoute,
  useRouteQuery,
  useRouteParams,
  useRouter,
  useStore,
}
