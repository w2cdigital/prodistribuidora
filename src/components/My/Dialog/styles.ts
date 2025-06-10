import { DialogStyle } from "components/My/styles"
import { Modal as AriaModal } from "react-aria-components"
import styled, { css } from "styled-components"

export const ModalOverlay = css`
  .react-aria-ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--visual-viewport-height);
    background: rgba(0 0 0 / 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100001;

    &[data-entering] {
      animation: modal-fade 200ms;
    }

    &[data-exiting] {
      animation: modal-fade 150ms reverse ease-in;
    }
  }
`
export const Modal = styled(AriaModal)(
  () => css`
    &[data-entering] {
      animation: modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &[data-modal-type="default"] {
      ${DialogStyle}
      max-width: 300px;
    }
  `,
)

export const ModalNative = styled.div<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0 0 0 / 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition:
      opacity 200ms,
      visibility 200ms;

    ${!isOpen &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
  `,
)
