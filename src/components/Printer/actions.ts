import { useRef, useState } from "react"
import { useReactToPrint } from "react-to-print"
import doAfter from "utils/doAfter"
type TProps = {
  onAfterPrint?: () => void
  id?: string
}

function usePrinter({ onAfterPrint, id }: TProps) {
  const printRef = useRef<HTMLDivElement>(null)
  const [printId, setPrintId] = useState(id)
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    onAfterPrint: () => {
      setPrintId(null)
      onAfterPrint?.()
    },
  })

  return {
    printRef,
    handlePrint: (id) => {
      setPrintId(id)
      doAfter(() => {
        handlePrint()
      }, 0)
    },
    printId: {
      value: printId,
      set: setPrintId,
    },
  }
}

export default usePrinter
