"use client"
import { HTMLAttributes } from "react"
import * as S from "./styles"
import { getClassName } from "utils/className"

type TMyCard = HTMLAttributes<HTMLDivElement>

function MyCardCentered({ children, ...props }: TMyCard) {
  return (
    <S.CardCentered
      {...props}
      className={getClassName(["cardCentered", props.className])}
    >
      {children}
    </S.CardCentered>
  )
}
function MyCardSpaced({ children, ...props }: TMyCard) {
  return (
    <S.CardSpaced
      {...props}
      className={getClassName(["cardSpaced", props.className])}
    >
      {children}
    </S.CardSpaced>
  )
}

function MyCardHeader({ children, ...props }: TMyCard) {
  return (
    <S.CardHeader
      {...props}
      className={getClassName(["cardHeader", props.className])}
    >
      {children}
    </S.CardHeader>
  )
}

function MyCard({ children, ...props }: TMyCard) {
  return (
    <S.Card {...props} className={getClassName(["Card", props.className])}>
      {children}
    </S.Card>
  )
}

MyCard.Header = MyCardHeader
MyCard.Spaced = MyCardSpaced
MyCard.Centered = MyCardCentered

export default MyCard
