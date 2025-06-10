"use client"
import Footer from "components/Footer"
import Header from "components/Header"
import { ModalOverlay } from "components/My/Dialog/styles"
import { Poppins } from "next/font/google"
import styled, { createGlobalStyle, css } from "styled-components"
import { colorNames } from "styles/colors"
import { GlobalScroll } from "styles/scroll"

export const Font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export const GlobalStyle = createGlobalStyle(
  ({ theme: { colors } }) => css`
    :root {
      ${colorNames.map((color) => `--${color}: ${colors[color]};`).join("\n")}
    }
    ${ModalOverlay}

    * {
      font-family: ${Font.style.fontFamily};
      font-style: normal;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-size: 14px;
      color: var(--grey1000);
    }
    .avatar-wrapper {
      padding: 0.5rem;
      border-radius: 100%;
      background: var(--grey300);
    }

    .react-aria-FieldError {
      color: var(--red);
      font-size: 0.8rem;
    }

    html,
    body {
      max-width: 100vw;
      min-height: 100vh;
      background: var(--grey0);
      ${GlobalScroll}
    }
    html {
      min-height: 100vh;
    }

    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 50%, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    @keyframes fadeOutDown {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
    }
    @keyframes modal-fade {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes modal-zoom {
      from {
        transform: scale(0.8);
      }

      to {
        transform: scale(1);
      }
    }
  `,
)

export const WrapperPageNotFound = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;

    > h1 {
      margin-top: -2rem;
    }

    > p {
      color: var(--red);
      font-weight: bold;
      font-size: 13px;
    }

    > .Lottie {
      animation: fadeIn 1s ease-in-out;
    }
  `,
)

export const Main = styled.main(
  () => css`
    min-height: 100vh;
  `,
)

export function Layout({ children }) {
  return (
    <body>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </body>
  )
}
