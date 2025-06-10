import styled, { css } from "styled-components"

export const Printer = styled.div(
  () => css`
    position: fixed;
    top: -9999999px;
    left: -9999999px;
    z-index: -9999999;
  `,
)

export const PrinterContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    &.portrait {
      min-height: 1120px;
      min-width: max(100%, 790px);
    }
    &.landscape {
      min-width: 1120px;
      min-height: max(100%, 790px);
    }
  `,
)

export const Document = styled.div(
  () => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .item {
      display: flex;
      flex-direction: column;
    }
    .desc {
      font-size: 0.8rem;
      &::before {
        content: " - ";
      }
    }
    @media print {
      @page {
        size: A4;
        margin: 2rem;
      }
    }
  `,
)

export const SpaceBetween = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
)

export const Logo = styled.div(
  () => css`
    > img {
      width: 260px;
      height: auto;
    }
    > * {
      width: auto;
    }
  `,
)

export const Title = styled.div(
  () => css`
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  `,
)

export const Center = styled.div(
  () => css`
    text-align: center;
  `,
)
export const Table = styled.div(
  () => css`
    th,
    td {
      font-size: 12px;
      word-break: keep-all;
    }
    .totalInfo {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      background: hsla(from var(--primary) h s l / 0.2);
      > div {
        display: flex;
        gap: 0.5rem;
        > div {
          display: flex;
          gap: 0.5rem;
          > p {
            font-weight: bold;
          }
          > p,
          > span {
            font-size: 12px;
          }
        }
      }
    }
  `,
)

export const Line = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    width: 100%;

    .text {
      display: flex;
      gap: 0.2rem;
    }

    .line {
      height: 1px;
      width: 100%;
      background-color: var(--grey150);
    }
  `,
)

export const Gap = styled.div<{ gap }>(
  ({ gap }) => css`
    display: flex;
    height: ${gap};
  `,
)

export const Signature = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap: 1rem;
    .sign {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 0.1rem;
      width: 100%;
      &.date {
        width: 12rem;
      }
      .line {
        height: 1px;
        width: 100%;
        background-color: var(--grey150);
      }
      .label {
        text-align: center;
        white-space: pre-line;
        &.hidden {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  `,
)

export const CardInfo = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    > div {
      display: flex;
      gap: 0.2rem;
    }
    * {
      font-size: 0.9rem;
    }
  `,
)
