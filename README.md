# vue-composition-wrapper

composition api wrapper for vue 2.x vue-router 3.x vuex 3.x

# Features

- 让你可以在 `vue 2.x` 的项目中方便使用 **composition api**。
- 在 `setup` 中访问 `store`。
- 在 `setup` 中访问 `route` 和 `router`。
- 在 `setup` 中访问当前组件实例。
- typescript。

# Installation

``` bash
# yarn
$ yarn add vue-composition-wrapper
# or npm
$ npm i vue-composition-wrapper
```
# Usage
## useContext

获取当前组件实例上下文。

``` js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useContext } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const { app, store, route, router, query, params } = useContext()

    onMounted(() => {
      console.log(app)
    })
  }
})
```

## useStore

访问 `store`。

``` js
import { defineComponent, onMounted, computed } from '@vue/composition-api'
import { useStore } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const store = useStore()

    // state
    const someStateInStore = computed(() => store.state.some.value)

    // getters
    const someGettersInStore = computed(() => store.getters['some/path'])

    onMounted(() => {
      // mutations
      store.commit('some/SOME_MUTATION', 'foo')
      // actions
      store.dispatch('some/actions', 'bar')
    })

    return {
      someStateInStore,
      someGettersInStore
    }
  }
})
```

## useRoute

访问当前路由信息对象。

``` js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRoute } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const route = useRoute()

    onMounted(() => {
      console.log(route.value)
    })
  }
})
```

## useRouter

访问当前路由对象。

``` js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRoute } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const router = useRouter()

    const linkTo = (path) => {
      router.push(path)
    }

    return {
      linkTo
    }
  }
})
```

::: tip
其中 `route`, `query` 和 `params` 为 `Ref` 类型。
:::