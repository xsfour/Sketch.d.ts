/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCAlphaColorPicker<T0 = void, T1 = void, T2 = void> extends BCColorPickerSliderView {
    drawAlphaGradient<R = void>(): R;
    drawCheckerboard<R = void>(): R;
    color<R = BCFlexibleColor>(): R;
    setColor<R = void, P0 = BCFlexibleColor>(_v: P0): R;
    colorAlphaValue<R = number>(): R;
    setColorAlphaValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCAlphaColorPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCColorPickerSliderView {
      alloc<R = BCAlphaColorPicker>(): R;
      new: <R = BCAlphaColorPicker>() => R;
    }
  }
}

declare const BCAlphaColorPicker: cocoa.BCAlphaColorPicker.CLASS;
