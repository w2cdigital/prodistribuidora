"use client"
import { redirect } from "next/navigation"
import * as S from "./styles"
import Lottie from "components/Lottie"

export default function NotFound() {
  redirect("/")
  return (
    <S.WrapperPageNotFound>
      <Lottie animation="404" height={400} width={400} />
      <h1>Ops! Parece que essa página não existe.</h1>
      <p>(Erro 404)</p>
    </S.WrapperPageNotFound>
  )
}
