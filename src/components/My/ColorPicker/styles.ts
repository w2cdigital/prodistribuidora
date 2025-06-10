import { Button, Popover } from "react-aria-components"
import styled, { css } from "styled-components"

export const ColorPickerButton = styled(Button)(
  () => css`
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    outline: none;
    border-radius: 4px;
    appearance: none;
    vertical-align: middle;
    font-size: 1rem;
    color: var(--grey1000);

    &[data-focus-visible] {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
    .react-aria-ColorSwatch {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  `,
)

export const ColorPickerPopover = styled(Popover)(
  () => css`
    outline: none;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 192px;
    max-height: inherit;
    box-sizing: border-box;
    overflow: auto;
    background: var(--grey150);
    border-radius: 0.2rem;
    outline: 1px solid var(--primary);
    .react-aria-ColorArea {
      width: 192px;
      height: 192px;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .react-aria-ColorThumb {
      border: 2px solid white;
      box-shadow:
        0 0 0 1px black,
        inset 0 0 0 1px black;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-sizing: border-box;

      &[data-focus-visible] {
        width: 24px;
        height: 24px;
      }
    }

    .react-aria-ColorField {
      display: flex;
      flex-direction: column;
      color: var(--grey1000);
    }
    .react-aria-Input {
      padding: 0.286rem;
      margin: 0;
      border: 1px solid var(--grey1000);
      border-radius: 5px;
      background: var(--grey100);
      font-size: 1.143rem;
      color: var(--grey1000);
      width: 100%;
      max-width: 12ch;
      box-sizing: border-box;

      &[data-focused] {
        outline: 2px solid var(--primary);
        outline-offset: -1px;
      }
    }
    .react-aria-ColorSlider {
      display: grid;
      grid-template-areas:
        "label output"
        "track track";
      grid-template-columns: 1fr auto;
      gap: 4px;
      max-width: 300px;

      .react-aria-Label {
        grid-area: label;
      }

      .react-aria-SliderOutput {
        grid-area: output;
      }

      .react-aria-SliderTrack {
        grid-area: track;
        border-radius: 4px;
      }

      &[data-orientation="horizontal"] {
        .react-aria-SliderTrack {
          height: 28px;
        }

        .react-aria-ColorThumb {
          top: 50%;
        }
      }

      .react-aria-ColorThumb {
        border: 2px solid white;
        box-shadow:
          0 0 0 1px black,
          inset 0 0 0 1px black;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-sizing: border-box;

        &[data-focus-visible] {
          width: 24px;
          height: 24px;
        }
      }
    }
  `,
)
