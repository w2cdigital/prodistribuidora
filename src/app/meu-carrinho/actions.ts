import { useState } from "react"

type TTab = "conta" | "carrinho" | "historico" | "favoritos"
function useCarrinhoActions() {
  const [tab, setTab] = useState<TTab>("conta")
  return {
    tab,
    setTab,
  }
}

export default useCarrinhoActions
