"use client"
import { getClassName } from "utils/className"
import { MIcon } from "components/Icons"
import { useState } from "react"
import * as S from "./styles"
import CreateProvider from "utils/CreatProvider"

function useAsideActions() {
  const [open, set] = useState(true)
  return { open, set, toggle: () => set((s) => !s) }
}
const { Provider: AsideProvider, useHook: useAside } =
  CreateProvider(useAsideActions)

function Aside({ children }) {
  const { open } = useAside()

  return (
    <S.Aside className={getClassName([open && "open"])}>{children}</S.Aside>
  )
}

export function AsideWrapper({ children }) {
  const { open, toggle } = useAside()
  return (
    <>
      <Aside>{children}</Aside>
      <S.Overlay
        onClick={toggle}
        className={getClassName(["overlay", open && "open"])}
      />
    </>
  )
}

export function ToggleButton() {
  const { open, toggle } = useAside()
  return (
    <button onClick={toggle} className="toggleAside">
      <MIcon icon={open ? "arrow_back_ios_new" : "arrow_forward_ios"} />
    </button>
  )
}

export { useAside, AsideProvider }
