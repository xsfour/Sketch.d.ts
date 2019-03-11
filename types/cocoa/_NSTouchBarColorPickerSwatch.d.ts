/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSwatch<T = any> extends cocoa.NSView {
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarColorPickerSwatch<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarColorPickerSwatch>(): R;
      new: <R = _NSTouchBarColorPickerSwatch>() => R;
    }
  }
}
