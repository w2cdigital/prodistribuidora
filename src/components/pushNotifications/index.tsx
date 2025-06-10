"use client"
import { useCallback, useEffect, useState } from "react"
import { subscribeUser, unsubscribeUser, sendNotification } from "./actions"
import CreateProvider from "utils/CreatProvider"

export function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export function usePushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false)
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null,
  )
  const [message, setMessage] = useState("")
  const [title, setTitle] = useState("")

  const registerServiceWorker = useCallback(async () => {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    })
    const sub = await registration.pushManager.getSubscription()
    setSubscription(sub)
  }, [])

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true)
      registerServiceWorker()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const subscribeToPush = useCallback(async () => {
    const registration = await navigator.serviceWorker.ready
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
      ),
    })
    setSubscription(sub)
    const serializedSub = JSON.parse(JSON.stringify(sub))
    await subscribeUser(serializedSub)
  }, [])

  const unsubscribeFromPush = useCallback(async () => {
    await subscription?.unsubscribe()
    setSubscription(null)
    await unsubscribeUser()
  }, [subscription])

  const sendTestNotification = useCallback(async () => {
    if (subscription) {
      await sendNotification({
        title: title,
        icon: "/favicon.ico",
        body: message,
      })
    }
  }, [subscription, title, message])

  return {
    isSupported,
    message,
    title,
    subscription,
    setTitle,
    setMessage,
    subscribeToPush,
    unsubscribeFromPush,
    sendTestNotification,
  }
}

const { Provider: PushNotificationProvider, useHook: usePushNotification } =
  CreateProvider(usePushNotificationManager)

export function PushNotificationManager() {
  const { isSupported, subscription, subscribeToPush, unsubscribeFromPush } =
    usePushNotification()

  if (!isSupported) return <p>Notificações não suportadas no seu navegador.</p>

  return (
    <button onClick={subscription ? unsubscribeFromPush : subscribeToPush}>
      {subscription
        ? "Não quero receber notificações"
        : "Quero receber notificações"}
    </button>
  )
}
export function Message() {
  const {
    message,
    title,
    isSupported,
    setTitle,
    setMessage,
    sendTestNotification,
  } = usePushNotification()

  if (!isSupported) return null

  return (
    <div>
      <input
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendTestNotification}>Enviar Mensagem</button>
    </div>
  )
}

export { PushNotificationProvider, usePushNotification }
