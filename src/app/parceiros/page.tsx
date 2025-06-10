"use client"
import * as S from "./styles"
import SearchBar from "components/SearchBar"
function ParceirosPage() {
  return (
    <S.ParceirosWrapper>
      <SearchBar />
      <div className="content">

        <section>
          <h2>Parceiros</h2>
        </section>
        
      </div>
    </S.ParceirosWrapper>
  )
}
export default ParceirosPage
