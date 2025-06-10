"use client"
import Image from "next/image"
import * as S from "./styles"
import SVG from "components/SVG"
import Link from "next/link"

export default function Footer() {
  return (
    <S.Footer>
      <Link href="/">
        <Image
          unoptimized
          width={0}
          height={0}
          src={"/images/logo.png"}
          sizes="100vw"
          alt="Pro Distribuidora"
        />
      </Link>

      <div>
        <p>Formas de pagamento</p>
        <ul>
          <li><SVG icon="Mastercard" /></li>
          <li><SVG icon="Visa" /></li>
          <li><SVG icon="Pix" /></li>
        </ul>
      </div>
      <div>
        <p>Siga-nos nas redes sociais:</p>
        <ul>
          <li><SVG icon="Instagram" /></li>
          <li><SVG icon="Facebook" /></li>
        </ul>
      </div>
      <div>
        <p>
          Travessa We 11, 392 - Cidade Nova I
          <br />
          Ananindeua - PA
          <br />
          CEP: 67.130-130
        </p>
      </div>
      <span>© 2025 Pro Distribuidora. Todos os direitos reservados.</span>

    </S.Footer>
  )
}
