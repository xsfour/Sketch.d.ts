/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSwatchBorder<T = any> extends cocoa.NSView {
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerSwatchBorder<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarColorPickerSwatchBorder>(): R;
      new: <R = _NSTouchBarColorPickerSwatchBorder>() => R;
    }
  }
}
