"use client"

import styled, { css } from "styled-components"

export const HomeWrapper = styled.div(
  () => css`
    margin-top: -80px;
    .Banner {
      min-height: calc(100vh - 100px);
      position: relative;
      .Overlay {
        display: flex;
        width: 100%;
        position: absolute;
        z-index: 0;
        > img {
          width: 100%;
          min-height: calc(100vh - 100px);
          display: flex;
          object-fit: cover;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: calc(100vh - 100px);
          background: linear-gradient(
            255.55deg,
            hsla(from var(--primary) h s l / 0.2) 26.17%,
            var(--primary) 105.56%
          );
        }
      }
      > section {
        position: absolute;
        z-index: 1;
        margin-top: 80px;
        width: 100%;
        height: calc(100% - 80px);
        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 900px;
          width: 100%;
          height: 100%;
          gap: 3rem;
          margin: auto;
          p {
            display: flex;
            flex-direction: column;
            * {
              color: var(--white);
            }
            .label {
              font-size: 24px;
            }
            b {
              line-height: 8rem;
              font-size: 96px;
              font-weight: 400;
              > span {
                font-size: 96px;
                font-weight: bold;
              }
            }
            .desc {
              font-size: 36px;
              line-height: 3rem;
            }
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 275px;
            height: 66px;
            font-size: 24px;
            border-width: 3px;
            font-weight: bold;
            &:hover {
              color: var(--primary);
              text-decoration: none;
            }
          }
        }
      }
    }
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
      p {
        color: #788c9a;
      }
    }
    .products {
      display: grid;
      flex-direction: column;
      max-width: 1240px;
      margin: auto;
      padding: 4rem 1rem;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 2rem;
    }
    .cards {
      background: #edf2f6;
      > div {
        display: flex;
        margin: auto;
        padding: 4rem 1rem;
        max-width: 1240px;
        flex-direction: column;
        gap: 4rem;
        > p {
          display: flex;
          align-items: center;
          gap: 1rem;
          > img {
            width: 145px;
            height: auto;
          }
          > span {
            color: #788c9a;
          }
        }
        > ul {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0;
          margin: 0;
          > li {
            list-style: none;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 450px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            border-radius: 2rem;
            > h3 {
              font-weight: 700;
              font-size: 36px;
              color: var(--white);
              text-align: center;
            }
            > p {
              color: var(--white);
              text-align: center;
            }
            > a {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 275px;
              height: 66px;
              font-size: 24px;
              margin-top: 6rem;
              font-weight: bold;
              &:hover {
                color: var(--black);
                text-decoration: none;
              }
            }
          }
        }
      }
    }
    .testimony {
      display: flex;
      max-width: 1240px;
      margin: auto;
      padding: 4rem 1rem;
      gap: 2rem;
      align-items: center;
      > img {
        width: 233px;
        height: 233px;
      }
      > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        > p,
        > span,
        > span > b {
          color: #788c9a;
        }
      }
    }
    @media (max-width: 768px) {
      margin-top: -160px;
      .Banner {
        > section {
          margin-top: 160px;
          height: calc(100% - 160px);
          > div {
            text-align: center;
            a {
              margin: 0 auto;
            }
          }
        }
      }
      .cards {
        > div {
          > p {
            flex-direction: column;
          }
        }
      }
      .testimony {
        flex-direction: column;
        > div {
          align-items: center;
          text-align: center;
        }
      }
    }
  `,
)
