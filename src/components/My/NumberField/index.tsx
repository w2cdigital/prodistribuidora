"use client"
import {
  FieldError,
  Group,
  Input,
  Label,
  Text,
  NumberFieldProps,
  ValidationResult,
} from "react-aria-components"
import { IColorNames } from "styles/colors"
import { Prettify } from "types/helpers"
import MyButton from "../Button"
import * as S from "./styles"

type MyNumberFieldProps = Prettify<
  NumberFieldProps & {
    label?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    color?: IColorNames
  }
>

function MyNumberField({
  label,
  description,
  errorMessage,
  color = "primary",
  ...props
}: MyNumberFieldProps) {
  return (
    <S.NumberField color={color} {...props}>
      <Label>{label}</Label>
      <Group>
        <MyButton color={color} slot="decrement">
          -
        </MyButton>
        <Input />
        <MyButton color={color} slot="increment">
          +
        </MyButton>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </S.NumberField>
  )
}

export default MyNumberField
