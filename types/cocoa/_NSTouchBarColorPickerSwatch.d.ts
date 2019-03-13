/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSwatch<T = any> extends NSView {
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerSwatch<T = any> extends NSView {
      alloc<R = _NSTouchBarColorPickerSwatch>(): R;
      new: <R = _NSTouchBarColorPickerSwatch>() => R;
    }
  }
}
