"use client"
import {
  DatePickerProps,
  DateValue,
  ValidationResult,
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Text,
  DateRangePickerProps,
  RangeCalendar,
} from "react-aria-components"
import { Prettify } from "types/helpers"
import { IColorNames } from "styles/colors"
import { parseDate } from "@internationalized/date"
import { MIcon } from "components/Icons"
import My from ".."
import React, { ReactNode } from "react"
import SVG from "components/SVG"
import * as S from "./styles"

export function ValidateMaxDateLength(days) {
  return (range) =>
    range?.end.compare(range.start) > days
      ? `Período não pode ser maior que o limite de ${days} dias.`
      : null
}

export const Max90Days = ValidateMaxDateLength(90)

type MyDatePickerProps<T extends DateValue> = Prettify<
  {
    label?: string
    moreBtn?: ReactNode
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    color?: IColorNames
  } & (
    | ({ tag?: "DatePicker" } & DatePickerProps<T> & {
          value?: string
          nextPrev?: boolean
        })
    | ({ tag?: "DateRangePicker" } & DateRangePickerProps<T> & {
          start?: string
          end?: string
        })
  )
>

function MyDatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  moreBtn,
  color = "primary",
  tag = "DatePicker",
  ...props
}: MyDatePickerProps<T>) {
  const Tag = {
    DatePicker: {
      Wrapper: S.DatePicker as any,
      Element: Calendar,
      props: {
        ...props,
        value: props.value
          ? parseDate((props.value as string)?.slice?.(0, 10))
          : null,
      },
    },
    DateRangePicker: {
      Wrapper: S.DateRangePicker as any,
      Element: RangeCalendar,
      props: {
        ...props,
        value:
          props["end"] && props["start"]
            ? {
                end: parseDate((props["end"] as string)?.slice?.(0, 10)),
                start: parseDate((props["start"] as string)?.slice?.(0, 10)),
              }
            : null,
      },
    },
  }[tag]

  return (
    <S.WrapperAll>
      {props?.["nextPrev"] && (
        <Button
          onPress={() => {
            props.onChange?.(
              parseDate((props["value"] as string)?.slice?.(0, 10)).add({
                days: -1,
              }) as any,
            )
          }}
        >
          <MIcon icon="arrow_back_ios" />
        </Button>
      )}
      <Tag.Wrapper {...Tag.props}>
        <Label>{label}</Label>
        <Group className={"react-aria-DateGroup"}>
          {tag === "DatePicker" && (
            <DateInput>
              {(segment) => <DateSegment segment={segment} />}
            </DateInput>
          )}
          {tag === "DateRangePicker" && (
            <>
              <DateInput slot="start">
                {(segment) => <DateSegment segment={segment} />}
              </DateInput>
              <span aria-hidden="true">–</span>
              <DateInput slot="end">
                {(segment) => <DateSegment segment={segment} />}
              </DateInput>
            </>
          )}
          <Button className="moreBtn">
            {moreBtn || <SVG icon="CalendarSmall" />}
          </Button>
        </Group>
        {description && <Text slot="description">{description}</Text>}
        <FieldError>{errorMessage}</FieldError>
        <S.Popover color={color}>
          <Dialog>
            <Tag.Element>
              <header>
                <My.Button color={color} slot="previous">
                  ◀
                </My.Button>
                <Heading />
                <My.Button color={color} slot="next">
                  ▶
                </My.Button>
              </header>
              <CalendarGrid>
                {(date) => <CalendarCell date={date} />}
              </CalendarGrid>
            </Tag.Element>
          </Dialog>
        </S.Popover>
      </Tag.Wrapper>
      {props?.["nextPrev"] && (
        <Button
          onPress={() => {
            props.onChange?.(
              parseDate((props["value"] as string)?.slice?.(0, 10)).add({
                days: 1,
              }) as any,
            )
          }}
        >
          <MIcon icon="arrow_forward_ios" />
        </Button>
      )}
    </S.WrapperAll>
  )
}

export default MyDatePicker
