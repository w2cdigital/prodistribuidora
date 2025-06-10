"use server"
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies"
import { cookies } from "next/headers"

export async function CreateCookie(name, initialValue, parser = (i) => i) {
  const cookieStore = await cookies()
  const myCookie = cookieStore.get(name)
  if (!myCookie) {
    cookieStore.set(name, initialValue)
  }
  return parser(myCookie?.value || initialValue)
}

export async function GetCookie(name, parser = (i) => i) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(name)
  return parser(cookie?.value || null)
}

export async function SetCookie(
  name,
  value,
  options?: Partial<ResponseCookie>,
) {
  const cookieStore = await cookies()
  cookieStore.set(name, value, options)
}
