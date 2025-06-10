"use client"
import My from "components/My"
import { ComponentProps } from "react"
import {
  OverlayArrow,
  TooltipTrigger,
  TooltipTriggerComponentProps,
} from "react-aria-components"
import * as S from "./styles"
import { Prettify } from "types/helpers"
import { IColorNames } from "styles/colors"

type MyTooltipProps = Prettify<
  Omit<TooltipTriggerComponentProps, "children"> & {
    children: React.ReactNode
    tooltip?: React.ReactNode
    color?: IColorNames
  }
>
function TooltipMessage({ children, color, ...props }: MyTooltipProps) {
  return (
    <S.Tooltip color={color} {...props}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </S.Tooltip>
  )
}

function MyTooltip({
  children,
  tooltip,
  delay = 500,
  color = "primary",
  ...props
}: MyTooltipProps) {
  return (
    <TooltipTrigger delay={delay} {...props}>
      {children}
      <TooltipMessage color={color}>{tooltip}</TooltipMessage>
    </TooltipTrigger>
  )
}

function MyTooltipTrigger({
  children,
  ...props
}: ComponentProps<typeof My.Button>) {
  return (
    <My.Button variant="styleless" {...props}>
      {children}
    </My.Button>
  )
}

MyTooltip.Trigger = MyTooltipTrigger

export default MyTooltip
