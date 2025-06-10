"use client"
import { useCallback, useState } from "react"
import { getRequestError } from "utils/validateError"

function useFormError() {
  const [formError, setFormError] = useState([])
  const validateError = useCallback((res) => {
    setFormError(getRequestError(res))
  }, [])

  return {
    formError,
    validateError,
  }
}
function MyFormError({ list }) {
  return list?.map((err, i) => (
    <span key={i} className="react-aria-FieldError">
      {err}
    </span>
  ))
}

MyFormError.useFormError = useFormError

export default MyFormError
