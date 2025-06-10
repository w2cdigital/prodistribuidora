import * as S from "./styles"
import * as Client from "./client"

type TAsideMenu = {
  header?: React.ReactNode
  children?: React.ReactNode
}

async function AsideMenu({ header, children }: TAsideMenu) {
  return (
    <Client.AsideWrapper>
      <S.Company>
        {header}
        <Client.ToggleButton />
      </S.Company>
      {children}
    </Client.AsideWrapper>
  )
}

export default AsideMenu
