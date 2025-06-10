import styled, { css } from "styled-components"
import MyButton from "../Button"

export const FileTrigger = styled(MyButton)(
  () => css`
    &[data-variant="styleless"] {
      border-radius: 0.5rem;
      border: 3px dashed hsla(from var(--primary) h s l / 0.1);
      width: max(100%, 200px);
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
      background: var(--grey0);
      transition: background 0.2s;

      .Gallery {
        width: 2.5rem;
        height: 2.5rem;
        stroke: var(--primary);
      }
      .edit {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        border-radius: 100%;
        padding: 0.5rem;
        color: var(--white);
        background-color: var(--grey800);
        transition: background-color 0.2s;
      }
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: scale 0.2s;
        pointer-events: none;
      }
      &:hover {
        background: var(--grey100);
        .edit {
          background-color: var(--grey900);
        }
        &:not(:disabled) {
          > img {
            scale: 1.1;
          }
        }
      }
    }
  `,
)
