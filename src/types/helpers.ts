import { ComponentType } from "react"

export type ValueOf<T> = T[keyof T]

export type Prettify<T> = {
  [K in keyof T]: T[K]
}

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export type InferComponentProps<C> =
  C extends ComponentType<infer P> ? { props: P } : { props?: any }

export type FixedLengthArray<
  T,
  L extends number,
  TObj = [T, ...Array<T>],
> = Pick<
  TObj,
  Exclude<keyof TObj, "splice" | "push" | "pop" | "shift" | "unshift">
> & {
  readonly length: L
  [I: number]: T
  [Symbol.iterator]: () => IterableIterator<T>
}
