/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSaturationBrightnessColorPicker<T = any> extends cocoa.BCColorPickerBaseView {
    pickerRect<R = cocoa.CGRect>(): R;
    groupingUndo<R = boolean>(): R;
    setGroupingUndo<R = void, P0 = boolean>(_v: P0): R;
    handlingHistoryCoalescing<R = boolean>(): R;
    setHandlingHistoryCoalescing<R = void, P0 = boolean>(_v: P0): R;
    brightness<R = number>(): R;
    setBrightness<R = void, P0 = number>(_v: P0): R;
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    hue<R = number>(): R;
    setHue<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface BCSaturationBrightnessColorPicker<T = any> extends cocoa.classes.BCColorPickerBaseView {
      alloc<R = BCSaturationBrightnessColorPicker>(): R;
      new: <R = BCSaturationBrightnessColorPicker>() => R;
    }
  }
}

declare const BCSaturationBrightnessColorPicker: cocoa.classes.BCSaturationBrightnessColorPicker;
