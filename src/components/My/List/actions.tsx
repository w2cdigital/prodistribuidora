"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useDebounceValue } from "usehooks-ts"

type TFields<F> = {
  key: F
  name: string
  type?: any
  initial?: boolean
  permanent?: boolean
}
type TFilters<FilterValue, FilterName> = {
  field: FilterName
  label?: string
  values: [string, any][]
  defaultValue?: FilterValue
}
type TypeTableOptions<
  FilterValue,
  FilterName extends string,
  ItemList extends object,
  Fields = keyof ItemList | "actions",
> = {
  list?: ItemList[]
  fields?: TFields<Fields>[]
  fieldsSpan?: Fields[]
  filters?: TFilters<FilterValue, FilterName>[]
  pagination?: {
    limit?: number
    offset?: number
    itens?: number
  }
}

export function useListActions<
  FilterValue,
  FilterName extends string,
  ItemList extends object,
  Fields extends string,
>({
  fields,
  filters,
  fieldsSpan,
  pagination,
}: TypeTableOptions<FilterValue, FilterName, ItemList, Fields>) {
  const [searchField, setSearchField] = useState("")
  const [search, setSearch] = useState("")
  const [searchDebounce] = useDebounceValue(searchField, 500)
  const [filtersValues, setFiltersValues] = useState(
    filters?.reduce(
      (acc, f) => ({ ...acc, [f.field]: f.defaultValue }),
      {},
    ) as Record<FilterName, FilterValue>,
  )
  const [selectedFields, setSelectedFields] = useState(
    fields?.filter((f) => f.initial)?.map((f) => f.key) || [],
  )
  const [totalPages, setTotalPages] = useState(1)
  const [totalItens, setTotalItens] = useState(pagination?.itens || 0)
  const [page, setPage] = useState(pagination?.offset || 0)

  useEffect(() => setSearch(searchDebounce), [searchDebounce])

  const filteredFields = useMemo(
    () => fields?.filter((f) => selectedFields.includes(f.key)),
    [selectedFields, fields],
  )

  const isActive = useCallback(
    (f: Fields) => !!filteredFields.find((i) => i.key === f),
    [filteredFields],
  )
  const span = useMemo(
    () =>
      fieldsSpan?.length
        ? filteredFields.filter((i) => !fieldsSpan.includes(i.key))?.length || 1
        : 1,
    [filteredFields, fieldsSpan],
  )

  const fieldProps = useMemo(() => {
    return filteredFields.reduce(
      (acc, f) => ({ ...acc, [f.key]: f }),
      {},
    ) as Record<Fields, TFields<Fields>>
  }, [filteredFields])

  useEffect(() => {
    if (page + 1 > totalPages) {
      setPage(0)
    }
  }, [page, totalPages])

  return {
    values: {
      pagination: {
        limit: pagination?.limit,
        offset: page * (pagination?.limit || 1),
      },
      search,
      fields: filteredFields,
      filters: filtersValues,
      fieldProps,
      isActive,
    },
    paginationProps: {
      totalPages,
      totalItens,
      page,
      onChange: setPage,
      setTotalPages: (v, b?: boolean) => {
        setTotalPages(b ? v : Math.ceil(v / (pagination?.limit || 1)))
        setTotalItens(v || 0)
      },
    },
    filtersProps: {
      filtersList: filters,
      isChecked: (s, v) => filtersValues[s] === v,
      onChange: (s, v) => setFiltersValues((p) => ({ ...p, [s]: v })),
    },
    fieldsProps: {
      span,
      filterFields: fields?.filter((f) => !f.permanent),
      onChange: (e: Fields) =>
        setSelectedFields((s) =>
          s.includes(e) ? s.filter((f) => f !== e) : [...s, e],
        ),
      isSelected: (f: Fields) => selectedFields.includes(f),
    },
    searchProps: {
      onChange: (e) => setSearchField(e),
      onSubmit: (e) => setSearch(e),
      placeholder: "Pesquisar",
      "data-search-input": true,
      value: searchField,
      search: true,
    },
  }
}
export function useListParser<T>(
  list: T[],
  {
    values: {
      search,
      filters,
      pagination: { limit },
    },
    filtersProps: { filtersList },
    paginationProps: { page, setTotalPages },
  }: ReturnType<typeof useListActions>,
  searchParser: (i: T) => string,
) {
  const filteredList = useMemo(
    () =>
      list?.filter?.(
        (i) =>
          searchParser(i)?.toLowerCase()?.includes(search?.toLowerCase()) &&
          (filtersList || [])?.every(
            (f) =>
              i[f.field as any] === filters[f.field] ||
              filters[f.field] === undefined,
          ),
      ),
    [list, search, filtersList, filters, searchParser],
  )

  useEffect(() => {
    setTotalPages(filteredList?.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList?.length])

  const paginatedList = useMemo(
    () => filteredList?.slice(page * limit, (page + 1) * limit),
    [filteredList, page, limit],
  )

  return paginatedList
}

export function useListData<T>(newData: T[]) {
  const data = useDebounceValue(newData, 500)
  const trueData = useDebounceValue(newData || data[0], 500)

  return trueData?.[0]
}

export type ListTypeActions = ReturnType<typeof useListActions>
