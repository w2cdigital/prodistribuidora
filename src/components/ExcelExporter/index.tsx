import { ListTypeActions } from "components/My/List/actions"
import writeXlsxFile, { ColumnSchema } from "write-excel-file"
import { saveAs as download } from "file-saver"

type CellStyle = Omit<
  ColumnSchema<object, any>,
  "value" | "type" | "format" | "column" | "getCellStyle"
>
type TExportExcel<T> = {
  title: string
  saveAs?: string
  data: T[]
  footer?: T
  props: ListTypeActions
  titleOptions?: CellStyle
  headerOptions?: CellStyle
  dataOptions?: CellStyle
  footerOptions?: CellStyle
}

const defaultTitleOptions: CellStyle = {
  align: "center",
  alignVertical: "center",
  fontWeight: "bold",
  height: 30,
}

const defaultDataOptions: CellStyle = {
  align: "center",
  alignVertical: "center",
  width: 20,
}
const defaultFooterOptions: CellStyle = {
  align: "center",
  alignVertical: "center",
  width: 20,
  fontWeight: "bold",
}

async function exportExcel<T>({
  title,
  saveAs,
  data,
  footer,
  titleOptions = {},
  headerOptions = {},
  dataOptions = {},
  footerOptions = {},
  props,
}: TExportExcel<T>) {
  const activeFields = props.values.fields.filter((f) =>
    props.values.isActive(f.key),
  )

  const TITLE = [
    {
      value: title,
      ...defaultTitleOptions,
      ...titleOptions,
      span: activeFields?.length,
    },
  ]

  const HEADER = activeFields.map((f) => ({
    value: f.name,
    ...defaultTitleOptions,
    ...headerOptions,
  }))

  const DATA = data.map((d) =>
    activeFields.map((f) => ({
      value: d[f.key],
      ...defaultDataOptions,
      ...dataOptions,
      type: f.type || String,
      ...(f.type === Date ? { format: "dd/mm/yyyy" } : {}),
    })),
  )
  const FOOTER = activeFields.map((f) => ({
    value: footer?.[f.key],
    ...defaultFooterOptions,
    ...footerOptions,
    type: f.type || String,
    ...(f.type === Date ? { format: "dd/mm/yyyy" } : {}),
  }))
  const columns = activeFields.map(() => ({
    ...defaultDataOptions,
    ...dataOptions,
  }))

  const file = await writeXlsxFile([TITLE, HEADER, ...DATA, FOOTER], {
    columns,
  })
  download(file, saveAs || title)
}

export default exportExcel
