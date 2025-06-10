export const maskMonetary = (value) => {
  try {
    const data = (Number(value.replace(/\D/g, "")) / 100).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      },
    )
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const unmaskMonetary = (value) => {
  try {
    const data =
      typeof value === "number" ? value : Number(value.replace(/\D/g, "")) / 100
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}
export const unmaskPercentual = (value) => {
  try {
    const data =
      typeof value === "number"
        ? value
        : Number(value.replace("%", "").replace(",", "."))
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskNumber = (value) => {
  try {
    const data = value.replace(/\D/g, "")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskNumberComma = (value) => {
  try {
    const data = value.replace(/[^\d,.]/g, "")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskCPF = (value) => {
  try {
    const data = value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}
export const maskCNPJ = (value) => {
  try {
    const data = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskDocument = (value) => {
  if (value?.length <= 11) {
    return maskCPF(value)
  } else if (value?.length >= 12) {
    return maskCNPJ(value)
  }
}

export const maskPhone = (value) => {
  try {
    value = `${value}0`
    const data = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskCEP = (value) => {
  try {
    const data = value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskDateIso = (value) => {
  try {
    const data = value?.split?.("T")?.[0]?.split("-")?.reverse()?.join("/")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}
export const maskDate = (value) => {
  try {
    const data = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskText = (value) => {
  try {
    const data = value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const phoneReverse = (value: string) => {
  try {
    const data = value.split("/").reverse().join("-")
    return data
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const maskHour = (value) => {
  try {
    const data = value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1:$2")
      .replace(/(\d{2})(\d)/, "$1")
    return data
  } catch (err) {
    return err ? undefined : undefined
  }
}

const maskTypes = {
  phone: maskPhone,
  cep: maskCEP,
  cpf: maskCPF,
  cnpj: maskCNPJ,
  date: maskDateIso,
  hour: maskHour,
  text: maskText,
  document: maskDocument,
}

type TMaskTypes = keyof typeof maskTypes
type TMaskProps = {
  type: TMaskTypes
  value: string
  trace?: boolean
}

export function Mask({ type, value, trace = null }: TMaskProps) {
  if (!value) return trace ? "-" : null
  return maskTypes[type](value)
}
