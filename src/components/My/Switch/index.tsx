"use client"
import { SwitchProps } from "react-aria-components"
import { IColorNames } from "styles/colors"
import { Prettify } from "types/helpers"
import * as S from "./styles"

type MySwitchProps = Prettify<
  Omit<SwitchProps, "children"> & {
    children?: React.ReactNode
    color?: IColorNames
  }
>

function MySwitch({ children, color = "primary", ...props }: MySwitchProps) {
  return (
    <S.Switch color={color} {...props}>
      <div className="indicator" />
      {children}
    </S.Switch>
  )
}

export default MySwitch
