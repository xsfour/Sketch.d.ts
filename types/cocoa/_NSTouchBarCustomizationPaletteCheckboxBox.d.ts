/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPaletteCheckboxBox<T = any> extends cocoa.NSView {
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    wantsLayer<R = boolean>(): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
    hasAccessibilityAppearance<R = boolean>(): R;
    setHasAccessibilityAppearance<R = void, P0 = boolean>(_v: P0): R;
    checked<R = boolean>(): R;
    setChecked<R = void, P0 = boolean>(_v: P0): R;
    highlighted<R = boolean>(): R;
    setHighlighted<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationPaletteCheckboxBox<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSTouchBarCustomizationPaletteCheckboxBox>(): R;
      new: <R = _NSTouchBarCustomizationPaletteCheckboxBox>() => R;
    }
  }
}
