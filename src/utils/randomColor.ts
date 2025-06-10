const arrayColors = [
  "#6F52ED",
  "#FFB800",
  "#FF4C61",
  "#33D69F",
  "#0C99D8",
  "#aa45b7",
  "#E05A08",
  "#358C32",
  "#2c3f94",
  "#0CF7D2",
]

export function randomColor(i?: number) {
  if (![undefined, null].includes(i) && i < 10) {
    return arrayColors[i]
  }
  const letras = "0123456789ABCDEF"
  let cor = "#"
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)]
  }
  return cor
}
