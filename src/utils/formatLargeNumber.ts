export function formatLargeNumber(num, min = 4) {
  return Intl.NumberFormat("en-US", {
    minimumIntegerDigits: min,
    useGrouping: false,
  }).format(num)
}
