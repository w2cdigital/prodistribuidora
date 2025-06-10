export function nullifyEmpty<T>(obj: T): T {
  return Object.keys(obj).reduce((total, key) => {
    let value = obj[key]
    if (typeof value !== "boolean") {
      if (!value) {
        value = null
      }
    }
    if (typeof value === "string") {
      value = value.trim()
    }
    return {
      ...total,
      [key]: value,
    }
  }, {}) as T
}
