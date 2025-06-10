import styled, { css } from "styled-components"

export const ProductWrapper = styled.div(
  () => css`
    height: 460px;
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid #d9e1e6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > img {
      width: 196px;
      height: 196px;
    }
    > p {
      color: #1e1e1e;
      max-width: 196px;
      text-align: center;
      font-size: 1.2rem;
    }
    > b {
      font-size: 2rem;
      letter-spacing: -1px;
    }
    > button[data-variant="fill"] {
      display: flex;
      align-items: center;
      height: 66px;
      gap: 2rem;
      border-radius: 15px;
      padding: 1.5rem;
      .Cart {
        fill: var(--secondary);
        width: 2rem;
        height: 2rem;
      }
      > span {
        text-align: start;
        color: var(--white);
      }
    }
  `,
)
