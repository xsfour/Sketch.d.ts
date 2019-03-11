/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewAppearance<T = any> extends cocoa.NSAppearance {}
  namespace classes {
    export interface NSTouchBarCustomizationPreviewAppearance<T = any> extends cocoa.classes.NSAppearance {
      alloc<R = NSTouchBarCustomizationPreviewAppearance>(): R;
      new: <R = NSTouchBarCustomizationPreviewAppearance>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewAppearance: cocoa.classes.NSTouchBarCustomizationPreviewAppearance;
