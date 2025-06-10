import { Prettify } from "types/helpers"
import MySelect, { MySelectProps } from "../Select"

type TTagSelectorProps<T extends object> = Prettify<
  MySelectProps<T> & {
    refId: string
    textValue: string
    onSelectionChange: (value: string) => void
  }
>
function MyTagSelector<T extends object>({
  refId,
  textValue,
  children,
  ...props
}: TTagSelectorProps<T>) {
  return (
    <MySelect
      selectedKey={null}
      placeholder="Adicionar Tag"
      {...props}
      onSelectionChange={(e) => {
        const TextRef = document?.getElementById?.(refId)
        if (!TextRef) return
        const [selectionStart, selectionEnd] = [
          TextRef?.["selectionStart"],
          TextRef?.["selectionEnd"],
        ]
        TextRef.focus()
        const slices = [
          textValue.slice(0, selectionStart),
          textValue.slice(selectionStart, selectionEnd),
          textValue.slice(selectionEnd, textValue.length),
        ]
        slices[1] = `{{${e}}}`
        props?.onSelectionChange?.(slices.join(""))
      }}
    >
      {children}
    </MySelect>
  )
}

export default MyTagSelector
