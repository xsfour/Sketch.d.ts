/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripCustomizationPaletteAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSControlStripCustomizationPaletteAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSControlStripCustomizationPaletteAppearance>(): R;
      new: <R = NSControlStripCustomizationPaletteAppearance>() => R;
    }
  }
}

declare const NSControlStripCustomizationPaletteAppearance: cocoa.classes.NSControlStripCustomizationPaletteAppearance;
