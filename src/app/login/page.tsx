"use client"
import { Form } from "react-aria-components"
import SearchBar from "components/SearchBar"
import My from "components/My"
import * as S from "./styles"
import Link from "next/link"

function LoginPage() {
  return (
    <S.LoginWrapper>
      <SearchBar />
      <div className="content">
        <section>
          <h2>Login</h2>
          <p>
            Já é cliente? Faça o seu login abaixo:
          </p>
        </section>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="sec">
            <My.TextField label="Seu e-mail" name="email" type="email" />
            <My.TextField label="Sua senha" name="password" type="password" />
          </div>
          <div className="sec">
            <My.Button type="submit">Entrar</My.Button>
            <My.Button.Link variant="outline" href="/cadastro">Ainda não sou cliente</My.Button.Link>
          </div>
        </Form>
        <p>
          Esqueceu a senha? <Link href="/">Clique aqui.</Link>
        </p>
      </div>
    </S.LoginWrapper>
  )
}
export default LoginPage
