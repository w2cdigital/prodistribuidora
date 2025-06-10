"use client"
import Image from "next/image"
import SearchBar from "components/SearchBar"
import My from "components/My"
import * as S from "./styles"
import Product from "components/Product"
import { mockProducts } from "app/catalogo/page"
function HomePage() {
  return (
    <S.HomeWrapper>
      <div className="Banner">
        <div className="Overlay">
          <Image
            unoptimized
            width={0}
            height={0}
            src={"/images/cif.jpg"}
            sizes="100vw"
            alt=""
          />
        </div>
        <section>
          <div>
            <p>
              <span className="label">Desinfetante</span>
              <b>
                Cif <span>PRO</span>
              </b>
              <span className="desc">
                Imbatível na
                <br />
                desinfecção de
                <br />
                superfícies.
              </span>
            </p>
            <My.Button.Link color="white" variant="outline" href="/">
              Comprar
            </My.Button.Link>
          </div>
        </section>
      </div>
      <SearchBar />
      <section className="content">
        <section>
          <h2>Mais Vendidos</h2>
          <p>
            Garanta os produtos de higiene e limpeza mais vendidos do mercado
            para manter seu negócio sempre impecável.
          </p>
        </section>
      </section>
      <section className="products">
        {mockProducts.map((p) => (
          <Product key={p.name} {...p} />
        ))}
      </section>
      <section className="cards">
        <div>
          <p>
            <Image
              unoptimized
              width={0}
              height={0}
              src={"/images/unilever-pro.png"}
              sizes="100vw"
              alt="Unilever Pro"
            />
            <span>
              Somos distribuidores oficiais Unilever Pro, atendendo empresas e
              revendedores no PA e AP com produtos de higiene e limpeza de alto
              desempenho. Garantimos preços competitivos, entrega ágil e um
              portfólio completo para manter seu negócio sempre abastecido.
            </span>
          </p>

          <ul>
            <li style={{ backgroundImage: "url(/images/comercio.png)" }}>
              <h3>Comércio</h3>
              <p>
                Soluções eficazes, práticas e seguras
                <br />
                para manter ambientes sempre limpos,
                <br />
                agradáveis e prontos para receber
                <br />
                clientes.
              </p>
              <My.Button.Link color="white" variant="outline" href="/">
                Ver mais
              </My.Button.Link>
            </li>
            <li style={{ backgroundImage: "url(/images/lavanderias.png)" }}>
              <h3>Lavanderias</h3>
              <p>
                Performance profissional com máxima
                <br />
                eficiência na remoção de manchas,
                <br />
                cuidado com os tecidos e economia.
              </p>
              <My.Button.Link color="white" variant="outline" href="/">
                Ver mais
              </My.Button.Link>
            </li>
            <li style={{ backgroundImage: "url(/images/restaurantes.png)" }}>
              <h3>Restaurantes</h3>
              <p>
                Limpeza eficiente, higiene impecável e
                <br />
                praticidade no dia a dia da cozinha
                <br />
                profissional.
              </p>
              <My.Button.Link color="white" variant="outline" href="/">
                Ver mais
              </My.Button.Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="testimony">
        <Image
          unoptimized
          width={0}
          height={0}
          src={"/images/pablo.png"}
          sizes="100vw"
          alt="Pablo Costa"
        />
        <div>
          <p>
            Na Pro Distribuidora, temos orgulho em levar ao mercado soluções que
            realmente fazem a diferença. Trabalhar com a linha Unilever PRO nos
            permite oferecer aos nossos clientes produtos de alta performance,
            com qualidade comprovada e foco em eficiência. É uma parceria que
            reforça nosso compromisso com a excelência e com o sucesso dos
            nossos clientes.”
          </p>
          <span>
            — <b>Pablo Costa</b>, CEO da Pro Distribuidora.
          </span>
        </div>
      </section>
    </S.HomeWrapper>
  )
}
export default HomePage
