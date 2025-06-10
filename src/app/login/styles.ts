"use client"

import styled, { css } from "styled-components"

export const LoginWrapper = styled.div(() => css`
.content{
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: auto;
  padding: 4rem 1rem;
  gap: 3rem;
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
  >form{
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 1rem;
    border: 1px solid var(--grey400);
    gap: 2rem;
    >*{
      width: 100%;
    }
    .sec{
      display: flex;
      gap: 1rem;
      >*{
        width: 100%;
      }
      >button{
       text-transform: uppercase;
      }
      >button, >a{
        border-radius: 2rem;
      }
    }
  }
  >p{
    color: #1E1E1E;
    margin: auto;
    >a{
      color: var(--primary);
      font-weight: bold;
    }
  }
}
@media (max-width: 768px) {
  .content{
    >form{
      .sec{
        flex-direction: column;
        gap: 2rem;
      }
    }
  }
}
`)