export function handleToggle(array: any[], filter: any) {
  if (array.includes(filter)) {
    return array.filter((item) => item !== filter)
  } else {
    return [...array, filter]
  }
}

export function handleToggleOn(array: any[], filter: any) {
  if (array.includes(filter)) {
    return array
  } else {
    return [...array, filter]
  }
}

export function handleToggleOff(array: any[], filter: any) {
  if (array.includes(filter)) {
    return array.filter((item) => item !== filter)
  } else {
    return array
  }
}
