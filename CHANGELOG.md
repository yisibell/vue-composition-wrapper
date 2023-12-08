# CHANGE LOG


## v3.2.0

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v3.1.2...v3.2.0)


### 🚀 Enhancements

  - Add v3 example and upgrade `useContext` ([67098af](https://github.com/yisibell/vue-composition-wrapper/commit/67098af))

### 🏡 Chore

  - **docs:** Update readme ([0683e75](https://github.com/yisibell/vue-composition-wrapper/commit/0683e75))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v3.1.2

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v3.1.1...v3.1.2)


### 🏡 Chore

  - **docs:** Update readme ([a307fea](https://github.com/yisibell/vue-composition-wrapper/commit/a307fea))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v3.1.1

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v3.1.0...v3.1.1)


### 🏡 Chore

  - **dist:** Sync dist ([c75eb2e](https://github.com/yisibell/vue-composition-wrapper/commit/c75eb2e))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v3.1.0

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v3.0.2...v3.1.0)


### 🚀 Enhancements

  - UseContext route as non-ref ([4c423d5](https://github.com/yisibell/vue-composition-wrapper/commit/4c423d5))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v3.0.2

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v3.0.1...v3.0.2)


### 🏡 Chore

  - **docs:** Update readme ([009c197](https://github.com/yisibell/vue-composition-wrapper/commit/009c197))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v3.0.1

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v3.0.0...v3.0.1)


### 🏡 Chore

  - **docs:** Update readme ([208e6a9](https://github.com/yisibell/vue-composition-wrapper/commit/208e6a9))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v3.0.0

[compare changes](https://github.com/yisibell/vue-composition-wrapper/compare/v2.2.0...v3.0.0)


### 🚀 Enhancements

  - ⚠️  Use vue-router/composables ([5031fbe](https://github.com/yisibell/vue-composition-wrapper/commit/5031fbe))
  - ⚠️  Refactor rollup to v3 ([31fb44f](https://github.com/yisibell/vue-composition-wrapper/commit/31fb44f))

#### ⚠️  Breaking Changes

  - ⚠️  Use vue-router/composables ([5031fbe](https://github.com/yisibell/vue-composition-wrapper/commit/5031fbe))
  - ⚠️  Refactor rollup to v3 ([31fb44f](https://github.com/yisibell/vue-composition-wrapper/commit/31fb44f))

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v2.2.0


### 🚀 Enhancements

  - Export getCurrentInstance and fix wrapProperty types (828a2f4)

### 🏡 Chore

  - **docs:** Update useStore usage docs (bac3843)

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v2.1.4


### 🏡 Chore

  - **docs:** Update docs (0f350c3)

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v2.1.3


### 🩹 Fixes

  - **types:** Fix useStore types (0d1ba6f)

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v2.1.2


### 🏡 Chore

  - **docs:** Update docs (37c4c16)

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v2.1.1


### 🏡 Chore

  - Update changelog (e3621ad)
  - **docs:** Update readme for en (c069e7d)

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

## v2.1.0


### 🚀 Enhancements

  - Add changelog generator, fix npmignore files (93e1f19)

### 🏡 Chore

  - Upgrade version 2 to npm latest tag (58cd8e7)

### ❤️  Contributors

- Wenqing <wenqing@kerrylan.com>

# 2.0.0

## Upgrade

1. 将 `2.x` 标记为 **npm latest tag**。

# 2.0.0-alpha.0 (2022-07-06)

## Features

1. 支持 `vue 2.7`。

## Breaking Changes

1. 移除 `useStorage` api。
2. 移除 `@vue/composition-api` 依赖。

# 1.5.3 (2022-07-06)
## Upgrade

1. `useStorage` 类型定义优化。
# 1.5.2 (2022-07-05)
## Bug Fixs

1. delete unused types.
# 1.5.1 (2022-07-05)

## Bug Fixs

1. `useContext` 类型定义问题。

# 1.5.0 (2022-07-05)

## Features

- 将 **vue** 依赖锁定至 `2.6.x` 的补丁版本。确保使用 `vue@2.6.x` 的用户依然依赖于 `@vue/composition-api`。`vue-composition-wrapper@2.x` 将移除对 `@vue/composition-api` 的依赖。直接依赖于 `vue@2.7.x` 内置的组合式 API。
- 更新 `@vue/composition-api` 依赖至 `1.7.0`。

