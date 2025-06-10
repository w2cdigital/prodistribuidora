"use client"
import { ComponentProps } from "react"
import { Prettify } from "types/helpers"
import My from "components/My"
import * as S from "./styles"
import { Dialog, DialogProps, DialogTrigger } from "react-aria-components"

type MyPopoverProps = Prettify<
  Omit<DialogProps, "children"> & {
    children: React.ReactNode
    modal:
      | React.ReactNode
      | ((actions: { close: () => void }) => React.ReactNode)
    modalType?: "default" | "custom"
  }
>

function MyDialog({
  children,
  modal,
  modalType = "default",
  ...props
}: MyPopoverProps) {
  return (
    <DialogTrigger {...props}>
      {children}
      <S.Modal data-modal-type={modalType}>
        <Dialog>{modal}</Dialog>
      </S.Modal>
    </DialogTrigger>
  )
}

function CloseButton({ children, ...props }: ComponentProps<typeof My.Button>) {
  return (
    <My.Button slot="close" {...props}>
      {children}
    </My.Button>
  )
}

MyDialog.CloseButton = CloseButton
MyDialog.Modal = S.Modal
MyDialog.ModalNative = S.ModalNative

export default MyDialog
