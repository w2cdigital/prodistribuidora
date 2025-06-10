import styled from "styled-components"
import { css } from "styled-components"

export const Card = styled.div(
  () => css`
    border: 1px solid var(--grey300);
    border-radius: 0.2rem;
    > *:not(:last-child) {
      border-bottom: 1px solid var(--grey300);
    }
  `,
)

const SegmentCSS = css`
  display: flex;
  padding: 0.5rem;
`

export const CardHeader = styled.header(
  () => css`
    ${SegmentCSS}
    justify-content: space-between;
    background-color: var(--grey150);
    font-weight: bold;
  `,
)

export const CardSpaced = styled.div(
  () => css`
    ${SegmentCSS}
    justify-content: space-between;
    .elipsis {
      max-width: 12rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `,
)

export const CardCentered = styled.div(
  () => css`
    ${SegmentCSS}
    justify-content: center;
  `,
)
