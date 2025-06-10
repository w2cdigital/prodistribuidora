export function inPromise(obj) {
  if (typeof obj === "object" && obj.then && typeof obj?.then === "function") {
    return true
  } else {
    return false
  }
}
