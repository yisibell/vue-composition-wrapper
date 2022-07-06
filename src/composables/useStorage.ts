export interface StorageInstance {
  getStorage(key: string): any
  setStorage(key: string, value: any): void
  removeStorage(key: string): void
  clearStorage(): void
}

export const useStorage: (persistent?: boolean) => StorageInstance = (
  persistent
) => {
  const storage = () =>
    persistent ? window.localStorage : window.sessionStorage

  /**
   * 获取
   */
  const getStorage = (key: string) => {
    if (!key || !storage()) return ''

    try {
      const value: string = storage().getItem(key) || ''

      return JSON.parse(value)
    } catch (_err) {
      return ''
    }
  }

  /**
   * 设置
   */
  const setStorage = (key: string, value: any) => {
    if (!storage()) return
    return storage().setItem(key, JSON.stringify(value))
  }

  /**
   * 删除
   */
  const removeStorage = (key: string) => {
    if (!storage()) return
    return storage().removeItem(key)
  }

  /**
   * 删除全部
   */
  const clearStorage = () => {
    if (!storage) return
    return storage().clear()
  }

  return {
    getStorage,
    setStorage,
    removeStorage,
    clearStorage,
  }
}

export const useSessionStorage = () => {
  return useStorage(false)
}

export const useLocalStorage = () => {
  return useStorage(true)
}
