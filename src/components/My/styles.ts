import { css } from "styled-components"
import { GlobalScroll } from "styles/scroll"

export const InputStyle = css`
  >label{
    padding-left: 1rem;
  }
  .react-aria-SelectButton,
  .react-aria-Input,
  .react-aria-DateGroup,
  .react-aria-TextArea {
    padding: 0.5rem;
    margin: 0;
    border-radius: 20px;
    font-size: 1rem;
    border: 1px solid transparent;
    background: #D9E1E6;
    color: var(--grey1000);
    width: 100%;

    &[data-focused],
    &:focus {
      outline: 1px solid hsla(from var(--medTech) h s calc(l + 3) / 0.5);
      outline-offset: -1px;
    }
    &::placeholder {
      color: var(--grey400);
    }
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px var(--grey150) inset;
      -webkit-text-fill-color: var(--grey1000) !important;
    }
  }
  .react-aria-FieldError {
    color: var(--red);
    font-size: 0.8rem;
  }
  .react-aria-Text[slot="description"] {
    font-size: 0.8rem;
  }
`

export const MoreButtonStyle = css`
  position: relative;
  .moreBtn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: var(--grey50);
    color: var(--grey900);
    border-radius: 4px;
    border: none;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    forced-color-adjust: none;
  }
  &[data-pressed],
  &:has([data-focused]) {
    .moreBtn {
      background: var(--grey150);
    }
  }
`

export const PopoverStyle = css`
  min-width: var(--trigger-width);
  background: var(--grey0);
  border: 1px solid var(--grey100);

  .react-aria-ListBox {
    display: block;
    width: unset;
    max-height: inherit;
    min-height: unset;
    border: none;
    max-height: 12rem;
    overflow-y: auto;
    border-radius: 5px;
    box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
    ${GlobalScroll}

    .react-aria-Header {
      padding-left: 1.571rem;
    }
  }

  .react-aria-ListBoxItem {
    padding: 0.286rem 0.571rem 0.286rem 1.571rem;
    position: relative;
    cursor: pointer;

    &[data-focus-visible] {
      outline: none;
    }

    &[data-selected] {
      font-weight: 600;
      background: unset;
      color: var(--grey1000);

      &::before {
        content: "✓";
        content: "✓" / "";
        alt: " ";
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: hsla(from var(--medTech) h s l / 0.3);
      color: var(--white);
    }
  }
`
export const DialogStyle = css`
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--grey0);
  color: var(--grey1000);
  border: 1px solid var(--grey400);
  outline: none;

  .react-aria-Dialog {
    outline: none;

    max-height: inherit;
    box-sizing: border-box;
    overflow: auto;

    .react-aria-Heading[slot="title"] {
      line-height: 1em;
      margin-top: 0;
    }
  }
`
