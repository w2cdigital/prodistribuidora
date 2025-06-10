"use client"
import My from ".."
import React, { ReactNode, useState } from "react"
import { IColorNames } from "styles/colors"
import {
  FieldError,
  Label,
  PopoverProps,
  Text,
  ValidationResult,
} from "react-aria-components"
import * as S from "./styles"
import { addHours, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Prettify } from "types/helpers"
import { getClassName } from "utils/className"
import { MIcon } from "components/Icons"

type TMonthPickerProts = Prettify<
  {
    start: string
    end: string
    label?: string
    exibit?: "month" | "period"
    moreBtn?: ReactNode
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    color?: IColorNames
    onChange?: (a: { start: string; end: string }) => void
  } & PopoverProps
>

const today = new Date()
const Months = Array.from({ length: 12 }, (_, index) => index).map(
  (month) => new Date(today.getFullYear(), month, 15),
)

const getMonthPeriod = (date: Date, year?: number) => {
  return {
    start: new Date(
      year || date.getFullYear(),
      date.getMonth(),
      1,
    ).toISOString(),
    end: new Date(
      year || date.getFullYear(),
      date.getMonth() + 1,
      0,
    ).toISOString(),
  }
}
const datePeriodParser = (dateStr) => {
  let res = null
  try {
    res = format(addHours(new Date(dateStr), 3), "dd MMM, yy", { locale: ptBR })
  } catch {
    res = ""
  }
  return res
}
const dateMonthParser = (dateStr) => {
  let res = null
  try {
    res = format(addHours(new Date(dateStr), 3), "MMMM yyyy", { locale: ptBR })
  } catch {
    res = ""
  }
  return res
}

const verifyDate = (dateStr, month, year) => {
  let res = null
  try {
    const date = new Date(dateStr)
    res = date.getMonth() === month.getMonth() && date.getFullYear() === year
  } catch {
    res = false
  }
  return res
}

function MyMonthPicker({
  label,
  description,
  errorMessage,
  moreBtn,
  exibit = "period",
  color = "primary",
  ...props
}: TMonthPickerProts) {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <My.Popover
      menu={
        <My.Popover.Menu placement="top">
          {({ close }) => (
            <S.MonthPickerWrapper>
              <header>
                <My.Button color={color} onPress={() => setYear(year - 1)}>
                  ◀
                </My.Button>
                <span>{year}</span>
                <My.Button color={color} onPress={() => setYear(year + 1)}>
                  ▶
                </My.Button>
              </header>
              <S.MonthGrid>
                {Months.map((month) => (
                  <div
                    key={month.toISOString()}
                    className={getClassName([
                      verifyDate(props.start, month, year) && "selected",
                    ])}
                    onClick={() => {
                      props.onChange?.(getMonthPeriod(month, year) as any)
                      close()
                    }}
                  >
                    {format(month, "MMM", { locale: ptBR })}
                  </div>
                ))}
              </S.MonthGrid>
            </S.MonthPickerWrapper>
          )}
        </My.Popover.Menu>
      }
    >
      <S.MonthPickerStyle>
        <Label>{label}</Label>
        {description && <Text slot="description">{description}</Text>}
        <FieldError>{errorMessage}</FieldError>
        <My.Popover.Trigger className={"react-aria-SelectButton MonthPicker"}>
          {exibit == "period" &&
            `${datePeriodParser(props.start)} - ${datePeriodParser(props.end)}`}
          {exibit == "month" && `${dateMonthParser(props.start)}`}
          <div className="moreBtn">
            {moreBtn || (
              <MIcon icon="keyboard_arrow_down" style={{ fontSize: 20 }} />
            )}
          </div>
        </My.Popover.Trigger>
      </S.MonthPickerStyle>
    </My.Popover>
  )
}

MyMonthPicker.getMonthPeriod = getMonthPeriod

export default MyMonthPicker
