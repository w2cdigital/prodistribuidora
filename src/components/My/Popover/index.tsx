"use client"
import { ComponentProps } from "react"
import { Prettify } from "types/helpers"
import {
  Dialog,
  DialogProps,
  DialogTrigger,
  OverlayArrow,
  type PopoverProps,
} from "react-aria-components"
import My from ".."
import * as S from "./styles"

type MyPopoverProps = Prettify<
  Omit<PopoverProps, "children"> & {
    children: React.ReactNode
    menu?: React.ReactNode
  }
>

function MyMenu({
  children,
  ...props
}: Omit<PopoverProps, "children"> & { children: DialogProps["children"] }) {
  return (
    <S.Popover {...props}>
      <OverlayArrow>
        <svg width={12} height={12} viewBox="0 0 12 12">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <Dialog>{children}</Dialog>
    </S.Popover>
  )
}

function MyPopoverTrigger({
  children,
  ...props
}: ComponentProps<typeof My.Button>) {
  return (
    <My.Button variant="styleless" {...props}>
      {children}
    </My.Button>
  )
}

function MyPopover({ children, menu, ...props }: MyPopoverProps) {
  return (
    <DialogTrigger {...props}>
      {children}
      {menu}
    </DialogTrigger>
  )
}

MyPopover.Menu = MyMenu
MyPopover.Trigger = MyPopoverTrigger

export default MyPopover
