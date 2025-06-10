import { TimeField as AriaTimeField } from "react-aria-components"
import styled, { css } from "styled-components"
import { InputStyle } from "../styles"

export const TimeField = styled(AriaTimeField)(
  () => css`
    ${InputStyle}
    .react-aria-DateGroup {
      display: flex;
    }
  `,
)
