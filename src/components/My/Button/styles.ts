import { Button as AriaButton } from "react-aria-components"
import NextLink from "next/link"
import styled, { css } from "styled-components"
import { IColorNames } from "styles/colors"

const ButtonStyle = (color) => css`
  --component-color: var(--${color});
  --component-color-5: hsla(from var(--component-color) h s calc(l + 5));
  --component-color-10: hsla(from var(--component-color) h s calc(l + 10));
  --component-color-disabled: hsla(
    from var(--component-color) h calc(s - 50) calc(l + 5) / 0.9
  );
  border-radius: 5px;
  appearance: none;
  vertical-align: middle;
  text-align: center;
  font-size: 1rem;
  margin: 0;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;

  .Spinner {
    margin: auto;
  }

  &[data-variant="styleless"],
  &[data-variant="link"] {
    background: transparent;
    border: none;
    padding: 0;
  }
  &[data-variant="link"] {
    &[data-hovered],
    &:hover {
      text-decoration: underline;
    }
  }
  &[data-variant="fill"] {
    padding: 0.5rem 10px;
    background-color: var(--component-color);
    border: 1px solid var(--component-color);
    color: var(--white);
    transition:
      0.2s background-color,
      0.2s color,
      0.2s border-color;

    &[data-focus-visible] {
      outline: 2px solid var(--component-color);
      outline-offset: -1px;
    }
    &[data-hovered],
    &:hover {
      background: var(--component-color-5);
      border-color: var(--component-color-5);
    }
    &[data-pressed],
    &:active {
      background: var(--component-color-10);
      border-color: var(--component-color-10);
      box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    }
    &[data-disabled="true"],
    &:disabled {
      background: var(--component-color-disabled);
      border-color: var(--component-color-disabled);
    }
  }
  &[data-variant="outline"] {
    padding: 0.5rem 10px;
    background-color: transparent;
    border: 1px solid var(--component-color);
    color: var(--component-color);
    transition:
      0.2s background-color,
      0.2s color;

    &[data-focus-visible] {
      outline: 2px solid var(--component-color);
      outline-offset: -1px;
    }
    &[data-hovered],
    &:hover {
      background-color: var(--component-color);
      color: var(--white);
    }
    &[data-pressed],
    &:active {
      background-color: var(--component-color);
      color: var(--white);
    }
    &[data-disabled="true"],
    &:disabled {
      background-color: transparent;
      color: var(--component-color-disabled);
      border-color: var(--component-color-disabled);
    }
  }
  &[data-disabled="true"],
  &:disabled {
    cursor: not-allowed;
  }
`

export const Button = styled(AriaButton)<{ color: IColorNames }>(
  ({ color }) => css`
    ${ButtonStyle(color)}
  `,
)
export const Link = styled(NextLink)<{ color: IColorNames }>(
  ({ color }) => css`
    ${ButtonStyle(color)}
  `,
)
