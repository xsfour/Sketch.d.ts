/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCAlphaColorPicker<T = any> extends cocoa.BCColorPickerSliderView {
    drawAlphaGradient<R = void>(): R;
    drawCheckerboard<R = void>(): R;
    color<R = cocoa.BCFlexibleColor>(): R;
    setColor<R = void, P0 = cocoa.BCFlexibleColor>(_v: P0): R;
    colorAlphaValue<R = number>(): R;
    setColorAlphaValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface BCAlphaColorPicker<T = any> extends cocoa.classes.BCColorPickerSliderView {
      alloc<R = BCAlphaColorPicker>(): R;
      new: <R = BCAlphaColorPicker>() => R;
    }
  }
}

declare const BCAlphaColorPicker: cocoa.classes.BCAlphaColorPicker;
