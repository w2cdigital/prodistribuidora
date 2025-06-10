import { useEffect, useState } from "react"

function DelayRender({ key, ms, children }) {
  const [render, setRender] = useState(false)
  useEffect(() => {
    setRender(false)
    const timer = setTimeout(() => setRender(true), ms)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return render ? children : null
}

export default DelayRender
