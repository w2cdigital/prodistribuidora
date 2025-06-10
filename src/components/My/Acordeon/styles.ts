import {
  Disclosure as AriaDisclosure,
  DisclosurePanel as AriaDisclosurePanel,
} from "react-aria-components"
import styled, { css } from "styled-components"

export const Disclosure = styled(AriaDisclosure)(
  () => css`
    .react-aria-Button[slot="trigger"] {
      background: none;
      border: none;
      box-shadow: none;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 8px;

      .arrow_forward_ios {
        font-size: 12px;
        transition: rotate 200ms;
      }
    }
    &[data-expanded] .react-aria-Button[slot="trigger"] .arrow_forward_ios {
      rotate: 90deg;
    }
    .react-aria-DisclosurePanel {
      margin-left: 32px;
    }
  `,
)

export const DisclosurePanel = styled(AriaDisclosurePanel)(
  () => css`
    transition-behavior: allow-discrete;
    interpolate-size: allow-keywords;
    overflow-y: clip;
    transition-property: content-visibility, height;
    transition-timing-function: ease;
    transition-duration: 150ms;
    height: auto;
    &[aria-hidden="true"] {
      height: 0;
    }
  `,
)
