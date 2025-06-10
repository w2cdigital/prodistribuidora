"use client"
import { useCallback, useEffect, useState } from "react"
import CreateProvider from "utils/CreatProvider"

export function usePWAManager() {
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
    )
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    })

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    })

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches)
  }, [])

  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    setDeferredPrompt(null)
    return outcome
  }, [deferredPrompt])

  return {
    isIOS,
    isStandalone,
    isInstalled,
    handleInstallClick,
  }
}

const { Provider: PwaProvider, useHook: usePwa } = CreateProvider(usePWAManager)
function InstallPrompt() {
  const { isIOS, isStandalone, isInstalled, handleInstallClick } = usePwa()

  if (isStandalone || isInstalled) return null

  if (isIOS)
    return (
      <p>
        Para instalar o app, clique no botão de compartilhar abaixo e escolha
        {`"Adicionar a Home Screen"`}.
      </p>
    )
  return <button onClick={handleInstallClick}>Instalar App</button>
}

export { PwaProvider, usePwa, InstallPrompt }
