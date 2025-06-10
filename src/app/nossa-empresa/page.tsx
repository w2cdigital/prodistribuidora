import Image from "next/image"
import * as S from "./styles"
import SearchBar from "components/SearchBar"
function NossaEmpresaPage() {
  return (
    <S.NossaEmpresaWrapper>
      <SearchBar />
      <div className="content">
        <section>
          <h2>Nossa Empresa</h2>
          <p>
            Nosso compromisso é levar aos nossos clientes o que há de mais
            eficiente e inovador no mercado, contribuindo para ambientes mais
            limpos, seguros e saudáveis.
          </p>
        </section>
        <Image
          unoptimized
          width={0}
          height={0}
          src={"/images/galpao.jpg"}
          sizes="100vw"
          alt="Galpão"
        />
        <p>
          A Pro Distribuidora é uma empresa especializada na distribuição de
          soluções profissionais em higiene e limpeza, com atuação consolidada
          nos estados do Pará e Amapá. Com foco em qualidade, eficiência
          operacional e atendimento personalizado, a empresa se destaca como
          distribuidora oficial da linha Unilever PRO, reconhecida por sua
          performance superior no setor institucional.
        </p>

        <p>
          Com um portfólio completo que inclui marcas como OMO, Cif, Brilhante e
          Comfort, a Pro Distribuidora oferece produtos desenvolvidos para
          atender às demandas técnicas de ambientes profissionais, promovendo
          limpeza eficaz, economia de recursos e conformidade com os mais altos
          padrões de higiene e sustentabilidade.
        </p>

        <p>
          Contamos com uma estrutura logística eficiente e uma equipe capacitada
          para orientar nossos clientes na escolha das melhores soluções, sempre
          com base em critérios técnicos, de segurança e custo-benefício. Nossa
          missão é apoiar empresas e instituições na implementação de práticas
          de limpeza profissional que contribuam para ambientes mais seguros,
          saudáveis e produtivos.
        </p>

        <p>
          A Pro Distribuidora é o parceiro ideal para organizações que valorizam
          qualidade, responsabilidade e resultados consistentes no cuidado com
          seus ambientes.
        </p>
      </div>
    </S.NossaEmpresaWrapper>
  )
}
export default NossaEmpresaPage
