/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutSectionAccessibility<T = any> extends cocoa.NSCollectionViewSectionAccessibility {}
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLayoutSectionAccessibility<T = any> extends cocoa.classes.NSCollectionViewSectionAccessibility {
      alloc<R = NSTouchBarCustomizationPaletteLayoutSectionAccessibility>(): R;
      new: <R = NSTouchBarCustomizationPaletteLayoutSectionAccessibility>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLayoutSectionAccessibility: cocoa.classes.NSTouchBarCustomizationPaletteLayoutSectionAccessibility;
