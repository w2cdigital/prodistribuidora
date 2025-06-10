import styled, { css } from "styled-components"

export const Logo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    user-select: none;
    position: relative;
    margin: 2rem 0rem;
    > img {
      width: 150px;
      height: 120px;
    }
    > p {
      position: absolute;
      top: 5rem;
      text-align: center;
      width: 100%;
      > span {
        font-size: 1rem;
        &.MED {
          color: #090951;
        }
        &.TECH {
          font-weight: bold;
          color: #ea2086;
        }
      }
    }
    > span {
      color: var(--grey400);
      font-size: 0.45rem;
      text-align: center;
    }
  `,
)
