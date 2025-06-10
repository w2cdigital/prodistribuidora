export function capitalize(str) {
  if (!str?.length) return ""
  return str
    ?.trim()
    ?.toLowerCase()
    .split(" ")
    ?.map((i) => `${i[0]?.toUpperCase()}${i.slice(1)}`)
    .join(" ")
}
