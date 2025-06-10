import { InputStyle, MoreButtonStyle, PopoverStyle } from "components/My/styles"
import {
  DatePicker as AriaDatePicker,
  Popover as AriaPopover,
  DateRangePicker as AriaDateRangePicker,
} from "react-aria-components"
import styled, { css } from "styled-components"
import { IColorNames } from "styles/colors"

export const DatePickerStyle = css`
  display: flex;
  flex-direction: column;
  color: var(--grey1000);
  width: 100%;
  ${InputStyle}
  .react-aria-Group {
    position: relative;
  }
  .react-aria-DateGroup {
    display: flex;
    ${MoreButtonStyle}
    .CalendarSmall {
      width: 1.5rem;
      height: 1.5rem;
    }
    .react-aria-DateInput {
      display: flex;
    }
  }

  .react-aria-DateSegment {
    &[data-placeholder] {
      color: hsla(from var(--grey1000) h s l / 0.2);
    }
  }
`

export const DatePicker = styled(AriaDatePicker)(
  () => css`
    ${DatePickerStyle}
  `,
)
export const DateRangePicker = styled(AriaDateRangePicker)(
  () => css`
    ${DatePickerStyle}
  `,
)

export const Popover = styled(AriaPopover)<{ color: IColorNames }>(
  ({ color }) => css`
    --component-color: var(--${color});
    ${PopoverStyle}
    box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
    border: 1px solid var(--grey400);
    .react-aria-Calendar,
    .react-aria-RangeCalendar {
      > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.5rem 0.5rem 0 0.5rem;
        > h2 {
          font-size: 1rem;
        }
        > button {
          height: 1.5rem;
          width: 1.5rem;
          padding: 0;
          font-size: 0.5rem;
        }
      }
      > table {
        width: 100%;
        padding: 0.5rem;
        .react-aria-CalendarGridHeader {
          height: 2.5rem;
        }
        .react-aria-CalendarGridBody {
          tr {
            td {
              > div {
                display: flex;
                cursor: pointer;
                flex-direction: column;
                align-items: center;
                text-align: center;
                vertical-align: middle;
                font-size: 0.8rem;
                height: 1.5rem;
                line-height: 1.5rem;
                border-radius: 0.2rem;
                &[data-hovered],
                &[data-selected] {
                  background-color: var(--component-color);
                  color: var(--white);
                }
                &[data-disabled="true"] {
                  opacity: 0.5;
                  cursor: not-allowed;
                }
              }
            }
          }
        }
      }
    }
  `,
)

export const WrapperAll = styled.div(
  () => css`
    display: flex;
    width: fit-content;
    > button {
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 1px solid var(--gre200);
      background: var(--grey50);
      border: none;
      background: transparent;
      > .Icon {
        font-size: 1rem;
      }
    }
  `,
)
