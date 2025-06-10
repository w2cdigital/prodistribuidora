"use client"
import {
  ColumnProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  CellProps,
  TableProps,
} from "react-aria-components"
import * as S from "./styles"
import My from ".."
import { MIcon } from "components/Icons"
import ReactPaginate from "react-paginate"
import { getClassName } from "utils/className"
import { ListTypeActions } from "../List/actions"

function MyTableCell({ children, ...props }: CellProps) {
  return (
    <S.Cell {...props} data-aria-cell>
      {children}
    </S.Cell>
  )
}

function MyColumn({
  children,
  size,
  ...props
}: ColumnProps & { size?: string }) {
  return (
    <S.Column size={size} {...props} data-aria-column>
      {children}
    </S.Column>
  )
}
function MyTableHeader<T extends object>({
  children,
  ...props
}: TableHeaderProps<T>) {
  return (
    <S.TableHeader {...props} data-aria-header>
      {children}
    </S.TableHeader>
  )
}

function MyTableFooter<T extends object>({ children, ...props }: RowProps<T>) {
  return (
    <S.Row {...props} data-aria-footer>
      {children}
    </S.Row>
  )
}

function MyRow<T extends object>({ children, ...props }: RowProps<T>) {
  return (
    <S.Row {...props} data-aria-row>
      {children}
    </S.Row>
  )
}

function MyTableBody<T extends object>({
  children,
  ...props
}: TableBodyProps<T>) {
  return (
    <S.TableBody {...props} data-aria-body>
      {children}
    </S.TableBody>
  )
}

function MyTable({ children, ...props }: TableProps) {
  return (
    <S.Table {...props} data-aria-table>
      {children}
    </S.Table>
  )
}

function Toolbar({ children, ...props }) {
  return (
    <S.Toolbar
      className={getClassName(["toolbar", props.className])}
      {...props}
    >
      {children}
    </S.Toolbar>
  )
}

function FieldsModal({
  filterFields,
  onChange,
  isSelected,
}: ListTypeActions["fieldsProps"]) {
  return (
    <My.Popover
      menu={
        <S.FieldsMenu>
          {filterFields?.map((f) => (
            <S.Field
              key={f.key}
              value={f.key}
              className={isSelected(f.key) && "selected"}
              onPress={() => onChange(f.key)}
            >
              <span>
                <MIcon icon="check" />
              </span>
              {f.name}
            </S.Field>
          ))}
        </S.FieldsMenu>
      }
    >
      <My.Tooltip tooltip="Escolher Campos">
        <My.Popover.Trigger variant="outline" className={"fieldsButton"}>
          <MIcon icon="tune" />
        </My.Popover.Trigger>
      </My.Tooltip>
    </My.Popover>
  )
}

function FiltersModal(props: ListTypeActions["filtersProps"]) {
  return (
    <My.Popover
      menu={
        <S.FiltersMenu>
          {props?.filtersList?.map(({ field, values, label }) => (
            <div className="field" key={field}>
              {label && <span className="label">{label}</span>}
              <div>
                {values.map(([name, v]) => (
                  <S.Filter
                    key={name}
                    className={props.isChecked(field, v) && "selected"}
                    onPress={() => props.onChange(field, v)}
                  >
                    {name}
                  </S.Filter>
                ))}
              </div>
            </div>
          ))}
        </S.FiltersMenu>
      }
    >
      <My.Tooltip tooltip="Filtrar Lista">
        <My.Popover.Trigger variant="outline" className={"filterButton"}>
          <MIcon icon="filter_alt" type="outlined" />
        </My.Popover.Trigger>
      </My.Tooltip>
    </My.Popover>
  )
}

function Pagination({
  children,
  showOnly,
  ...props
}: ListTypeActions["paginationProps"] &
  ListTypeActions["values"]["pagination"] & {
    children?: React.ReactNode
    showOnly?: "info" | "pagination"
  }) {
  let to = props.offset + props.limit
  if (to > props.totalItens) to = props.totalItens
  const info = (
    <div className="info">
      <span>
        {" "}
        Mostrando itens {props.totalItens ? props.offset + 1 : 0} à {to} de{" "}
        {props.totalItens} resultados
      </span>
      {children}
    </div>
  )
  if (showOnly === "info") return info
  const pagination = (
    <ReactPaginate
      breakLabel="..."
      previousLabel="arrow_back_ios_new"
      nextLabel="arrow_forward_ios"
      onPageChange={({ selected }) => props.onChange(selected)}
      pageRangeDisplayed={5}
      pageCount={props.totalPages}
      forcePage={props.page}
      renderOnZeroPageCount={null}
    />
  )
  if (showOnly === "pagination")
    return <S.Pagination>{pagination}</S.Pagination>
  return (
    <S.Pagination>
      {info}
      {pagination}
    </S.Pagination>
  )
}

MyTable.Row = MyRow
MyTable.Column = MyColumn
MyTable.Header = MyTableHeader
MyTable.Footer = MyTableFooter
MyTable.Body = MyTableBody
MyTable.Cell = MyTableCell
MyTable.FieldsModal = FieldsModal
MyTable.FiltersModal = FiltersModal
MyTable.Pagination = Pagination
MyTable.Toolbar = Toolbar

export default MyTable
