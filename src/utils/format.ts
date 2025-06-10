const lang = {
  portuguese: "pt-BR",
  english: "en-US",
}

export const formatNumberCompact = (value: number, language = "en-US") => {
  return new Intl.NumberFormat(language, {
    notation: "compact",
    maximumSignificantDigits: 3,
  }).format(value)
}

const currency = {
  portuguese: "BRL",
  english: "USD",
}

export const formatNumber = (value: number, language = "portuguese") => {
  return new Intl.NumberFormat(lang[language], {
    maximumFractionDigits: 2,
  }).format(value)
}

export const formatNumberDecimals = (value: number) => {
  return new Intl.NumberFormat("pt-BR").format(value)
}

const defaultMoneyOptions = { language: "portuguese", short: false }
export const formatMoney = (value: number, opt = null) => {
  const options = { ...defaultMoneyOptions, ...(opt ? { ...opt } : {}) }
  return new Intl.NumberFormat(lang[options.language], {
    style: "currency",
    currency: currency[options.language],
    maximumFractionDigits: options.short ? 0 : 2,
  }).format(value)
}
