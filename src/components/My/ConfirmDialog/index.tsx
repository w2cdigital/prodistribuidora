"use client"
import Loading from "components/Loading"
import MyButton from "../Button"
import MyDialog from "../Dialog"
import { ReactNode } from "react"
import * as S from "./styles"

type TConfirmDialog = {
  label?: ReactNode
  isLoading?: boolean
  children?: ReactNode
  onPress?: () => void
}

function MyConfirmDialog({
  label,
  isLoading,
  children,
  onPress,
}: TConfirmDialog) {
  return (
    <MyDialog
      modal={({ close }) => (
        <S.Confirmodal>
          <p>{label}</p>
          <div>
            <MyButton
              color="green"
              type="button"
              isDisabled={isLoading}
              onPress={async () => {
                await onPress?.()
                close()
              }}
            >
              <Loading state={isLoading}>Confirmar</Loading>
            </MyButton>
            <MyDialog.CloseButton color="red">Cancelar</MyDialog.CloseButton>
          </div>
        </S.Confirmodal>
      )}
    >
      {children}
    </MyDialog>
  )
}

export default MyConfirmDialog
