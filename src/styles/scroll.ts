import { css } from "styled-components"

export const GlobalScroll = css`
  &::-webkit-scrollbar {
    background: ${(props) => props.theme.colors.grey300};
    width: 0.5rem;
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 1rem;
  }
`

export const InvisibleScroll = css`
  &::-webkit-scrollbar {
    background: transparent;
    width: 0rem;
    height: 0rem;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`

export const TransparentScroll = css`
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`

export const DiscretScroll = css`
  &::-webkit-scrollbar {
    background: transparent;
    width: 0.3rem;
    height: 0.3rem;
    transition: 0.2s;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.grey500}00;
    border-radius: 1rem;
    transition: 0.2s;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.grey500}99;
    }
  }
`
export const SmallScroll = css`
  &::-webkit-scrollbar {
    background: transparent;
    width: 0.3rem;
    height: 0.3rem;
    transition: 0.2s;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.grey500}99;
    border-radius: 1rem;
    transition: 0.2s;
  }
`
