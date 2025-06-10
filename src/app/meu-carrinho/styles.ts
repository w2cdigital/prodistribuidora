"use client"

import styled, { css } from "styled-components"

export const MeuCarrinhoWrapper = styled.div(() => css`
  .content{
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    margin: auto;
    padding: 4rem 1rem;
    gap: 1rem;
    height: 100%;
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
  }
`)

export const Menu = styled.div(() => css`
  display: flex;
  border: 1px solid #BEC2C5;
  border-radius: 20px;
  min-height: calc(100vh - 180px - 8rem - 95px);
  >aside{
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: #EDF2F6;
    width: 325px;
    padding: 20px 0;
    >button[data-variant="fill"]{
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0 20px;
      border-radius: 0;
      border: 0px;
      background: #EDF2F6;
      border: none;
      gap: 1rem;
      .Avatar, .Basket, .Star{
        fill: #788C9A;
      }
      .Historic{
        stroke: #788C9A;
      }
      >span{
        color: #788C9A;
      }
      &:hover{
        background: #D9E1E6;
        .Avatar, .Basket, .Star{
          fill: #1E1E1E;
        }
        .Historic{
          stroke: #1E1E1E;
        }
        >span{
          color: #1E1E1E;
        }
      }
      &.active{
        background: #ffffff;
        .Avatar, .Basket, .Star{
          fill: var(--primary);
        }
        .Historic{
          stroke: var(--primary);
        }
        >span{
          color: var(--primary);
        }
      }
    }
  }
`)