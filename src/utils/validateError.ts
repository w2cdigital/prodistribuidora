import { AxiosError } from "axios"
import Toasts from "components/Toasts"

export interface IRequestError {
  message: string
  validateError: {
    constraints: {
      message: string
    }
  }[]
}

export function validateYupErrors(err) {
  return err?.inner?.reduce(
    (errors, error) => ({
      ...errors,
      [error.path]: error.message,
    }),
    {},
  )
}

export function getErrors(err: AxiosError<IRequestError>) {
  const errors = []
  if (err?.response?.data?.validateError) {
    err?.response?.data?.validateError?.map((type) =>
      Object.keys(type?.constraints).map((messageKey) => {
        errors.push({
          description: type?.constraints?.[messageKey],
          type: "error",
          timer: 0,
        })
      }),
    )
    return errors
  }

  if (err?.response?.data?.message) {
    if (err?.response?.data?.message?.includes("ECONNREFUSED")) {
      errors.push({
        title: "Falha ao conectar com o servidor",
        description:
          "Entre em contato com a nossa equipe pelo número (73) 99199-1079",
        type: "error",
        timer: 0,
      })
      return errors
    }
    errors.push({
      description: err?.response?.data?.message,
      type: "error",
      timer: 0,
    })
    return errors
  }
  if (err.message === "Network Error") {
    errors.push({
      title: "Sem conexão",
      description: "Verifique sua internet e tente novamente",
      type: "error",
      timer: 0,
    })
    return errors
  }
  errors.push({
    description: err.message,
    type: "error",
    timer: 0,
  })
  return errors
}
export function getRequestError(res) {
  const err = res?.err || res
  if (!err?.response?.validateError && !err?.response) return []
  const errList =
    err?.response?.validateError?.map?.(
      (e) => e?.constraints?.message || e?.message,
    ) || []
  if (err?.response?.message) errList.push(err?.response?.message)
  return errList
}
export function validateRequestError(err: AxiosError<IRequestError>, message?) {
  if (err?.response?.data?.validateError) {
    err?.response?.data?.validateError?.map((type) =>
      Object.keys(type?.constraints).map((messageKey) => {
        Toasts.add({
          title: message,
          description: type?.constraints?.[messageKey],
          type: "error",
          timer: 0,
        })
      }),
    )
    return
  }

  if (err?.response?.data?.message) {
    if (err?.response?.data?.message?.includes("ECONNREFUSED")) {
      Toasts.add({
        title: "Falha ao conectar com o servidor",
        description:
          "Entre em contato com a nossa equipe pelo número (73) 99199-1079",
        type: "error",
        timer: 0,
      })
      return
    }
    Toasts.add({
      title: message,
      description: err?.response?.data?.message,
      type: "error",
      timer: 0,
    })
    return
  }
  if (err.message === "Network Error") {
    Toasts.add({
      title: "Sem conexão",
      description: "Verifique sua internet e tente novamente",
      type: "error",
      timer: 0,
    })
    return
  }
  Toasts.add({
    title: message,
    description: err.message,
    type: "error",
    timer: 0,
  })
}

export function toastYupErros(errors, texts) {
  Object.keys(errors).forEach((item) => {
    Toasts.add({
      title: texts[errors[item]],
      type: "error",
    })
  })
}
