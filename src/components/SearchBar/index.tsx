"use client"
import * as S from "./styles"
import My from "components/My"
import SVG from "components/SVG"
import Image from "next/image"

function SearchBar() {
  return (
    <S.SearchBar>

      <My.Button.Link href={"/"} className="category">
        <SVG icon="Menu" />
        <p>Categorias</p>
      </My.Button.Link>
      <div className="search">
        <My.TextField search placeholder="Encontrar produto..." />
      </div>
      <div className="seal">
        <Image
          unoptimized
          width={0}
          height={0}
          src={"/images/unilever.png"}
          sizes="100vw"
          alt="Unilever"
        />
        <p>
          Produtos de Higiene
          <br />
          e Limpeza para quem
          <br />
          leva o negócio a sério!
        </p>

      </div>

    </S.SearchBar>
  )
}

export default SearchBar
