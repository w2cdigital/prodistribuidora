"use client"
import Spinner from "components/Spinner"
import { useCallback, useEffect, useRef, useState } from "react"

export function useLoadingHandler() {
  const loaded = useRef(false)
  const [loading, setLoading] = useState([])

  function useInitialLoading(func) {
    useEffect(() => {
      if (loaded.current) return
      loaded.current = true
      func()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  }

  const handleLoading = useCallback(async (callback, id?) => {
    setLoading((s) => [...s, id || "loading"])
    await callback()
    setLoading((s) => s.filter((i) => i !== (id || "loading")))
  }, [])

  return {
    isLoading: !!loading.length,
    value: loading,
    is: (id) => loading.includes(id),
    set: setLoading,
    handle: handleLoading,
    useInitialLoading,
  }
}
export type IHandleLoading = ReturnType<typeof useLoadingHandler>

function Loading({ state, children = null, ...props }) {
  if (state) {
    return <Spinner {...props} />
  }
  return children
}
Loading.useLoadingHandler = useLoadingHandler
export default Loading
