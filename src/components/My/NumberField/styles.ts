import { InputStyle } from "components/My/styles"
import { IColorNames } from "styles/colors"
import { NumberField as AriaNumberField } from "react-aria-components"
import styled, { css } from "styled-components"

export const NumberField = styled(AriaNumberField)<{ color: IColorNames }>(
  ({ color }) => css`
    --component-color: var(--${color});
    --component-color-5: hsla(from var(--component-color) h s calc(l + 5));
    --component-color-10: hsla(from var(--component-color) h s calc(l + 10));
    display: flex;
    flex-direction: column;
    width: fit-content;
    color: var(--grey1000);
    ${InputStyle}
    .react-aria-Group {
      display: flex;
      > input {
        width: 100%;
        border-radius: 0;
        text-align: center;
      }
      > button {
        min-width: 2rem;
        border-radius: 0;
        height: 100%;
        padding: 0;
        &[slot="decrement"] {
          border-radius: 0.2rem 0 0 0.2rem;
        }
        &[slot="increment"] {
          border-radius: 0 0.2rem 0.2rem 0;
        }
      }
    }
  `,
)
