export const verify = {
  isNumber: (value) => {
    const regex = /^[-+]?\d*\.?\d+$/
    return regex.test(String(value))
  },
}
