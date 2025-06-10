import { Breadcrumbs as AriaBreadcrumbs } from "react-aria-components"
import styled from "styled-components"

export const Breadcrumbs = styled(AriaBreadcrumbs)`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: var(--text-color);

  .react-aria-Breadcrumb:not(:last-child)::after {
    content: "›";
    content: "›" / "";
    alt: " ";
    padding: 0 5px;
  }

  a {
    color: var(--link-color-secondary);
    outline: none;
    font-size: 15px;
    letter-spacing: 1px;
    position: relative;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:not(&[href]) {
      text-decoration: none;
      cursor: auto;
    }

    &[data-hovered] {
      text-decoration: underline;
    }

    &[data-current] {
      color: var(--text-color);
      font-weight: bold;
    }

    &[data-focus-visible]:after {
      content: "";
      position: absolute;
      inset: -2px -4px;
      border-radius: 6px;
      border: 2px solid var(--focus-ring-color);
    }
  }
`
