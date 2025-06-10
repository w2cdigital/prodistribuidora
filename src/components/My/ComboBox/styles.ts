"use client"
import { InputStyle, MoreButtonStyle, PopoverStyle } from "components/My/styles"
import {
  ComboBox as AriaComboBox,
  Popover as AriaPopover,
} from "react-aria-components"
import styled, { css } from "styled-components"

export const ComboBox = styled(AriaComboBox)(
  () => css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    color: var(--grey1000);
    ${InputStyle}
    .react-aria-ComboBoxButton {
      width: 100%;
      > input {
        width: 100%;
        padding-right: 2rem;
      }
      ${MoreButtonStyle}
    }
  `,
)

export const Popover = styled(AriaPopover)(
  () => css`
    ${PopoverStyle}
  `,
)
