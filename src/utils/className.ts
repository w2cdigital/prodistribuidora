export function getClassName(classList: string[]) {
  return classList.filter(Boolean).join(" ")
}
