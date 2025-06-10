"use client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import * as S from "./styles"

export default function Logout({ children }: { children: ReactNode }) {
  const route = useRouter()
  async function handleLogout() {
    await signOut({
      redirect: false,
    })

    route.replace("/Entrar")
  }

  return (
    <S.Wrapper onClick={handleLogout} className="logout">
      {children}
    </S.Wrapper>
  )
}
