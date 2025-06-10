import { addHours, eachDayOfInterval, format, Locale } from "date-fns"
import { ptBR } from "date-fns/locale"
interface IFormatOptions {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: number
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

type replacer = "-" | "/"

export function isExpired(timestamp: number) {
  timestamp = timestamp ?? 0
  return timestamp < Date.now()
}

export function reverseDate(string, replacer: replacer = "/") {
  return string?.split(replacer).reverse().join(replacer)
}

export function isoToDateString(string, replacer: replacer = "/") {
  return string?.split("T")?.[0]?.replaceAll("-", replacer)
}

export function isoToDateStringPtBr(string, replacer: replacer = "/") {
  return reverseDate(isoToDateString(string)).replaceAll("-", replacer)
}

export function dateToDateString(date, replacer: replacer = "/") {
  return isoToDateString(date?.toISOString(), replacer)
}

export function dateToDateTime(date, replacer: replacer = "-") {
  return (
    isoToDateString(date?.toISOString(), replacer) +
    "T" +
    date.toLocaleTimeString() +
    ".000Z"
  )
}

export function dateToDateStringPtBr(date, replacer: replacer = "-") {
  return date
    ?.toISOString()
    ?.split("T")?.[0]
    ?.split("-")
    .reverse()
    .join(replacer)
}

export const convertDateBrToDefaultFormat = (date: string) => {
  const dateReplace = date.split("/").join("-")
  const split = dateReplace.split("-")

  if (split[2]?.length === 4) {
    const [day, month, year] = split
    return `${year}-${month}-${day}`
  }
}

export function isoToDate(string) {
  return new Date(string?.slice(0, -1))
}

export function stringDateToIso(string) {
  return new Date(string)?.toISOString()
}

export function isDateBetween({ date = new Date(), start, end }) {
  return date >= start && date <= end
}

export function dateStringPtBrtoDate(string) {
  return string ? new Date(string?.split("-").reverse().join("/")) : null
}

export function formatFallback(
  date: Date | number,
  formater: string,
  options: IFormatOptions = {},
) {
  try {
    return format(date, formater, { locale: ptBR, ...options } as any)
  } catch {
    return undefined
  }
}

export function isDate(date1, date2) {
  if (typeof date1 === "string") {
    date1 = new Date(date1)
  }
  if (typeof date2 === "string") {
    date2 = new Date(date2)
  }
  return date1?.toISOString() === date2?.toISOString()
}

export function dateToLocaleDateString(date: Date, replacer: replacer = "/") {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join(
    replacer,
  )
}

export function dateToIsoDate(date: Date) {
  return new Date(date.getTime() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    ?.split("T")?.[0]
}

export function dateToIsoDateTime(date: Date) {
  return new Date(
    date.getTime() - new Date().getTimezoneOffset() * 60000,
  ).toISOString()
}

export function setDateDMY(date: Date, { d, m, y }) {
  return new Date(
    new Date(new Date(new Date(date).setFullYear(y)).setMonth(m)).setDate(d),
  )
}

export function dateToLocaleDateStringPtBr(
  date: Date,
  replacer: replacer = "-",
) {
  const [day, month] = [date.getDate(), date.getMonth() + 1].map((n) =>
    n.toString().length === 1 ? `0${n}` : n,
  )
  return [day, month, date.getFullYear()].join(replacer)
}

export function getDateRange(type: "day" | "week" | "month" | "year") {
  const now = new Date()
  let dateStart: Date
  let dateEnd: Date

  if (type === "day") {
    dateStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
    )
    dateEnd = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
    )
  }

  if (type === "week") {
    dateStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - now.getDay(),
      0,
      0,
      0,
    )
    dateEnd = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + (6 - now.getDay()),
      23,
      59,
      59,
    )
  }

  if (type === "month") {
    dateStart = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0)
    dateEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
  }

  if (type === "year") {
    dateStart = new Date(now.getFullYear(), 0, 1, 0, 0, 0)
    dateEnd = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
  }

  return { dateStart, dateEnd }
}

export const getPeriodMonths = (months: number) => {
  const today = new Date()
  const dates = []
  for (let i = 0; i < months; i++) {
    dates.push(new Date(today.getFullYear(), today.getMonth() - i, 1))
  }
  return dates.reverse()
}

export const getWeekDates = (dateInput: string) => {
  const date = addHours(new Date(dateInput), +3)
  const dayOfWeek = date.getDay()
  const week: string[] = []
  const startDate = new Date(date)

  if (dayOfWeek !== 0) {
    startDate.setDate(date.getDate() - dayOfWeek)
  }

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + i)
    week.push(currentDate.toISOString().split("T")[0])
  }

  return week
}

export function getDatesInRange({
  startDate,
  endDate,
}: {
  startDate: Date
  endDate: Date
}) {
  const interval = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  return interval.map((date) => format(date, "yyyy-MM-dd"))
}
