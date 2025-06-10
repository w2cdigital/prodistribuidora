"use server"

import { headers } from "next/headers"
import webpush from "web-push"

webpush.setVapidDetails(
  "mailto:yvinisalves@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
)

type TNotification = {
  title: string
  body?: string
  icon?: string
  badge?: string
}

const subscriptions = {}

async function getIP() {
  const requestHeaders = await headers()
  const ip =
    requestHeaders.get("x-forwarded-for") ||
    requestHeaders.get("client-ip") ||
    requestHeaders.get("real-ip")
  return ip
}

export async function subscribeUser(sub: PushSubscription) {
  const ip = await getIP()
  const exists = subscriptions[ip]
  if (!exists) subscriptions[ip] = sub
  return { success: true }
}

export async function unsubscribeUser() {
  const ip = await getIP()
  if (subscriptions[ip]) {
    delete subscriptions[ip]
  }
  return { success: true }
}

export async function sendNotification(notification: TNotification) {
  const users = Object.values(subscriptions)
  if (users.length === 0) {
    throw new Error("No subscriptions available")
  }

  const results = []
  users.forEach((sub) => {
    try {
      webpush.sendNotification(sub, JSON.stringify(notification))
      results.push({ success: true })
    } catch (error) {
      console.error("Erro ao enviar para uma inscrição:", error)
      results.push({ success: false, error })
    }
  })

  return await Promise.all(results)
}
