"use client"
import { ThemeProvider } from "styled-components"
import { AllThemes } from "../styles/colors"
import { useStorage } from "./storage"
import { getLuminance, setLightness, setSaturation } from "polished"
import { useMemo } from "react"
import { cloneDeep } from "lodash"

function Theme({ children }: { children: React.ReactNode }) {
  const {
    storage: { theme },
  } = useStorage()
  const Colors = useMemo(() => {
    const c = cloneDeep(AllThemes[theme].colors)

    const primaryLum = getLuminance(c.primary)
    const secondaryLum = getLuminance(c.primary)
    const GreyLum = getLuminance(c.grey0)
    if (GreyLum - primaryLum < 0.5) {
      c.primary = setSaturation(0.9, setLightness(0.6, c.primary))
    }
    if (GreyLum - secondaryLum < 0.5) {
      c.secondary = setSaturation(0.9, setLightness(0.6, c.secondary))
    }
    return c
  }, [theme])

  return (
    <ThemeProvider
      theme={{
        name: AllThemes[theme].name,
        colors: Colors,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default Theme
