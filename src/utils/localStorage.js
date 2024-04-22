export const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (error) {
    console.error('Error getting data from localStorage', error)
    return null
  }
}

export const setLocalStorage = (key, payload) => {
  try {
    const item = JSON.stringify(payload)
    localStorage.setItem(key, item)
  } catch (error) {
    console.error('Error setting data in localStorage', error)
  }
}

export const deleteLocalStorage = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error('Error removing data from localStorage', error)
  }
}
