import { useState } from "react"

export function useDataHandler<T>(initialState: T) {
  const [state, setState] = useState(initialState)

  return [
    state,
    setState,
    (value: Partial<T>) => {
      setState((s) => ({ ...s, ...value }))
    },
  ] as const
}
export function useDataArrayHandler<T>(initialState: T[]) {
  const [state, setState] = useState(initialState)

  return [
    state,
    setState,
    (value: Partial<T>, index: number) => {
      setState((s) => s.with(index, { ...s[index], ...value }))
    },
  ] as const
}
