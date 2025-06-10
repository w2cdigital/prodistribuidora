import StyledComponentsRegistry from "styles/registry"
import QueryProvider from "./query"
import Storage from "./storage"
import Theme from "./theme"
import NextAuthSessionProvider from "./sessionProvider"
import { GlobalStyle } from "app/styles"
import { AsideProvider } from "components/AsideMenu/client"
import { GlobalPropsProvider } from "./globalProps"
import { PwaProvider } from "components/pwa"

async function GlobalProvider({
  children,
}) {
  return (
    <QueryProvider>
      <Storage>
        <StyledComponentsRegistry>
          <Theme>
            <GlobalStyle />
            {/* <NextAuthSessionProvider> */}
              <PwaProvider>
                <GlobalPropsProvider>
                  <AsideProvider>{children}</AsideProvider>
                </GlobalPropsProvider>
              </PwaProvider>
            {/* </NextAuthSessionProvider> */}
          </Theme>
        </StyledComponentsRegistry>
      </Storage>
    </QueryProvider>
  )
}
export default GlobalProvider
