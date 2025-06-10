"use client"
import { useEffect, useState } from "react"
import { LottieComponentProps } from "lottie-react"
import { LottieAnimationa } from "./types"
import dynamic from "next/dynamic"
const LottieReact = dynamic(() => import("lottie-react"), { ssr: false })

type TLottieProps = Omit<LottieComponentProps, "animationData"> & {
  animation: (typeof LottieAnimationa)[number]
}

export default function Lottie({ animation, ...props }: TLottieProps) {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const data = await import(`../Lottie/Custom/${animation}.json`)
        setAnimationData(data.default)
      } catch (error) {
        console.error("Erro ao carregar a animação:", error)
      }
    }

    loadAnimation()
  }, [animation])

  const size = {
    width: props.width || 300,
    height: props.height || 300,
  }

  if (!animationData) return null

  return (
    <LottieReact
      animationData={animationData}
      className={`Lottie${props.className ? ` ${props.className}` : ""}`}
      width={size.width}
      height={size.height}
      style={{ width: size.width, height: size.height }}
      {...props}
    />
  )
}
