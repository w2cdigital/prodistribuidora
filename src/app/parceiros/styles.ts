"use client"

import styled, { css } from "styled-components"

export const ParceirosWrapper = styled.div(() => css`
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
}
`)