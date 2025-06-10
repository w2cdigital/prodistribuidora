import { headers } from "next/headers"

export async function getPathName() {
  const headersList = await headers()
  const header_url = headersList.get("x-url") || ""
  return header_url
    ?.replace("http://", "")
    .replace("https://", "")
    .split("/")
    .slice(1)
    .join("/")
}

export async function getURL() {
  const headersList = await headers()
  const header_url = headersList.get("x-url") || ""
  return header_url
}
