/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewFlexibleSectionLayout<T = any> extends NSTouchBarCustomizationPreviewSectionLayout {
    defaultItemPadding<R = number>(): R;
    setDefaultItemPadding<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewFlexibleSectionLayout<T = any> extends NSTouchBarCustomizationPreviewSectionLayout {
      alloc<R = NSTouchBarCustomizationPreviewFlexibleSectionLayout>(): R;
      new: <R = NSTouchBarCustomizationPreviewFlexibleSectionLayout>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewFlexibleSectionLayout: cocoa.classes.NSTouchBarCustomizationPreviewFlexibleSectionLayout;
