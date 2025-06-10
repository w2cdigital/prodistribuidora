"use client"
import { Form } from "react-aria-components"
import SearchBar from "components/SearchBar"
import My from "components/My"
import * as S from "./styles"

function ContatoPage() {
  return (
    <S.ContatoWrapper>
      <SearchBar />
      <div className="content">
        <section>
          <h2>Contato</h2>
          <p>Em caso de dúvidas e/ou sugestões, envie-nos uma mensagem.</p>
        </section>
        <Form onSubmit={(e) => e.preventDefault()}>
          <My.TextField label="Seu Nome" name="name" />
          <div className="sec">
            <My.TextField label="Seu e-mail" name="email" type="email" />
            <My.TextField
              label="Seu telefone"
              tag="Mask"
              maskType="phone"
              name="phone"
            />
          </div>
          <My.TextField tag="TextArea" label="Mensagem" name="message" />
          <My.Button type="submit">Enviar</My.Button>
        </Form>
      </div>
    </S.ContatoWrapper>
  )
}
export default ContatoPage
