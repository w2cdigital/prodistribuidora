"use client"
import { Button, type DisclosureProps } from "react-aria-components"
import * as S from "./styles"
import { MIcon } from "components/Icons"

interface MyDisclosureProps extends Omit<DisclosureProps, "children"> {
  title?: React.ReactNode
  children?: React.ReactNode
  arrow?: boolean
}

function MyAcordeon({
  title,
  children,
  arrow = true,
  ...props
}: MyDisclosureProps) {
  return (
    <S.Disclosure {...props} data-acordeon>
      <Button slot="trigger">
        {arrow && <MIcon icon="arrow_forward_ios" />}
        {title}
      </Button>

      <S.DisclosurePanel data-disclosure>
        <div>{children}</div>
      </S.DisclosurePanel>
    </S.Disclosure>
  )
}

export default MyAcordeon
