export default function printDiv({ divId }) {
  const mywindow = window.open(
    "",
    "PRINT",
    "height=650,width=900,top=100,left=150",
  )

  mywindow.document.write(`
  <html>
    <head><title>Histórico</title></head>
    <body>
      ${document.getElementById(divId).innerHTML}
    </body>
  </html>
  `)
  mywindow.document.close() // necessary for IE >= 10
  mywindow.focus() // necessary for IE >= 10*/

  mywindow.print()
  mywindow.close()

  return true
}
