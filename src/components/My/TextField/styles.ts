import { InputStyle } from "components/My/styles"
import {
  TextField as AriaTextField,
  SearchField as AriaSearchField,
} from "react-aria-components"
import styled, { css } from "styled-components"

export const TextFieldStyle = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--grey1000);
  > div {
    position: relative;
    width: 100%;
  }
  .Search {
    fill: var(--grey500);
    position: absolute;
    right: 0.5rem;
    top: calc(50% - 0.7rem);
    width: 1.4rem;
    height: 1.4rem;
  }
  .search-close,
  .password {
    position: absolute;
    height: 1rem;
    width: 1rem;
    top: calc(50% - 0.5rem);
    right: 0.52rem;
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .Icon {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  > div > input {
    &[type="search"] {
      padding-left: 2.2rem;
    }
    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  }
  &:not([data-empty]) .Search {
    display: none;
  }
  &[data-empty] .search-close {
    display: none;
  }
  ${InputStyle}
`

export const TextField = styled(AriaTextField)(
  () => css`
    ${TextFieldStyle}
  `,
)

export const SearchField = styled(AriaSearchField)(
  () => css`
    ${TextFieldStyle}
  `,
)
