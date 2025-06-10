"use client"
import { TAllThemes } from "styles/colors"
import { useLocalStorage } from "usehooks-ts"
import CreateProvider from "utils/CreatProvider"

export type TCheckList = {
  theme: TAllThemes
}

const initialState: TCheckList = {
  theme: "Light",
}

function useCreateStorage({ theme }) {
  const [storage, setStorage] = useLocalStorage(
    "storage",
    { ...initialState, theme  },
    {
      initializeWithValue: false,
    },
  )

  return {
    storage,
    setStorage,
  }
}
const { Provider: StorageProvider, useHook: useStorage } =
  CreateProvider(useCreateStorage)

export default function Storage({ theme = initialState.theme, children }) {
  return <StorageProvider theme={theme}>{children}</StorageProvider>
}
export { useStorage }
