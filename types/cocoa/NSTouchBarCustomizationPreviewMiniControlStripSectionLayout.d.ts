/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewMiniControlStripSectionLayout<T = any> extends cocoa.NSTouchBarCustomizationPreviewSectionLayout {
    cachedGrabberMaxXPosition<R = number>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewMiniControlStripSectionLayout<T = any> extends cocoa.classes.NSTouchBarCustomizationPreviewSectionLayout {
      alloc<R = NSTouchBarCustomizationPreviewMiniControlStripSectionLayout>(): R;
      new: <R = NSTouchBarCustomizationPreviewMiniControlStripSectionLayout>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewMiniControlStripSectionLayout: cocoa.classes.NSTouchBarCustomizationPreviewMiniControlStripSectionLayout;
