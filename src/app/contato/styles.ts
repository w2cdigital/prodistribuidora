"use client"

import styled, { css } from "styled-components"

export const ContatoWrapper = styled.div(
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
      > form {
        display: flex;
        flex-direction: column;
        padding: 2.5rem;
        border-radius: 1rem;
        border: 1px solid var(--grey400);
        gap: 2rem;
        > * {
          width: 100%;
        }
        .sec {
          display: flex;
          gap: 1rem;
          > * {
            width: 100%;
          }
        }
        textarea {
          height: 100px;
        }
        > button {
          max-width: 415px;
          margin: auto;
          border-radius: 2rem;
          text-transform: uppercase;
        }
      }
    }
    @media (max-width: 768px) {
      .content {
        > form {
          .sec {
            flex-direction: column;
            gap: 2rem;
          }
        }
      }
    }
  `,
)
