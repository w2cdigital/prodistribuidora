"use client"

import { useCallback, useEffect, useState } from "react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"
import * as S from "./styles"
import { useTheme } from "styled-components"
import doAfter from "utils/doAfter"
import { useClickOutside } from "utils/useclickOutside"

type props = {
  disabled?: boolean
  refId: string
  textValue: string
  onEmojiSelect: (e: string) => any
}

function EmojiPicker({ refId, textValue, disabled, onEmojiSelect }: props) {
  const [state, setState] = useState(false)
  const ref = useClickOutside({ onClickOutside: () => setState(false) })
  const {
    name,
    colors: { primary },
  } = useTheme()

  const setTheme = useCallback(() => {
    doAfter(() => {
      const ShadowRootStyles = ref.current
        ?.querySelector("em-emoji-picker")
        ?.shadowRoot?.querySelector("style")
      const [r, g, b] = [
        primary.slice(1, 3),
        primary.slice(3, 5),
        primary.slice(5),
      ].map((h) => parseInt(h, 16))
      const val = `var(--rgb-accent, ${r}, ${g}, ${b})`
      ShadowRootStyles.innerHTML = ShadowRootStyles?.innerHTML
        .replaceAll("var(--rgb-accent, 34, 102, 237)", val)
        .replaceAll("var(--rgb-accent, 58, 130, 247)", val)
    }, 0)
  }, [primary, ref])

  useEffect(() => {
    if (state) setTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <S.EmojiWrapper className="EmojiPicker" ref={ref}>
      <button disabled={disabled} onClick={() => setState((s) => !s)}>
        ☻
      </button>
      {state && (
        <Picker
          data={data}
          locale={"pt"}
          theme={{ Dark: "dark", Light: "light" }[name]}
          skinTonePosition="search"
          previewPosition="none"
          onEmojiSelect={(e: {
            keywords: string[]
            shortcodes: string
            unified: string
            native: string
            name: string
            id: string
            skin: number
          }) => {
            const TextRef = document?.getElementById?.(refId)
            if (!TextRef) return
            const [selectionStart, selectionEnd] = [
              TextRef?.["selectionStart"],
              TextRef?.["selectionEnd"],
            ]
            TextRef.focus()
            const slices = [
              textValue.slice(0, selectionStart),
              textValue.slice(selectionStart, selectionEnd),
              textValue.slice(selectionEnd, textValue.length),
            ]
            slices[1] = e.native
            onEmojiSelect(slices.join(""))
          }}
        />
      )}
    </S.EmojiWrapper>
  )
}

export default EmojiPicker
