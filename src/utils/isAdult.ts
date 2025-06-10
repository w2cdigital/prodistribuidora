export function age(born, now) {
  try {
    const birthday = new Date(
      now.getFullYear(),
      born.getMonth(),
      born.getDate(),
    )
    if (now >= birthday) return now.getFullYear() - born.getFullYear()
    else return now.getFullYear() - born.getFullYear() - 1
  } catch {
    return 0
  }
}

export function isAdult(date) {
  return age(date, new Date()) >= 18
}
