import type { Store } from 'vuex'

export type UseStore = <S>() => Store<S>
