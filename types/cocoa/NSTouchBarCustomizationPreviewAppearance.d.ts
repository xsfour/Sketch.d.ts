/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewAppearance<T = any> extends NSAppearance {}
  namespace classes {
    export interface NSTouchBarCustomizationPreviewAppearance<T = any> extends NSAppearance {
      alloc<R = NSTouchBarCustomizationPreviewAppearance>(): R;
      new: <R = NSTouchBarCustomizationPreviewAppearance>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewAppearance: cocoa.classes.NSTouchBarCustomizationPreviewAppearance;
