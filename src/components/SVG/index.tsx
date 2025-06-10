"use client"
import { SVGAttributes } from "react"
import * as Icons from "./icons"

function SVG({
  icon,
  ...props
}: {
  icon: keyof typeof Icons
} & SVGAttributes<SVGSVGElement>) {
  const SVGElement = Icons[icon]
  return <SVGElement {...props} />
}

export default SVG
