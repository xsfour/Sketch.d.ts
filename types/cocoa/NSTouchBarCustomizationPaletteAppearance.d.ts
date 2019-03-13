/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteAppearance<T = any> extends NSBuiltinAppearance {}
  namespace classes {
    export interface NSTouchBarCustomizationPaletteAppearance<T = any> extends NSBuiltinAppearance {
      alloc<R = NSTouchBarCustomizationPaletteAppearance>(): R;
      new: <R = NSTouchBarCustomizationPaletteAppearance>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteAppearance: cocoa.classes.NSTouchBarCustomizationPaletteAppearance;
