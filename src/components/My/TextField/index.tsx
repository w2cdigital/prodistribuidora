"use client"
import MaskInput, {
  IMaskPropsTypes,
  IMaskTypes,
} from "components/My/MaskedInput"
import { Prettify } from "types/helpers"
import * as S from "./styles"
import {
  FieldError,
  Group,
  Input,
  Label,
  Text,
  TextArea,
  TextFieldProps,
  ValidationResult,
} from "react-aria-components"
import My from ".."
import { MIcon } from "components/Icons"
import { useState } from "react"
import SVG from "components/SVG"

type MyTextFieldProps = Prettify<
  TextFieldProps & {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
  } & (
      | {
          tag?: "Input"
          search?: boolean
        }
      | {
          tag?: "TextArea"
        }
      | ({
          tag?: "Mask"
        } & Prettify<
          | {
              maskType?: IMaskTypes
            }
          | {
              maskProps?: IMaskPropsTypes
            }
        >)
    )
>

function MyTextField({
  label,
  placeholder,
  description,
  errorMessage,
  tag = "Input",
  onChange,
  ...allProps
}: MyTextFieldProps) {
  const { maskType, maskProps, ...props } = allProps as any
  const Element = { Input, Mask: MaskInput, TextArea }[tag]
  const [show, setShow] = useState(undefined)
  const maskOBJ: any = {}
  if (maskType) {
    maskOBJ.maskType = maskType
  }
  if (maskProps) {
    maskOBJ.maskProps = maskProps
  }

  const WrapperElement = (
    props?.["search"] ? S.SearchField : S.TextField
  ) as any

  return (
    <WrapperElement {...props} {...(tag === "Mask" ? {} : { onChange })}>
      <Label>{label}</Label>
      <Group>
        <Element
          placeholder={placeholder}
          {...(props.type === "password"
            ? { type: show ? "text" : "password" }
            : {})}
          {...(tag === "Mask" ? { onChange, value: props.value } : {})}
          {...(maskOBJ as any)}
        />
        {props?.["search"] && (
          <>
            <SVG icon="Search" />
            <My.Button variant="styleless" className={"search-close"}>
              <MIcon icon="close" />
            </My.Button>
          </>
        )}
        {props.type === "password" && (
          <My.Button
            variant="styleless"
            className={"password"}
            onPress={() => setShow((s) => (s ? undefined : true))}
          >
            <MIcon icon={show ? "visibility" : "visibility_off"} />
          </My.Button>
        )}
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </WrapperElement>
  )
}

export default MyTextField
