import { format } from "date-fns"

export function isoToDate(date: string) {
  return date
    ? new Date(date?.split("T")?.[0]?.replaceAll("-", "/") || "")
    : null
}
export function isoToDateBR(date: string) {
  return date ? date?.split("T")?.[0]?.split("-").reverse().join("/") : null
}

export function dmyToDate(date: string) {
  return date ? new Date(date?.split("/").reverse().join("/")) : null
}

export function dateToRequest(
  date: Date,
  short = false,
  startEnd: "start" | "end" = null,
) {
  return date
    ? `${date?.toLocaleDateString("pt-BR").split("/").reverse().join("-")}${
        short ? "" : "T15:00:00.000Z"
      }${
        {
          start: "T00:00:00.000Z",
          end: "T23:59:59.000Z",
          null: "",
        }[startEnd]
      }`
    : null
}

export function dateToString(date: Date) {
  return date ? format(date, "dd/MM/yyyy") : null
}

export function dateToRequestSimple(date: string) {
  return date ? date.split("T")[0] : null
}
