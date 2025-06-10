import { lighten, darken } from "polished"
import styled, { css } from "styled-components"
import { IToasTType } from "."

const CardColor = {
  success: "green",
  error: "red",
  info: "blue",
  loading: "black",
}
const CardBackground = {
  success: (color) => lighten(0.35, color),
  error: (color) => lighten(0.2, color),
  info: (color) => lighten(0.4, color),
  loading: (color) => lighten(0.35, color),
}

export const ToastContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  padding: 1rem;
  gap: 0.5rem;
  display: flex;
  height: 100vh;
  width: 332px;
  flex-direction: column;
  background: blue;
  z-index: 10;
  visibility: hidden;
`

export const Card = styled.div<{ type: IToasTType }>(
  ({ theme: { colors }, type }) => css`
    width: 300px;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 8px ${colors.black}33;
    background: ${CardBackground[type]?.(colors[CardColor[type]])};
    display: flex;
    visibility: visible;
    gap: 0.5rem;
    position: relative;
    > section {
      display: flex;
      align-items: center;
    }
    h6,
    .Icon {
      color: ${darken(0.1, colors[CardColor[type]])};
    }
    .close {
      position: absolute;
      cursor: pointer;
      top: 0.5rem;
      right: 0.5rem;
    }
    .Spinner {
      border-color: ${lighten(0.2, colors.black)};
      border-left-color: ${colors.black};
    }
    > div {
      display: flex;
      flex-direction: column;
      > span {
        color: ${colors[CardColor[type]]};
      }
    }
  `,
)
