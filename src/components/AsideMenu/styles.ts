"use client"
import styled, { css } from "styled-components"

export const Aside = styled.aside(
  () => css`
    position: sticky;
    background: var(--grey0);
    border-right: 1px solid hsla(from var(--primary) h s l / 0.05);
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    transition:
      0.3s max-width ease-in-out,
      0.3s left ease-in-out;
    z-index: 3;
    @media (min-width: 769px) {
      max-width: 80px;
      &.open {
        max-width: 260px;
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      max-width: 300px;
      min-width: 300px;
      &:not(.open) {
        left: 0;
      }
      &.open {
        left: -300px;
      }
    }
  `,
)
export const Overlay = styled.aside(
  () => css`
    position: fixed;
    background: var(--black);
    opacity: 0.3;
    width: 100dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.2s;
    &.open {
      visibility: hidden;
      opacity: 0;
    }
    @media (min-width: 769px) {
      display: none;
    }
  `,
)

export const Company = styled.header(
  () => css`
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid hsla(from var(--primary) h s l / 0.05);
    height: 80px;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    .toggleAside {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      border-radius: 0.5rem 0 0 0.5rem;
      background: var(--primary);
      border: none;
      height: 3rem;
      width: 1.3rem;
      cursor: pointer;
      .Icon {
        font-size: 0.8rem;
        color: var(--white);
      }
    }
    > img {
      width: calc(100% - 1.3rem);
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
    @media (max-width: 768px) {
      .toggleAside {
        display: none;
      }
    }
  `,
)

export const Menu = styled.div(() => css``)
