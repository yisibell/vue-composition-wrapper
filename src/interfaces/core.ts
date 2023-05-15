import type { ComputedRef } from 'vue'
import type { VueConstructor } from 'vue'

export type CurrentVueInstance = InstanceType<VueConstructor>

export type GetCurrentInstance = () => CurrentVueInstance

export type WrapProperty = <
  K extends keyof NonNullable<CurrentVueInstance>,
  T extends boolean = true
>(
  property: K,
  makeComputed?: T
) => () => T extends true
  ? ComputedRef<NonNullable<CurrentVueInstance>[K]>
  : NonNullable<CurrentVueInstance>[K]
