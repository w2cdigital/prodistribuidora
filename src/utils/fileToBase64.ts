export async function fileToBase64(file: File) {
  let img
  const loader = new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
  })
  await loader.then((res) => (img = res))
  return img
}
