import useContext from './composables/context'
import { wrapProperty } from './composables/wrappers'
import { useStore } from './composables/useStore'
import { getCurrentInstance } from './composables/utils'

import useRouteQuery from './composables/routeQuery'
import useRouteParams from './composables/routeParams'

import {
  useLink,
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from './composables/router'

export {
  getCurrentInstance,
  useContext,
  wrapProperty,
  useRoute,
  useRouteQuery,
  useRouteParams,
  useRouter,
  useLink,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useStore,
}
