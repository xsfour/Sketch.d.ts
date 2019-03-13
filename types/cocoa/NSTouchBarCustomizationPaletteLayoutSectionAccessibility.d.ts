/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutSectionAccessibility<T = any> extends NSCollectionViewSectionAccessibility {}
  namespace classes {
    export interface NSTouchBarCustomizationPaletteLayoutSectionAccessibility<T = any> extends NSCollectionViewSectionAccessibility {
      alloc<R = NSTouchBarCustomizationPaletteLayoutSectionAccessibility>(): R;
      new: <R = NSTouchBarCustomizationPaletteLayoutSectionAccessibility>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLayoutSectionAccessibility: cocoa.classes.NSTouchBarCustomizationPaletteLayoutSectionAccessibility;
