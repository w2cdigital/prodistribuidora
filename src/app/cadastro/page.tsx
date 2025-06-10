"use client"
import { Form } from "react-aria-components"
import SearchBar from "components/SearchBar"
import My from "components/My"
import * as S from "./styles"
import Link from "next/link"

function LoginPage() {
  return (
    <S.CadastroWrapper>
      <SearchBar />
      <div className="content">
        <section>
          <h2>Cadastro</h2>
          <p>
            Preencha o formulário abaixo e faça o seu cadastro.
          </p>
        </section>
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="sec">
            <My.TextField label="Nome" name="name" />
            <My.TextField label="Empresa" name="company" />
          </div>
          <div className="sec">
            <My.TextField label="E-mail" name="email" type="email" />
            <My.TextField label="Telefone" tag="Mask" maskType="phone" name="phone" />
          </div>
          <div className="sec">
            <My.TextField label="CPF" tag="Mask" maskType="cpf" name="document" />
            <My.DatePicker label="Data Nascimento" name="birthday" />
          </div>
          <div className="sec">
            <My.TextField label="Senha" name="password" type="password"/>
            <My.TextField label="Repetir senha" name="password-repeat" type="password"/>
          </div>
          <div className="sec">
            <My.TextField label="CEP" tag="Mask" maskType="cep" name="document" />
            <My.TextField label="Logradouro" name="log" />
          </div>
          <div className="sec">
            <My.TextField label="Complemento" name="complement" />
            <My.TextField label="Bairro" name="district" />
          </div>
          <div className="sec">
            <My.TextField label="Estado" name="state" />
            <My.TextField label="Cidade" name="city" />
          </div>
            <My.TextField label="Ponto de Referência" name="reference" />
          <My.Button type="submit">Salvar</My.Button>
        </Form>
      </div>
    </S.CadastroWrapper>
  )
}
export default LoginPage
