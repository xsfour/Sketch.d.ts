/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionShadowView<T = any> extends NSView {
    dismissButtonLocation<R = number>(): R;
    setDismissButtonLocation<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCorrectionShadowView<T = any> extends NSView {
      alloc<R = NSCorrectionShadowView>(): R;
      new: <R = NSCorrectionShadowView>() => R;
    }
  }
}

declare const NSCorrectionShadowView: cocoa.classes.NSCorrectionShadowView;
