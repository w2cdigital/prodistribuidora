import { InputStyle, MoreButtonStyle, PopoverStyle } from "components/My/styles"
import {
  Select as AriaSelect,
  Popover as AriaPopover,
} from "react-aria-components"
import styled, { css } from "styled-components"

export const Select = styled(AriaSelect)(
  () => css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    color: var(--grey1000);
    ${InputStyle}
    .react-aria-SelectButton {
      justify-content: space-between;
      display: flex;
      cursor: pointer;
      padding-right: 2rem;
      &[aria-expanded="true"] {
        border-color: var(--primary);
      }
      .react-aria-SelectValue {
        &[data-placeholder] {
          color: var(--grey500);
        }
      }
      ${MoreButtonStyle}
      &[data-disabled="true"] {
        cursor: default;
      }
    }
  `,
)

export const Popover = styled(AriaPopover)(
  () => css`
    ${PopoverStyle}
  `,
)
