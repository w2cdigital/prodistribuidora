import "styled-components"

export type TAllThemes = "Light" | "Dark"

export const colorNames = [
  "primary",
  "secondary",
  "primary50",
  "white",
  "black",
  "red",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
  "orange",
  "pink",
  "grey1000",
  "grey900",
  "grey800",
  "grey700",
  "grey600",
  "grey500",
  "grey400",
  "grey300",
  "grey200",
  "grey150",
  "grey100",
  "grey50",
  "grey0",
] as const

export type IColorNames = (typeof colorNames)[number]

export type Theme = {
  [key in IColorNames]: string
}
interface IColors {
  name: TAllThemes
  colors: Theme
}

const SharedColors = {
  primary: "#0B1189",
  secondary: "#FABB00",
  primary50: "#282FBA",
  white: "#ffffff",
  black: "#000000",
  red: "#FF4747",
  orange: "#ee8200",
  pink: "#cc00cc",
  yellow: "#FACC15",
  green: "#27AE60",
  blue: "#2B3699",
  cyan: "#00B8D4",
  purple: "#7065F0",
}

const Light: IColors = {
  name: "Light",
  colors: {
    grey1000: "#000000",
    grey900: "#141414",
    grey800: "#242424",
    grey700: "#4B4B4B",
    grey600: "#5F5F5F",
    grey500: "#6F6F6F",
    grey400: "#A2A2A2",
    grey300: "#BCBCBC",
    grey200: "#D9D9D9",
    grey150: "hsl(from var(--grey100) h s calc(l - 5) )",
    grey100: "#F4F4F4",
    grey50: "hsl(from var(--grey100) h s calc(l + 1) )",
    grey0: "#ffffff",
    ...SharedColors,
  },
}

const Dark: IColors = {
  name: "Dark",
  colors: {
    grey1000: "#ffffff",
    grey900: "#F4F4F4",
    grey800: "#D9D9D9",
    grey700: "#BCBCBC",
    grey600: "#A2A2A2",
    grey500: "#6F6F6F",
    grey400: "#5F5F5F",
    grey300: "#4B4B4B",
    grey200: "#2F2F2F",
    grey150: "hsl(from var(--grey100) h s calc(l + 5) )",
    grey100: "#1F1F1F",
    grey50: "hsl(from var(--grey100) h s calc(l - 5) )",
    grey0: "#141414",
    ...SharedColors,
  },
}

const AllThemes = {
  Dark,
  Light,
}

declare module "styled-components" {
  export interface DefaultTheme {
    name: TAllThemes
    colors: Theme
  }
}

export { Light, Dark, AllThemes }
