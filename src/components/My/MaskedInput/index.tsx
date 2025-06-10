"use client"
import { Input } from "react-aria-components"
import { useEffect, useMemo, useRef, useState } from "react"
import IMask from "imask"
import { ReactMaskOpts } from "react-imask"
import { cloneDeep } from "lodash"
export type IMaskPropsTypes = ReactMaskOpts

const percentualMask = (pre = "") => ({
  mask: pre + "num%",
  lazy: false,
  blocks: {
    num: {
      mask: Number,
      signed: false,
      thousandsSeparator: ".",
      radix: ",",
      mapToRadix: ["."],
    },
  },
})

const maskList = {
  monetary: {
    mask: "R$ num",
    lazy: false,
    blocks: {
      num: {
        mask: Number,
        scale: 2,
        signed: false,
        thousandsSeparator: ".",
        radix: ",",
        mapToRadix: ["."],
      },
    },
  },
  "cpf-cnpj": {
    unmask: true,
    inputMode: "numeric",
    mask: [{ mask: "000.000.000-00" }, { mask: "00.000.000/0000.000" }],
  },
  cpf: {
    unmask: true,
    mask: [{ mask: "000.000.000-00" }],
    inputMode: "numeric",
  },
  cep: {
    unmask: true,
    mask: [{ mask: "00000-000" }],
    inputMode: "numeric",
  },
  number: {
    unmask: true,
    placeholder: "0,00",
    inputMode: "numeric",
    mask: Number,
    thousandsSeparator: ".",
    radix: ",",
    expose: true,
  },
  weight: {
    mask: "num kg",
    lazy: false,
    blocks: {
      num: {
        mask: Number,
        signed: false,
        thousandsSeparator: ".",
        radix: ",",
        mapToRadix: ["."],
      },
    },
  },
  height: {
    mask: "num cm",
    lazy: false,
    blocks: {
      num: {
        mask: Number,
        signed: false,
        thousandsSeparator: ".",
        radix: ",",
        mapToRadix: ["."],
      },
    },
  },
  days: {
    mask: "num di\\as",
    lazy: false,
    blocks: {
      num: {
        mask: Number,
        signed: false,
        thousandsSeparator: ".",
        radix: ",",
        mapToRadix: ["."],
      },
    },
  },
  labeledNumber: {
    mask: "num",
    lazy: false,
    blocks: {
      num: {
        mask: Number,
        signed: false,
        thousandsSeparator: ".",
        radix: ",",
        mapToRadix: ["."],
      },
    },
  },
  crudeNumber: {
    unmask: true,
    placeholder: "",
    inputMode: "numeric",
    mask: Number,
  },
  percentual: percentualMask(),
  percentualNegative: percentualMask("-"),
  phone: {
    unmask: true,
    mask: [{ mask: "(00) 00000-0000" }],
    inputMode: "numeric",
  },
  cnpj: {
    unmask: true,
    mask: [{ mask: "00.000.000/0000.000" }],
    inputMode: "numeric",
  },
}
export type IMaskTypes = keyof typeof maskList

function useIMask({ value, onChange, maskType, maskProps }) {
  const ref = useRef(null)
  const maskInstanceRef = useRef(null)
  const [inputValue, setInputValue] = useState("")

  const maskConfig = useMemo(() => {
    return cloneDeep(
      maskType ? { ...maskList[maskType], ...(maskProps || {}) } : maskProps,
    )
  }, [maskType, maskProps])

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return

    const instance = IMask(ref.current, {
      ...maskConfig,
      overwrite: true,
      lazy: false,
    })

    maskInstanceRef.current = instance

    instance.on("accept", () => {
      const raw = instance.typedValue ?? instance.unmaskedValue
      const masked = instance.value
      setInputValue(masked)
      onChange?.(raw)
    })

    return () => {
      instance.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, maskConfig]) // Só recria quando config muda

  useEffect(() => {
    const instance = maskInstanceRef.current
    if (!instance) return

    try {
      instance.typedValue = value
    } catch {
      instance.unmaskedValue = String(value ?? "")
    }

    setInputValue(instance.value)
  }, [value])

  return { ref, inputValue }
}

function MaskInput({ value, onChange, maskType, maskProps, ...props }) {
  const { ref, inputValue } = useIMask({
    value,
    onChange,
    maskType,
    maskProps,
  })
  return <Input ref={ref} value={inputValue} {...props} />
}

export default MaskInput
