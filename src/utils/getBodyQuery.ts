import { NextRequest } from "next/server"

export async function getBodyQuery<Res>(req: NextRequest) {
  let body = null
  try {
    body = await req?.json?.()
  } catch {
    body = null
  }
  const query = {}
  req?.nextUrl?.searchParams?.forEach((value, key) => (query[key] = value))
  return { body, query } as Res
}
