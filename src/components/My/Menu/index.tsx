"use client"
import { ComponentProps, ReactNode } from "react"
import {
  Menu,
  MenuTrigger,
  type MenuItemProps,
  type MenuProps,
  type MenuTriggerProps,
} from "react-aria-components"
import { Prettify } from "types/helpers"
import * as S from "./styles"
import My from ".."
import { IColorNames } from "styles/colors"

type MyMenuButtonProps<T> = Prettify<
  MenuProps<T> &
    Omit<MenuTriggerProps, "children"> & {
      modal?: ReactNode | ((item: T) => ReactNode)
      children?: ReactNode
      color?: IColorNames
    }
>

function MyMenuButton<T extends object>({
  modal,
  children,
  color = "primary",
  ...props
}: MyMenuButtonProps<T>) {
  return (
    <MenuTrigger {...props}>
      {children}
      <S.Popover color={color}>
        <Menu {...props}>{modal}</Menu>
      </S.Popover>
    </MenuTrigger>
  )
}

function MyItem(props: MenuItemProps) {
  const textValue =
    props.textValue ||
    (typeof props.children === "string" ? props.children : undefined)
  return (
    <S.MenuItem {...props} textValue={textValue}>
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && (
            <svg className="chevron" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </>
      )}
    </S.MenuItem>
  )
}

function MyMenuTrigger({
  children,
  ...props
}: ComponentProps<typeof My.Button>) {
  return (
    <My.Button variant="styleless" {...props}>
      {children}
    </My.Button>
  )
}

MyMenuButton.Trigger = MyMenuTrigger
MyMenuButton.Item = MyItem

export default MyMenuButton
