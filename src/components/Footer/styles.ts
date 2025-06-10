import styled, { css } from "styled-components"

export const Footer = styled.footer(
  () => css`
  height: 560px;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  >a{
    >img{
      height: 44px;
      width: auto;
      margin-bottom: 2rem;
    }
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    p{
      color: var(--white);
    }
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      li{
        list-style: none;
      }
    }
  }
  >span{
    color: #788C9A;
    text-align: center;
    max-width: 90vw;
  }
`,
)
