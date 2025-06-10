"use client"
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorPickerProps,
  ColorSlider,
  ColorSwatch,
  ColorThumb,
  Dialog,
  DialogTrigger,
  Input,
  Label,
  SliderTrack,
} from "react-aria-components"
import * as S from "./styles"
import { Prettify } from "types/helpers"
type MyColorPickerProps = Prettify<ColorPickerProps & { label?: string }>

function MyColorPicker({ label, ...props }: MyColorPickerProps) {
  return (
    <ColorPicker {...props}>
      <DialogTrigger>
        <S.ColorPickerButton>
          <ColorSwatch
            style={({ color }) => ({
              background: `linear-gradient(${color}, ${color}),
                        repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
            })}
          />
          <span>{label}</span>
        </S.ColorPickerButton>
        <S.ColorPickerPopover placement="bottom start">
          <Dialog className="color-picker-dialog">
            <ColorArea
              colorSpace="hsb"
              xChannel="saturation"
              yChannel="brightness"
            >
              <ColorThumb />
            </ColorArea>
            <ColorSlider colorSpace="hsb" channel="hue">
              <SliderTrack data-orientation="horizontal">
                <ColorThumb />
              </SliderTrack>
            </ColorSlider>
            <ColorField>
              <Label>{label}</Label>
              <Input />
            </ColorField>
          </Dialog>
        </S.ColorPickerPopover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default MyColorPicker
