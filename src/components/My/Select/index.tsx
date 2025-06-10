"use client"
import {
  Button,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  SelectValue,
  Text,
  ListBoxItemProps,
  SelectProps,
  ValidationResult,
} from "react-aria-components"
import * as S from "./styles"
import { Prettify } from "types/helpers"
import Loading from "components/Loading"
import { MIcon } from "components/Icons"

export type MySelectProps<T extends object> = Prettify<
  Omit<SelectProps<T>, "children"> & {
    label?: string
    loading?: boolean
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    items?: Iterable<T>
    children: React.ReactNode | ((item: T) => React.ReactNode)
  }
>
function MySelect<T extends object>({
  label,
  description,
  errorMessage,
  loading,
  children,
  items,
  ...props
}: MySelectProps<T>) {
  return (
    <S.Select {...props}>
      <Label>{label}</Label>
      <Button className={"react-aria-SelectButton"}>
        <SelectValue />
        <span aria-hidden="true" className="moreBtn">
          <Loading state={loading}>
            <MIcon icon="keyboard_arrow_down" style={{ fontSize: 20 }} />
          </Loading>
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <S.Popover>
        <ListBox items={items}>{children}</ListBox>
      </S.Popover>
    </S.Select>
  )
}

export function MyItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} />
}

MySelect.Item = MyItem

export default MySelect
