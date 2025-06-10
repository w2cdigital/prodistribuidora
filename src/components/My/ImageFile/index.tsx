"use client"
import { FileTrigger, FileTriggerProps } from "react-aria-components"
import { Prettify } from "types/helpers"
import { MIcon } from "components/Icons"
import SVG from "components/SVG"
import * as S from "./styles"
import Image from "next/image"

type TButtonProps = Prettify<
  FileTriggerProps & {
    value?: string | File
    className?: string
    alt?: string
    isDisabled?: boolean
  }
>

function MyImageFile({
  children,
  value,
  className,
  alt,
  isDisabled,
  ...props
}: TButtonProps) {
  return (
    <FileTrigger {...props}>
      <S.FileTrigger
        isDisabled={isDisabled}
        variant="styleless"
        className={className}
      >
        {value ? (
          <>
            {typeof value === "string" ? (
              <Image
                unoptimized
                src={value}
                width={0}
                height={0}
                sizes="100vw"
                alt={alt}
              />
            ) : (
              <Image
                unoptimized
                src={URL.createObjectURL(value)}
                width={0}
                height={0}
                sizes="100vw"
                alt={alt}
              />
            )}
          </>
        ) : (
          <SVG icon="Gallery" />
        )}
        {!isDisabled && <MIcon icon="edit" />}
        {children}
      </S.FileTrigger>
    </FileTrigger>
  )
}
export default MyImageFile
