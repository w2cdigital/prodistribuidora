export function downloadBlob(data) {
  const url = URL.createObjectURL(data)
  const link = document.createElement("a")
  link.href = url
  link.download = "export.xlsx"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
