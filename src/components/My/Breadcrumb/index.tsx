"use client"
import { ComponentProps } from "react"
import { Breadcrumb } from "react-aria-components"
import * as S from "./styles"
import Link from "next/link"
type Props = {
  paths: ({ text: string; href?: string } & ComponentProps<typeof Link>)[]
}
function MyBreadcrumb({ paths }: Props) {
  return (
    <S.Breadcrumbs>
      {paths?.map(({ text, ...props }, i) => (
        <Breadcrumb key={(props?.href || "") + i}>
          <Link {...props}>{text}</Link>
        </Breadcrumb>
      ))}
    </S.Breadcrumbs>
  )
}
export default MyBreadcrumb
