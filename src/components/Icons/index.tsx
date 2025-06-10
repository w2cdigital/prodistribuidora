"use client"
// Styles
import styled from "styled-components"

// Helpers
import React from "react"
import { IProps } from "./types"

const Icon = styled.span`
  user-select: none;
  color: inherit;
  &:before {
    display: flex;
    content: attr(data-icon);
  }
`

export function MIcon({ icon, type, ...props }: IProps) {
  const types = {
    material: "material-icons",
    outlined: "material-icons-outlined",
    round: "material-icons-round",
    twoTone: "material-icons-two-tone",
    sharp: "material-icons-sharp",
    symbol: "material-symbols-outlined",
    symbolRound: "material-symbols-rounded",
    symbolSharp: "material-symbols-sharp",
  }
  return (
    <Icon
      {...props}
      className={`Icon ${types[type || "material"]} ${icon} ${
        props.className || ""
      }`}
      data-icon={icon}
    />
  )
}
