import styled, { css } from "styled-components"
import { InputStyle, MoreButtonStyle } from "../styles"

export const MonthPickerStyle = styled.div(
  () => css`
    ${InputStyle}
    .react-aria-SelectButton {
      ${MoreButtonStyle}
    }
  `,
)

export const MonthPickerWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0.5rem 0 0.5rem;
      > span {
        font-size: 1.1rem;
      }
      > button {
        height: 1.5rem;
        width: 1.5rem;
        padding: 0;
        font-size: 0.5rem;
      }
    }
  `,
)

export const MonthGrid = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    padding: 1rem;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: 0.2s;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.2rem;
      text-transform: capitalize;
      &:hover,
      &.selected {
        background: var(--primary);
        color: var(--white);
      }
    }
  `,
)
