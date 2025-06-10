"use client"

import styled, { css } from "styled-components"

export const CatalogoWrapper = styled.div(() => css`
.content{
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: auto;
  padding: 4rem 1rem;
  gap: 1rem;
  >section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    >h2{
      text-align: center;
      font-size: 40px;
    }
    >p{
      max-width: 720px;
      text-align: center;
      color:     #1E1E1E;
    }
  }
  p{
    color:     #788C9A;
  }
  >ul{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0;
    margin: 0;
    >li{
      list-style: none;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      border-radius: 2rem;
      >a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-weight: bold;
        >h3{
          font-size: 24px;
          color: var(--white);

        }
        &:hover{
          color: var(--black);
          text-decoration: none;
        }
      }
    }
  }
}
.products{
  display: grid;
  flex-direction: column;
  max-width: 1240px;
  margin: auto;
  padding: 4rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
}
`)