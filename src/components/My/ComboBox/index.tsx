"use client"
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Text,
  ComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from "react-aria-components"
import * as S from "./styles"
import { Prettify } from "types/helpers"
import { ReactNode } from "react"
import { MIcon } from "components/Icons"

type MyComboBoxProps<T extends object> = Prettify<
  Omit<ComboBoxProps<T>, "children"> & {
    label?: string
    description?: ReactNode | null
    placeholder?: string | null
    errorMessage?: string | ((validation: ValidationResult) => string)
    children: React.ReactNode | ((item: T) => React.ReactNode)
  }
>
function MyComboBox<T extends object>({
  label,
  description,
  errorMessage,
  placeholder,
  children,
  items,
  ...props
}: MyComboBoxProps<T>) {
  return (
    <S.ComboBox {...props}>
      <Label>{label}</Label>
      <div className="react-aria-ComboBoxButton">
        <Input placeholder={placeholder} />
        <Button className={"moreBtn"}>
          <MIcon icon="keyboard_arrow_down" style={{ fontSize: 20 }} />
        </Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <S.Popover>
        <ListBox items={items}>{children}</ListBox>
      </S.Popover>
    </S.ComboBox>
  )
}

function MyItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} />
}

MyComboBox.Item = MyItem
export default MyComboBox
