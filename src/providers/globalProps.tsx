"use client"
import { useMediaQuery } from "usehooks-ts"
import CreateProvider from "utils/CreatProvider"

function useGlobalProviderActions() {
  const mobile = useMediaQuery("(max-width: 768px)")
  return { mobile }
}

const { Provider: GlobalPropsProvider, useHook: useGlobalProps } =
  CreateProvider(useGlobalProviderActions)

export { GlobalPropsProvider, useGlobalProps }
