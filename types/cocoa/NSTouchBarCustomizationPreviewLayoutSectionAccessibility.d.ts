/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewLayoutSectionAccessibility<T = any> extends cocoa.NSCollectionViewSectionAccessibility {
    accessibilityIsHiddenAttributeSettable<R = boolean>(): R;
    accessibilityHiddenAttribute<R = unknown>(): R;
    isAccessibilityHidden<R = boolean>(): R;
    sectionLayoutDelegate<R = unknown>(): R;
    sectionLayout<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewLayoutSectionAccessibility<T = any> extends cocoa.classes.NSCollectionViewSectionAccessibility {
      alloc<R = NSTouchBarCustomizationPreviewLayoutSectionAccessibility>(): R;
      new: <R = NSTouchBarCustomizationPreviewLayoutSectionAccessibility>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewLayoutSectionAccessibility: cocoa.classes.NSTouchBarCustomizationPreviewLayoutSectionAccessibility;
