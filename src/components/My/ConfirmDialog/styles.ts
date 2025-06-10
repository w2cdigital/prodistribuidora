import styled, { css } from "styled-components"

export const Confirmodal = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    > div {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
      > button {
        display: flex;
        justify-content: center;
        width: 7rem;
      }
    }
  `,
)
