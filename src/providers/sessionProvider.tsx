"use client"
import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

interface NextSessionAuthProviderProps {
  children: ReactNode
}

export default function NextAuthSessionProvider({
  children,
}: NextSessionAuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>
}
