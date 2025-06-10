import { Switch as AriaSwitch } from "react-aria-components"
import styled, { css } from "styled-components"
import { IColorNames } from "styles/colors"

export const Switch = styled(AriaSwitch)<{ color: IColorNames }>(
  ({ color }) => css`
    --component-color: var(--${color});
    --component-color-10: hsl(from var(--component-color) h s calc(l + 10));
    display: flex;
    align-items: center;
    gap: 0.571rem;
    font-size: 1.143rem;
    forced-color-adjust: none;
    color: var(--grey1000);
    cursor: pointer;

    .indicator {
      width: 2rem;
      height: 1.143rem;
      border: 2px solid var(--grey300);
      background: var(--grey300);
      border-radius: 1.143rem;
      transition: all 200ms;

      &:before {
        content: "";
        display: block;
        width: 0.857rem;
        height: 100%;
        background: var(--white);
        border-radius: 16px;
        transition: all 200ms;
      }
    }

    &[data-pressed] .indicator {
      border-color: var(--component-color);

      &:before {
        background: var(--white);
      }
    }

    &[data-selected] {
      .indicator {
        border-color: var(--component-color);
        background: var(--component-color-10);

        &:before {
          background: var(--white);
          transform: translateX(100%);
        }
      }

      &[data-pressed] {
        .indicator {
          border-color: var(--component-color);
          background: var(--component-color);
        }
      }
    }
    &[data-disabled="true"] {
      cursor: default;
    }

    &[data-focus-visible] .indicator {
      outline: 2px solid var(--component-color);
      outline-offset: 2px;
    }
  `,
)
