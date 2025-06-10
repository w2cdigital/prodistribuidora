"use client"
import { MutableRefObject, useCallback, useEffect, useRef } from "react"

interface IClickOutside {
  ref?: MutableRefObject<any>
  onClickOutside: () => void
}

export function useClickOutside({ ref, onClickOutside }: IClickOutside) {
  const newRef = useRef(null)

  const targetRef = ref || newRef

  const handleClickOutside = useCallback(
    (event) => {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        onClickOutside()
      }
    },
    [targetRef, onClickOutside],
  )

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef])

  return targetRef
}
