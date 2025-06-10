"use client"
import My from "components/My"
import * as S from "./styles"
import SearchBar from "components/SearchBar"
import Product from "components/Product"
export const mockProducts = [
  {
    name: "Desinfetante Cif Hortifruti 4X4.76L",
    price: 193.88,
    image: "/images/mock/1.png",
  },
  {
    name: "Amaciante Comfort Concentrado Pro 5L",
    price: 95.88,
    image: "/images/mock/2.png",
  },
  {
    name: "Limpador Cif Peróxido Pro 5L",
    price: 120.29,
    image: "/images/mock/3.png",
  },
  {
    name: "Amaciante Comfort Concentrado Pro 7L",
    price: 193.88,
    image: "/images/mock/4.png",
  },
  {
    name: "Sabão em Pó AP Brilhante Pro 4Kg",
    price: 72.99,
    image: "/images/mock/5.png",
  },
  {
    name: "Amaciante Comfort Concentrado Pro 20L",
    price: 598.74,
    image: "/images/mock/6.png",
  },
  {
    name: "Lava Roupas Líq. Omo Lavanderia Pro 7L",
    price: 97.75,
    image: "/images/mock/7.png",
  },
  {
    name: "Detergente Líq. Bilhante S/P 7L",
    price: 94.63,
    image: "/images/mock/8.png",
  },
]
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
