"use client"
import {
  Table as AriaTable,
  Column as AriaColumn,
  Row as AriaRow,
  Cell as AriaCell,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
} from "react-aria-components"
import styled, { css } from "styled-components"
import MyPopover from "../Popover"
import MyButton from "../Button"

export const Table = styled(AriaTable)(
  () => css`
    border-radius: 0.2rem;
    background: var(--grey0);
    outline: none;
    border-spacing: 0;
    min-height: 100px;
    align-self: start;
    max-width: 100%;
    word-break: break-word;
    forced-color-adjust: none;

    &[data-focus-visible] {
      outline: 2px solid var(--grey500);
      outline-offset: -1px;
    }
    @supports selector(:has(.foo)) {
      [data-aria-row][data-selected]:has(+ [data-selected]),
      [data-aria-row][data-selected]:has(
          + .react-aria-DropIndicator + [data-selected]
        ) {
        --radius-bottom: 0px;
      }

      [data-aria-row][data-selected] + [data-selected],
      [data-aria-row][data-selected]
        + .react-aria-DropIndicator
        + [data-selected] {
        --radius-top: 0px;
      }
    }
  `,
)

export const TableHeader = styled(AriaTableHeader)(
  () => css`
    color: var(--grey1000);

    & tr:last-child [data-aria-column] {
      color: var(--grey400);
      font-weight: 500;
      border-bottom: 1px solid var(--grey200);
      cursor: default;
    }
  `,
)

export const TableBody = styled(AriaTableBody)(
  () => css`
    [data-aria-row]:nth-child(even) {
      background: hsla(from var(--primary) h s l / 0.05);
    }
    [data-aria-row]:nth-child(odd) {
      background: var(--grey0);
    }
    [data-aria-footer] {
      background-color: hsla(from var(--primary) h s l / 0.2);
    }
    .notFound {
      display: flex;
      margin: auto;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: var(--grey400);
    }
  `,
)

export const Row = styled(AriaRow)(
  () => css`
    clip-path: inset(0 round var(--radius));
    outline: none;
    cursor: default;
    color: var(--grey1000);
    font-size: 1.072rem;
    position: relative;
    transform: scale(1);

    &[data-focus-visible] {
      outline: 2px solid var(--grey500);
      outline-offset: -2px;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-selected] {
      background: hsla(from var(--primary) h s l / 0.5);
      color: var(--grey1000);

      &[data-focus-visible],
      [data-aria-cell][data-focus-visible] {
        outline-offset: -4px;
      }
    }
    [data-aria-footer] > td {
      padding: 1rem 0.5rem;
    }

    &[data-disabled="true"] {
      color: var(--grey700);
    }
  `,
)

const BaseItem = css`
  padding: 4px 8px;
  text-align: left;
  outline: none;

  &.ta-c {
    text-align: center;
  }
  &.ta-e {
    text-align: end;
  }
  &.ta-s {
    text-align: start;
  }
  &.elipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 0;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--primary);
    outline-offset: -2px;
  }
`
export const Column = styled(AriaColumn)<{ size: string }>(
  ({ size }) => css`
    ${BaseItem}
    ${size &&
    css`
      width: ${size};
    `};
  `,
)

export const Cell = styled(AriaCell)(
  () => css`
    ${BaseItem}
    &:first-child {
      border-radius: var(--radius-top) 0 0 var(--radius-bottom);
    }

    &:last-child {
      border-radius: 0 var(--radius-top) var(--radius-bottom) 0;
    }
  `,
)

export const Toolbar = styled.section(
  () => css`
    display: flex;
    gap: 0.5rem;
    .fieldsButton,
    .filterButton {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 2.5rem;
      min-height: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.1rem;
      background-color: var(--grey50);
      border-color: var(--grey200);
      > span {
        transition: 0.1s;
      }

      &:hover {
        background-color: var(--grey100);
        > span {
          color: var(--primary);
        }
      }
    }
    .fieldsMenu .react-aria-Dialog {
      width: 10rem;
    }
  `,
)

export const FieldsMenu = styled(MyPopover.Menu)(
  () => css`
    .react-aria-Dialog {
      display: flex;
      width: 10rem;
      gap: 0.2rem;
      flex-direction: column;
      padding: 0.2rem;
    }
  `,
)

export const FiltersMenu = styled(MyPopover.Menu)(
  () => css`
    .react-aria-Dialog {
      display: flex;
      min-width: 10rem;
      max-width: 20rem;
      gap: 0.2rem;
      flex-direction: column;
      padding: 0.2rem;
      .field {
        display: flex;
        flex-direction: column;
        .label {
          font-size: 0.6rem;
          text-align: center;
        }
        > div {
          display: flex;
          justify-content: center;
          gap: 0.2rem;
        }
      }
    }
  `,
)

export const Field = styled(MyButton)(
  () => css`
    padding: 0.2rem;
    justify-content: start;
    text-align: start;
    display: flex;
    gap: 0.2rem;
    transition: 0.1s;
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      .check {
        color: var(--white);
        font-size: 1rem;
        transition: 0.1s;
      }
    }
    &:not(.selected) {
      background: transparent;
      border-color: transparent;
      &:not(:hover) {
        color: var(--grey1000);
      }
      > span {
        .check {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  `,
)
export const Filter = styled(MyButton)(
  () => css`
    padding: 0.2rem;
    justify-content: start;
    text-align: start;
    display: flex;
    gap: 0.2rem;
    transition: 0.1s;
    &:not(.selected) {
      background: transparent;
      border-color: transparent;
      &:not(:hover) {
        color: var(--grey1000);
      }
    }
  `,
)

export const Pagination = styled.footer(
  () => css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
    > div {
      display: flex;
      justify-content: space-between;
      background-color: hsla(from var(--primary) h s l / 0.2);
      > span {
        padding: 1rem;
      }
    }
    > ul {
      list-style: none;
      display: flex;
      align-self: flex-end;
      gap: 0.5rem;
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 2rem;
        height: 2rem;
        border-radius: 5px;
        color: var(--primary);
        font-weight: 500;
        cursor: pointer;
        transition:
          0.2s color,
          0.2s background-color;
        > a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          user-select: none;
          width: 100%;
          height: 100%;
        }
        &.selected {
          background-color: hsla(from var(--primary) h s l / 0.2);
          color: var(--primary);
        }
      }
      > li:not(.previous):not(.next) {
      }
      .previous,
      .next {
        > a {
          font-family: "Material Icons";
        }
      }
    }
  `,
)
