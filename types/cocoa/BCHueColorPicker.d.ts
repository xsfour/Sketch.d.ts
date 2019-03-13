/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHueColorPicker<T = any> extends BCColorPickerSliderView {
    hueValue<R = number>(): R;
    setHueValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface BCHueColorPicker<T = any> extends BCColorPickerSliderView {
      alloc<R = BCHueColorPicker>(): R;
      new: <R = BCHueColorPicker>() => R;
    }
  }
}

declare const BCHueColorPicker: cocoa.classes.BCHueColorPicker;
