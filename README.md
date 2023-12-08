<p align="center">
  <a href="https://www.npmjs.org/package/vue-composition-wrapper">
    <img src="https://img.shields.io/npm/v/vue-composition-wrapper.svg">
  </a>
  <a href="https://npmcharts.com/compare/vue-composition-wrapper?minimal=true">
    <img src="https://img.shields.io/npm/dm/vue-composition-wrapper.svg">
  </a>
  <br>
</p>

# vue-composition-wrapper

A **Vue Composition API** wrapper for `vue(2.x)` `vue-router(3.x)` `vuex(3.x)`.
Let you use **Composition API** more conveniently in `vue 2.x` projects.

- [Release Notes](./CHANGELOG.md)

# Features

- Access **Store** via `useStore` in `setup`.
- Access **Route** and **Router** via `useRoute` and `useRouter` in `setup`.
- Add navigation guard via `onBeforeRouteLeave` and `onBeforeRouteUpdate` in `setup`.
- Access the current **Vue component instance** context via `getCurrentInstance` in `setup`.
- Support `Typescript`.

# Installation

```bash
# yarn
$ yarn add vue-composition-wrapper

# npm
$ npm i vue-composition-wrapper
```

# APIs

| Docs | Version | Support Vue version  | Support vue-router version |
| :---: | :---: | :---: | :---: |
| <a href="./docs/v1.md">Core API for v1</a> | `v1.5.3` | `v2.6` and lower | - |
| <a href="./docs/v2.md">Core API for v2</a> | `v2.1.4` | `v2.7` | - |
| <a href="./docs/v3.md">Core API for v3</a> | `v3.0.0` | `v2.7` | `^3.6.5` |


# Usage

## For Vue(^2.7)

1. In current version of `vue-compostion-wrapper`, the dependency on `@vue/compostion-api` has been removed. Directly use the built-in composition API of `vue@2.7`.
2. Please install `vue-compostion-wrapper@latest`. The **npm tag** is now tagged as **latest**.

``` bash
# yarn
$ yarn add vue-composition-wrapper@latest

# npm 
$ npm i vue-composition-wrapper@latest
```

## For Vue(~2.6)

1. To use **Composition API** in `vue(~2.6.x)`, you need to use <a href="https://github.com/vuejs/composition-api"> @vue/composition-api </a>.

2. `@vue/composition-api` is included as **dependencies** of `vue-composition-wrapper@1.x`, so it will be installed automatically. If you already have `@vue/composition-api` in your project, please uninstall it first. Because if your `@vue/composition-api` version is too low, it may cause problems.

3. Install `@vue/composition-api` as a **Vue plugin**.

```js
// @/plugins/vue-compostion-api.js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
```

Then, import it in your `main.js`.

```js
// ...

import '@/plugins/vue-composition-api.js'

// ...
```

4. If your project has not planned to upgrade `vue` to **2.7.x**, and uses the **1.x version** of `vue-composition-wrapper`. Remember to lock the version updates of `vue` and `vue-template-compiler` to the **patch version** of **2.6**.

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




