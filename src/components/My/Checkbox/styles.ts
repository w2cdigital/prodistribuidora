import { Checkbox as AriaCheckbox } from "react-aria-components"
import styled, { css } from "styled-components"
import { IColorNames } from "styles/colors"

export const Checkbox = styled(AriaCheckbox)<{ color: IColorNames }>(
  ({ color }) => css`
    --component-color: var(--${color});
    --component-color--10: hsl(from var(--component-color) h s calc(l - 10));
    display: flex;
    align-items: center;
    gap: 0.571rem;
    font-size: 1rem;
    color: var(--grey1000);
    cursor: pointer;
    forced-color-adjust: none;

    .checkbox {
      width: 1.5rem;
      height: 1.5rem;
      border: 2px solid var(--grey1000);
      border-radius: 4px;
      transition:
        0.2s border-color,
        0.2s background-color;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      width: 1rem;
      height: 1rem;
      fill: none;
      stroke: var(--white);
      stroke-width: 3px;
      stroke-dasharray: 22px;
      stroke-dashoffset: 66;
      transition: all 200ms;
    }

    &[data-pressed] .checkbox {
      border-color: var(--grey900);
    }

    &[data-focus-visible] .checkbox {
      outline: 2px solid var(--component-color);
      outline-offset: 2px;
    }

    &[data-selected],
    &[data-indeterminate] {
      .checkbox {
        border-color: var(--component-color);
        background: var(--component-color);
      }

      &[data-pressed] .checkbox {
        border-color: var(--component-color--10);
        background: var(--component-color--10);
      }

      svg {
        stroke-dashoffset: 44;
      }
    }
    &[data-disabled="true"] {
      cursor: default;
    }

    &[data-indeterminate] {
      & svg {
        stroke: none;
        fill: var(--white);
      }
    }
  `,
)
