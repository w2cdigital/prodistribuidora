export function breakInterpolation(str) {
  const regex = /({{.*?}})/g
  return str.split(regex).filter(Boolean)
}
