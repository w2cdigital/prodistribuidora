"use client"
import { ButtonProps } from "react-aria-components"
import { IColorNames } from "styles/colors"
import { Prettify } from "types/helpers"
import * as S from "./styles"
import { LinkProps } from "next/link"
import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react"

export type TButtonVariant = "fill" | "outline" | "styleless" | "link"

type TButtonProps = Prettify<
  {
    variant?: TButtonVariant
    color?: IColorNames
  } & ButtonProps
>
type TLinkProps = Prettify<
  {
    variant?: TButtonVariant
    color?: IColorNames
    disabled?: boolean
    className?: string
    target?: HTMLAttributeAnchorTarget
  } & LinkProps
> &
  PropsWithChildren

function MyButton({
  children,
  variant = "fill",
  color = "primary",
  ...props
}: TButtonProps) {
  return (
    <S.Button data-variant={variant} color={color} {...props}>
      {children}
    </S.Button>
  )
}

MyButton.Link = function MyLink({
  children,
  variant = "link",
  color = "primary",
  disabled,
  ...props
}: TLinkProps) {
  return (
    <S.Link
      data-variant={variant}
      color={color}
      {...props}
      data-disabled={disabled}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault()
          return
        }
        props?.onClick?.(e)
      }}
    >
      {children}
    </S.Link>
  )
}
export default MyButton
