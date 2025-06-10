import { useState } from "react"
import { v4 } from "uuid"
type TId = "small" | "large"

function getId(option: TId) {
  if (option === "large") return v4()
  if (option === "small") return `I${v4().split("-")[0]}`
}

export function useGetId(option: TId = "large") {
  const [id] = useState(getId(option))
  return id
}
