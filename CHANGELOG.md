
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

