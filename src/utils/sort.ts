export function copyItem<TItem>(item: TItem): TItem {
  return JSON.parse(JSON.stringify({ list: item })).list as typeof item
}

const defaultOptions = {
  key: "value",
  direction: 1,
  parser: (item) => item,
}

export type OptionsType<Item> = typeof defaultOptions & {
  key: keyof Item
}

export function sort<Item>(
  item: Item[],
  options?: Partial<OptionsType<Item>>,
): Item[] {
  const itemCopy = copyItem(item)
  options = {
    ...defaultOptions,
    ...options,
  } as any
  return itemCopy?.sort((a, b) => {
    const [valueA, valueB] = [
      options.parser(options?.key ? a[options.key] : a),
      options.parser(options?.key ? b[options.key] : b),
    ]
    if (valueA > valueB) return -1 * options.direction
    if (valueA < valueB) return 1 * options.direction
    return 0
  })
}
