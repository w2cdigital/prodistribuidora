"use client"
import My from "components/My"
import SearchBar from "components/SearchBar"
import Product from "components/Product"
import { mockProducts } from "./mock"
import * as S from "./styles"

function CatalogoPage() {
  return (
    <S.CatalogoWrapper>
      <SearchBar />
      <div className="content">
        <section>
          <h2>Catálogo de Produtos</h2>
        </section>
        <ul>
          <li style={{ backgroundImage: "url(/images/comercio.png)" }}>
            <My.Button.Link color="white" variant="styleless" href="/">
              <h3>Comércio</h3>
            </My.Button.Link>
          </li>
          <li style={{ backgroundImage: "url(/images/lavanderias.png)" }}>
            <My.Button.Link color="white" variant="styleless" href="/">
              <h3>Lavanderias</h3>
            </My.Button.Link>
          </li>
          <li style={{ backgroundImage: "url(/images/restaurantes.png)" }}>
            <My.Button.Link color="white" variant="styleless" href="/">
              <h3>Restaurantes</h3>
            </My.Button.Link>
          </li>
        </ul>
      </div>
      <section className="products">
        {mockProducts.map((p) => (
          <Product key={p.name} {...p} />
        ))}
      </section>
    </S.CatalogoWrapper>
  )
}
export default CatalogoPage
