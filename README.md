# vue-composition-wrapper

A composition api wrapper for vue(2.x) vue-router(3.x) vuex(3.x).

# Features

- 让你可以在 `vue 2.x` 的项目中方便使用 **Composition API**。
- 在 `setup` 中访问 `store`。
- 在 `setup` 中访问 `route` 和 `router`。
- 在 `setup` 中访问当前组件实例上下文。
- ~~`Storage` 本地存储操作 **api**~~。在 `v2` 中已被移除，请使用 <a href="https://github.com/yisibell/vue-use-toolkit">vue-use-toolkit</a> 替代。
- 支持 `typescript`。

# Installation

```bash
# yarn
$ yarn add vue-composition-wrapper

# npm
$ npm i vue-composition-wrapper
```

# Docs

- <a href="./docs/v1.md">Core API for v1</a>。
- <a href="./docs/v2.md">Core API for v2</a>。

# Usage

## For Vue(~2.6)

1. 想要在 `vue(~2.6.x)` 中使用 **Composition API**，需要借助 <a href="https://github.com/vuejs/composition-api"> @vue/composition-api </a>。

2. `@vue/composition-api` 被作为 `vue-composition-wrapper@1.x` 的 **dependencies**，所以会自动安装。如果你的项目中已经有了 `@vue/composition-api` 请先卸载它。因为你的 `@vue/composition-api` 版本过低，可能会造成问题。

3. 将 `@vue/composition-api` 作为 **Vue插件** 进行安装。

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

4. 如果你的项目还没有打算升级 `vue` 到 **2.7.x**，并且使用了 `vue-composition-wrapper` 的 **1.x 版本**。记得将 `vue` 和 `vue-template-compiler` 的版本更新锁定到 **2.6** 的 **补丁版本**。

```json
{
  "dependencies": {
    "vue": "~2.6.14"
  },
  "devDependencies": {
    "vue-template-compiler": "~2.6.14"
  }
}
```

## For Vue(^2.7)

1. 在 `vue-compostion-wrapper@2.x` 中，已移除对 `@vue/compostion-api` 的依赖。直接使用 `vue@2.7` 的内置组合式API。

``` bash
# yarn
$ yarn add vue-composition-wrapper@next

# npm 
$ npm i vue-composition-wrapper@next
```

# Change Log

see <a href="./CHANGELOG.md">CHANGELOG</a>。
