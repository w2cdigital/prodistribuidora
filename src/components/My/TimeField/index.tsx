"use client"
import {
  DateInput,
  DateSegment,
  FieldError,
  Label,
  Text,
  TimeFieldProps,
  TimeValue,
  ValidationResult,
} from "react-aria-components"
import { Prettify } from "types/helpers"
import * as S from "./styles"

type MyTimeFieldProps<T extends TimeValue> = Prettify<
  TimeFieldProps<T> & {
    label?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
  }
>

function MyTimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  ...props
}: MyTimeFieldProps<T>) {
  return (
    <S.TimeField {...props}>
      <Label>{label}</Label>
      <DateInput className={"react-aria-DateGroup"}>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </S.TimeField>
  )
}

export default MyTimeField
