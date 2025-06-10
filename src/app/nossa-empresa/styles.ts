"use client"

import styled, { css } from "styled-components"

export const NossaEmpresaWrapper = styled.div(
  () => css`
    .content {
      display: flex;
      flex-direction: column;
      max-width: 1240px;
      margin: auto;
      padding: 4rem 1rem;
      gap: 1rem;
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
      > img {
        height: 540px;
        width: 100%;
        object-fit: cover;
        margin: 3rem auto;
        border-radius: 1rem;
      }
      p {
        color: #788c9a;
      }
    }
  `,
)
