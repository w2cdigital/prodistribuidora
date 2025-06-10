"use client"
import My from "components/My"
import useCarrinhoActions from "./actions"
import * as S from "./styles"
import SearchBar from "components/SearchBar"
import { getClassName } from "utils/className"
import SVG from "components/SVG"

function ParceirosPage() {
  const { tab, setTab } = useCarrinhoActions()
  return (
    <S.MeuCarrinhoWrapper>
      <SearchBar />
      <div className="content">

        <section>
          <h2>Meu Carrinho</h2>
          <p>
            Confira abaixo os produtos do seu carrinho.
          </p>
        </section>
        <S.Menu>
          <aside>
            <My.Button
              className={getClassName([tab === "conta" && "active"])}
              onPress={() => setTab("conta")}
            >
              <SVG icon="Avatar" />
              <span>MINHA CONTA</span>
            </My.Button>
            <My.Button
              className={getClassName([tab === "carrinho" && "active"])}
              onPress={() => setTab("carrinho")}
            >
              <SVG icon="Basket" />
              <span>Meu carrinho</span>
            </My.Button>
            <My.Button
              className={getClassName([tab === "historico" && "active"])}
              onPress={() => setTab("historico")}
            >
              <SVG icon="Historic" />
              <span>Histórico</span>
            </My.Button>
            <My.Button
              className={getClassName([tab === "favoritos" && "active"])}
              onPress={() => setTab("favoritos")}
            >
              <SVG icon="Star" />
              <span>Favoritos</span>
            </My.Button>
          </aside>
          <article>

          </article>
        </S.Menu>
      </div>
    </S.MeuCarrinhoWrapper>
  )
}
export default ParceirosPage
