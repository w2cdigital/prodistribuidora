"use client"
import My from "components/My"
import SVG from "components/SVG"
import Image from "next/image"
import * as S from "./styles"
import Link from "next/link"
const state = "offline" as "online" | "offline"

function Header() {
  return (
    <S.HeaderWrapper>
      <div>
        <nav>
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
          <ul>
            <li>
              <My.Button.Link href={"/"} >
                Início
              </My.Button.Link>
            </li>
            <li>
              <My.Button.Link href={"/nossa-empresa"} >
                Nossa Empresa
              </My.Button.Link>
            </li>
            <li>
              <My.Button.Link href={"/catalogo"} >
                Catálogo de Produtos
              </My.Button.Link>
            </li>
            <li>
              <My.Button.Link href={"/parceiros"} >
                Parceiros
              </My.Button.Link>
            </li>
            <li>
              <My.Button.Link href={"/contato"} >
                Contato
              </My.Button.Link>
            </li>

          </ul>
          <SVG icon="Menu" />
        </nav>
        {state === "online" && <section>
          <p>
            <span>
              Olá Nome Pessoa
              <br />
              Você está online!
            </span>
          </p>
          <My.Button.Link href={"/"} className="cart">
            <SVG icon="Cart" />
            <p>0 itens</p>
          </My.Button.Link>
        </section>}
        {state === "offline" && <section>
          <p>
            <span>
              Faça o seu login
              <br />
              ou <Link href={"/cadastro"}>CADASTRE-SE</Link>
            </span>
          </p>
          <My.Button.Link href={"/login"} className="cart">
            <SVG icon="Avatar" />
            <p>Login</p>
          </My.Button.Link>
        </section>
        }
      </div>
    </S.HeaderWrapper>
  )
}

export default Header
