/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionTypedTextHighlightView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface NSCorrectionTypedTextHighlightView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCorrectionTypedTextHighlightView>(): R;
      new: <R = NSCorrectionTypedTextHighlightView>() => R;
    }
  }
}

declare const NSCorrectionTypedTextHighlightView: cocoa.classes.NSCorrectionTypedTextHighlightView;
