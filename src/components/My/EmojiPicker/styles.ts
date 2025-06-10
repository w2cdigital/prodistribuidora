import styled, { css } from "styled-components"

export const EmojiWrapper = styled.div(() => {
  return css`
    position: relative;
    > button {
      min-width: 2.2rem;
      max-width: 2.2rem;
      min-height: 2.2rem;
      max-height: 2.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 100%;
      transition: 0.2s;
      font-size: 2.5rem;
      user-select: none;
      background: transparent;
      border: none;
      color: var(--grey600);
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    > div {
      position: absolute;
      bottom: 100%;
      right: -10rem;
    }
  `
})
