import {
  Popover as AriaPopover,
  MenuItem as AriaMenuItem,
} from "react-aria-components"
import styled, { css } from "styled-components"
import { PopoverStyle } from "../styles"
import { IColorNames } from "styles/colors"

export const Popover = styled(AriaPopover)<{ color: IColorNames }>(
  ({ color }) => css`
    --component-color: var(--${color});
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    ${PopoverStyle}
  `,
)
export const MenuItem = styled(AriaMenuItem)(
  () => css`
    padding: 0.5rem 1rem;
    cursor: pointer;
    &[data-hovered] {
      background: var(--component-color);
      color: var(--white);
    }
  `,
)
