import { Tooltip as AriaTooltip } from "react-aria-components"
import styled, { css } from "styled-components"
import { IColorNames } from "styles/colors"

export const Tooltip = styled(AriaTooltip)<{ color: IColorNames }>(
  ({ color }) => css`
    --component-color: var(--${color});
    box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
    border-radius: 4px;
    background: var(--component-color);
    color: var(--white);
    forced-color-adjust: none;
    outline: none;
    padding: 2px 8px;
    max-width: 150px;
    transform: translate3d(0, 0, 0);
    transition:
      transform 200ms,
      opacity 200ms;

    &[data-entering],
    &[data-exiting] {
      transform: var(--origin);
      opacity: 0;
    }

    &[data-placement="top"] {
      margin-bottom: 8px;
      --origin: translateY(4px);
    }

    &[data-placement="bottom"] {
      margin-top: 8px;
      --origin: translateY(-4px);
      & .react-aria-OverlayArrow svg {
        transform: rotate(180deg);
      }
    }

    &[data-placement="right"] {
      margin-left: 8px;
      --origin: translateX(-4px);
      & .react-aria-OverlayArrow svg {
        transform: rotate(90deg);
      }
    }

    &[data-placement="left"] {
      margin-right: 8px;
      --origin: translateX(4px);
      &.react-aria-OverlayArrow svg {
        transform: rotate(-90deg);
      }
    }

    &.react-aria-OverlayArrow svg {
      display: block;
      fill: var(--grey200);
    }
  `,
)
