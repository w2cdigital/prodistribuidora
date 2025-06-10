"use client"
import styled, { css } from "styled-components"

export const SearchBar = styled.div(
  () => css`
    background: #edf2f6;
    height: 100px;
    display: flex;
    .category {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 300px;
      gap: 1rem;
      .Menu {
        fill: #2b2b2b;
      }
      &:hover {
        text-decoration: none;
      }
    }
    .search {
      background: #d9e1e6;
      width: 100%;
      height: 100%;
      padding: 0 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        width: 100%;
        input {
          height: 50px;
          width: 100%;
          border-radius: 2rem;
          background-color: var(--white);
          &::placeholder {
            color: var(--grey200);
          }
        }
      }
    }
    .seal {
      display: flex;
      padding: 0 1rem;
      align-items: center;
      gap: 1rem;
      min-width: 300px;
      p {
        font-weight: 500;
        color: var(--primary);
      }
      > img {
        width: 76px;
        height: auto;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      height: 300px;
      .search,
      .seal,
      .category {
        height: 100px;
        justify-content: center;
      }
      .search {
        padding: 0 1rem;
      }
    }
  `,
)
