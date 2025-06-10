import { createContext, useContext } from "react"

function CreateProvider<T, P>(Hook: (props?: P) => T) {
  const Context = createContext<T>({} as T)

  function Provider({ children, ...props }: { children: React.ReactNode } & P) {
    const data = Hook(props as any)
    return <Context.Provider value={data}>{children}</Context.Provider>
  }
  function useHook(): T {
    const context = useContext(Context)

    if (!context) {
      throw new Error(`${Hook?.name} must be used within a Provider`)
    }

    return context
  }

  return { Provider, useHook }
}

export default CreateProvider
