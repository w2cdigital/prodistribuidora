import { Popover as AriaPopover } from "react-aria-components"
import styled, { css } from "styled-components"
import { PopoverStyle } from "../styles"

export const Popover = styled(AriaPopover)(
  () => css`
    ${PopoverStyle}
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid var(--grey100);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  `,
)
