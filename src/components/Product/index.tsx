"use client"
import Image from "next/image"
import * as S from "./styles"
import My from "components/My"
import SVG from "components/SVG"
import { formatMoney } from "utils/format"

function Product({ name, price, image }) {
  return (
    <S.ProductWrapper>
      <Image
        unoptimized
        width={0}
        height={0}
        src={image}
        sizes="100vw"
        alt={name}
      />
      <p>{name}</p>
      <b>
        {formatMoney(price)} <span>un</span>
      </b>
      <My.Button>
        <SVG icon="Cart" />
        <span>Adicionar ao Carrinho</span>
      </My.Button>
    </S.ProductWrapper>
  )
}

export default Product
