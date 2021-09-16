import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setVaulue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      console.error(e)
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setVaulue(value)
    } catch (e) {
      console.error(e)
    }
  }
  return [storedValue, setLocalStorage]
}
