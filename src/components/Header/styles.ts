"use client"
import styled, { css } from "styled-components"

export const HeaderWrapper = styled.header(
  () => css`
   position: sticky;
   top: 0;
   background: hsla(from var(--primary) h s l / 0.9);
   height: 80px;
   z-index: 2;
   >div{
     max-width: 1440px;
     height: 100%;
     padding: 0 100px;
     margin: auto;
     display: flex;
     >nav{
      >a{
        >img{
          height: 44px;
          width: auto;
          margin: auto 0;
        }
      }
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        >ul{
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: center;
          width: 100%;
          li{
            list-style: none;
            text-align: center;
            a[data-variant="link"]{
              letter-spacing: 2px;
              color: var(--white);
              text-transform: uppercase;
            }
          }
        }
        .Menu{
          fill: var(--white);
        }
      }
      >section{
        display: flex;
        >p{
         min-width: 170px;
         padding: 10px;
         display: flex;
         justify-content: center;
         align-items: center;
         >span{
           color: var(--white);
           >a{
             color: var(--secondary);
           }
         }
        }
       .cart{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 80px;
        max-width: 80px;
        height: 80px;
        justify-content: center;
        align-items: center;
        background: var(--primary50);
        border-radius: 0px;
        .Cart, .Avatar{
          fill: var(--secondary);
        }
        >p, >a{
          color: var(--white);
        }
        &:hover{
          text-decoration: none;
        }
       }
     }
   }
   @media (min-width: 769px) {
     >div{
       >nav{
        .Menu{
          display: none;
        }
       }
     }
   }
   @media (max-width: 768px) {
     height: 160px;
     >div{
       flex-direction: column;
       padding: 0px;
       >nav{
         height: 80px;
         padding: 0px 2rem;
        display: flex;
        justify-content: space-between;
          >ul{
            display: none;
          }
       }
       >section{
        justify-content: center;
        background: var(--primary50);
       }
     }
   }
  `,
)
