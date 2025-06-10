"use client"
// Styles
import * as S from "./styles"

// Helpers
import { useCallback, useEffect, useMemo } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import { signal } from "@preact/signals-react"
import doAfter from "utils/doAfter"
import { v4 } from "uuid"

// Components
import Spinner from "components/Spinner"
import { MIcon } from "components/Icons"

export type IToasTType = "success" | "error" | "info" | "loading"
export interface IToast {
  type?: IToasTType
  id?: string
  title: string
  description?: string
  timer?: number
}

const toastList = signal<IToast[]>([])

function add(message: IToast) {
  message = { timer: 3, id: v4(), type: "info", ...message }
  toastList.value = [...toastList.value, message]
  return message.id
}

function remove(id: string) {
  toastList.value = toastList.value.filter((item) => item.id !== id)
}

const IconList = {
  success: <MIcon icon="check_circle_outline" type="outlined" />,
  error: <MIcon icon="error_outline" type="outlined" />,
  info: <MIcon icon="info" type="outlined" />,
  loading: <Spinner />,
}

function Card({ toast }: { toast: IToast }) {
  const controls = useDragControls()

  const clearToast = useCallback(() => {
    if (toast.timer === 0) {
      return
    }
    doAfter(() => {
      remove(toast.id)
    }, toast.timer * 1000)
  }, [toast])

  useEffect(() => {
    clearToast()
  }, [clearToast])

  const Icon = useMemo(() => () => IconList[toast.type], [toast])
  return (
    <motion.div
      initial={{ marginLeft: "332px" }}
      animate={{ marginLeft: "0px" }}
      exit={{ marginLeft: "332px" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      dragConstraints={{ left: 0, right: 0 }}
      dragControls={controls}
      onDragEnd={() => remove(toast.id)}
      drag={"x"}
    >
      <S.Card type={toast.type}>
        <section>
          <Icon />
        </section>
        <MIcon icon="close" onClick={() => remove(toast.id)} />
        <div>
          <h6>{toast.title}</h6>
          <span>{toast.description}</span>
        </div>
      </S.Card>
    </motion.div>
  )
}

function ToastContainer({ messages }: { messages: IToast[] }) {
  return (
    <S.ToastContainer>
      <AnimatePresence>
        {messages.map((message) => (
          <Card key={message.id} toast={message} />
        ))}
      </AnimatePresence>
    </S.ToastContainer>
  )
}

export default {
  list: toastList,
  add,
  remove,
  Card,
  ToastContainer,
}
