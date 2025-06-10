"use client"
import { CheckboxProps } from "react-aria-components"
import { Fragment } from "react"
import { IColorNames } from "styles/colors"
import { Prettify } from "types/helpers"
import * as S from "./styles"
import Loading from "components/Loading"
type TButtonProps = Prettify<
  CheckboxProps & {
    color?: IColorNames
    isLoading?: boolean
  }
>

function MyCheckbox({
  children,
  isLoading,
  color = "primary",
  ...props
}: TButtonProps) {
  return (
    <S.Checkbox color={color} {...props}>
      {({ isIndeterminate }) => (
        <Fragment>
          <Loading state={isLoading}>
            <div className="checkbox">
              <svg viewBox="0 0 18 18" aria-hidden="true">
                {isIndeterminate ? (
                  <rect x={1} y={7.5} width={15} height={3} />
                ) : (
                  <polyline points="1 9 7 14 15 4" />
                )}
              </svg>
            </div>
          </Loading>
          {children as any}
        </Fragment>
      )}
    </S.Checkbox>
  )
}
export default MyCheckbox
