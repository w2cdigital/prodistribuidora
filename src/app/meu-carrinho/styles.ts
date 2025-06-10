"use client"

import styled, { css } from "styled-components"

export const MeuCarrinhoWrapper = styled.div(
  () => css`
    .content {
      display: flex;
      flex-direction: column;
      max-width: 1240px;
      margin: auto;
      padding: 4rem 1rem;
      gap: 1rem;
      height: 100%;
      > section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        > h2 {
          text-align: center;
          font-size: 40px;
        }
        > p {
          max-width: 720px;
          text-align: center;
          color: #1e1e1e;
        }
      }
      p {
        color: #788c9a;
      }
    }
  `,
)

export const Menu = styled.div(
  () => css`
    display: flex;
    border: 1px solid #bec2c5;
    border-radius: 20px;
    min-height: calc(100vh - 180px - 8rem - 95px);
    > aside {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background: #edf2f6;
      width: 325px;
      padding: 20px 0;
      > button[data-variant="fill"] {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 20px;
        border-radius: 0;
        border: 0px;
        background: #edf2f6;
        border: none;
        gap: 1rem;
        .Avatar,
        .Basket,
        .Star {
          fill: #788c9a;
        }
        .Historic {
          stroke: #788c9a;
        }
        > span {
          color: #788c9a;
        }
        &:hover {
          background: #d9e1e6;
          .Avatar,
          .Basket,
          .Star {
            fill: #1e1e1e;
          }
          .Historic {
            stroke: #1e1e1e;
          }
          > span {
            color: #1e1e1e;
          }
        }
        &.active {
          background: #ffffff;
          .Avatar,
          .Basket,
          .Star {
            fill: var(--primary);
          }
          .Historic {
            stroke: var(--primary);
          }
          > span {
            color: var(--primary);
          }
        }
      }
    }
  `,
)
