export default function doAfter(func, ms) {
  const timer = setTimeout(func, ms)
  return () => clearTimeout(timer)
}
