import { Prettify } from "types/helpers"
import usePrinter from "./actions"
import * as S from "./styles"
import { getClassName } from "utils/className"

type TPrintProps = ReturnType<typeof usePrinter>

type TPrinterPage = Prettify<
  {
    children?: React.ReactNode
    orientation?: "portrait" | "landscape"
    preview?: boolean
    id: string
  } & TPrintProps
>

function PrinterPage({
  orientation = "portrait",
  printRef,
  preview,
  printId,
  id,
  children,
}: TPrinterPage) {
  if (printId.value !== id) return null
  return (
    <S.Printer>
      <style>{`@page {size: ${orientation};}`}</style>
      <S.PrinterContent
        ref={printRef}
        className={getClassName([orientation, preview && "preview"])}
      >
        {children}
      </S.PrinterContent>
    </S.Printer>
  )
}

PrinterPage.usePrinter = usePrinter

export default PrinterPage
