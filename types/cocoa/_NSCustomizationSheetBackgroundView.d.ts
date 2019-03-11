/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCustomizationSheetBackgroundView<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
    wantsLayer<R = boolean>(): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCustomizationSheetBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSCustomizationSheetBackgroundView>(): R;
      new: <R = _NSCustomizationSheetBackgroundView>() => R;
      keyPathsForValuesAffectingPaletteScaleFactor<R = unknown>(): R;
    }
  }
}
