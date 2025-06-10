type TChangeArrayItem<T> = {
  array: ({ id: string } & T)[]
  id: string
  value: Partial<T>
}

export function chageArrayeItem<T>({ array, id, value }: TChangeArrayItem<T>) {
  return array.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        ...value,
      }
    }
    return item
  })
}
