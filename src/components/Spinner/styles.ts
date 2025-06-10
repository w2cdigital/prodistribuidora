import styled, { css } from "styled-components"

const StylesSpinner = {
  Spinner: styled.i(
    () => css`
      display: flex;
      border: 2px solid var(--grey300);
      border-left-color: hsla(from var(--primary) h s calc(l - 20) / 1);
      border-radius: 50%;
      min-width: 20px;
      min-height: 20px;
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
    `,
  ),
}

export default StylesSpinner
