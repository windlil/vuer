class _Storage {
  private storage
  constructor(storage: Storage) {
    this.storage = storage
  }

  set(key: string, value: any) {
    value = JSON.stringify(value)
    this.storage.setItem(key, value)
    return true
  }

  get(key: string) {
    const data = this.storage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
    else {
      return undefined
    }
  }

  remove(key: string) {
    const isExist = this.get(key)
    if (isExist) {
      this.storage.removeItem(key)
    }
    else {
      return false
    }
  }

  clear() {
    this.storage.clear()
  }
}

const useLocalStorage = new _Storage(localStorage)
const useSessionStorage = new _Storage(sessionStorage)

export {
  useLocalStorage,
  useSessionStorage,
}
