# vue-composition-wrapper

A composition api wrapper for vue(2.x) vue-router(3.x) vuex(3.x).

# Features

- 让你可以在 `vue 2.x` 的项目中方便使用 **composition api**。
- 在 `setup` 中访问 `store`。
- 在 `setup` 中访问 `route` 和 `router`。
- 在 `setup` 中访问当前组件实例上下文。
- `Storage` 本地存储操作 **api**。
- 使用 `typescript` 编写。

# Installation

```bash
# yarn
$ yarn add vue-composition-wrapper
# or npm
$ npm i vue-composition-wrapper
```

# Usage

想要在 `vue 2.x` 中使用 **composition api**，需要借助  <a href="https://github.com/vuejs/composition-api"> @vue/composition-api </a>。

`@vue/composition-api` 会自动安装，如果你的项目中已经有了 `@vue/composition-api` 请先卸载它。因为你的 `@vue/composition-api` 版本过低，可能会造成问题。

```js
// @/plugins/vue-compostion-api.js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
```

然后，在你的 `main.js` 中导入。

```js
// ...

import '@/plugins/vue-composition-api.js'

// ...
```

# Core API
## useContext

获取当前组件实例上下文。

```js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useContext } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const { app, store, route, router, query, params } = useContext()

    onMounted(() => {
      // 你可以通过从 app 访问 Vue 实例上的属性和方法
      console.log(app)
    })
  },
})
```

**注：**

为了能友好的过度到 `vuex 4.x`, `vue-router 4.x` ，请不要使用 `useContext` 中的 `store`, `route`, `router`, `query` 和 `params`。
而是使用 `useStore`, `useRoute` 和 `useRouter` 替代。

## useStore

访问 `store`。

```js
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
      someGettersInStore,
    }
  },
})
```

## useRouter

访问当前路由对象。

```js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRoute } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const router = useRouter()

    const linkTo = (path) => {
      router.push(path)
    }

    return {
      linkTo,
    }
  },
})
```

## useRoute

访问当前路由信息对象。

```js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRoute } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const route = useRoute()

    onMounted(() => {
      console.log(route.value)
    })
  },
})
```

## useRouteQuery

访问当前路由信息中的 `query`。

```js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRouteQuery } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const query = useRouteQuery()

    onMounted(() => {
      console.log(query.value)
    })
  },
})
```

## useRouteParams

访问当前路由信息中的 `params`。

```js
import { defineComponent, onMounted } from '@vue/composition-api'
import { useRouteParams } from 'vue-composition-wrapper'
export default defineComponent({
  setup() {
    const params = useRouteParams()

    onMounted(() => {
      console.log(params.value)
    })
  },
})
```

::: tip
其中 `route`, `query` 和 `params` 为 `Ref` 类型。
:::


# Heplers

`vue-composition-wrapper` 同时会提供一些好用的 **工具类组合式函数** 供同学们使用。

## wrapProperty

你可以为任何 `Vue实例属性` 创建自定义的 `helper`。

你可能希望创建一个自定义帮助器，将非合成 API 属性“转换”为合成就绪属性。`wrapProperty` 使你能够轻松地执行此操作，可以根据需要返回 **计算属性** 或 **普通属性**。

> (第二个参数是一个布尔值，指示 `helper` 函数是否应返回**计算属性**，默认为 `true`。)

```js
import { wrapProperty } from 'vue-composition-wrapper'
import { defineComponent } from '@vue/composition-api'

// For example, for used with https://github.com/danielroe/typed-vuex
const useAccessor = wrapProperty('$accessor', false)

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    // You can now access a fully typed store accessor in your component
  },
})
```

## useStorage

浏览器本地缓存 api，可以让你方便使用 `localStorage` 和 `sessionStorage` 进行数据的 **增删改查**。

**示例：**

```js
import { useStorage } from 'vue-composition-wrapper'
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const { setStorage, getStorage, removeStorage, clearStorage } = useStorage()

    // 使用 localStorage 进行持久化
    // const { setStorage, getStorage, removeStorage, clearStorage } = useStorage(true)
    
    // set storage
    setStorage('your-key-num', 666)
    setStorage('your-key-obj', { foo: 1 })

    onMounted(() => {
      // get storage
      console.log(getStorage('your-key-num')) // 666
      console.log(getStorage('your-key-obj')) // { foo: 1 }
    })

    // remove storage by some key
    const remove = () => {
      removeStorage('your-key-num')
    }

    // clear all storage
    const clear = () => {
      clearStorage()
    }

    return {
      remove,
      clear
    }

  },
})
```

## useSessionStorage

直接使用会话级本地存储（sessionStorage）。

**示例：**

```js
import { useSessionStorage } from 'vue-composition-wrapper'
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const { setStorage, getStorage, removeStorage, clearStorage } = useSessionStorage()

    // set storage
    setStorage('your-key-num', 666)
    setStorage('your-key-obj', { foo: 1 })

    onMounted(() => {
      // get storage
      console.log(getStorage('your-key-num')) // 666
      console.log(getStorage('your-key-obj')) // { foo: 1 }
    })

    // remove storage by some key
    const remove = () => {
      removeStorage('your-key-num')
    }

    // clear all storage
    const clear = () => {
      clearStorage()
    }

    return {
      remove,
      clear
    }

  },
})
```

## useLocalStorage

直接使用持久化本地存储（localStorage）。

**示例：**

```js
import { useLocalStorage } from 'vue-composition-wrapper'
import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const { setStorage, getStorage, removeStorage, clearStorage } = useLocalStorage()

    // set storage
    setStorage('your-key-num', 666)
    setStorage('your-key-obj', { foo: 1 })

    onMounted(() => {
      // get storage
      console.log(getStorage('your-key-num')) // 666
      console.log(getStorage('your-key-obj')) // { foo: 1 }
    })

    // remove storage by some key
    const remove = () => {
      removeStorage('your-key-num')
    }

    // clear all storage
    const clear = () => {
      clearStorage()
    }

    return {
      remove,
      clear
    }

  },
})
```