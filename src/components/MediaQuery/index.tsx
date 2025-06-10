"use client"
import { useGlobalProps } from "providers/globalProps"

type TMediaQuery = {
  query: "Desktop" | "Mobile"
  children?: any
}

function MediaQuery({ query, children }: TMediaQuery) {
  const { mobile } = useGlobalProps()
  if (mobile && query === "Mobile") {
    return children
  }

  if (!mobile && query === "Desktop") {
    return children
  }
}

export default MediaQuery
