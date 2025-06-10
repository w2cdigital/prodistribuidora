import { addDays } from "date-fns"

export function getDays(dateStart, dateEnd) {
  const dates = []
  let date = dateStart

  while (date < dateEnd) {
    dates.push(date)
    date = addDays(date, 1)
  }
  return dates
}
