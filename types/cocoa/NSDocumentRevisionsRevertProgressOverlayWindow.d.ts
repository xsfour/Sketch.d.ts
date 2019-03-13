/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsRevertProgressOverlayWindow<T = any> extends NSWindow {
    canBecomeKeyWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsRevertProgressOverlayWindow<T = any> extends NSWindow {
      alloc<R = NSDocumentRevisionsRevertProgressOverlayWindow>(): R;
      new: <R = NSDocumentRevisionsRevertProgressOverlayWindow>() => R;
    }
  }
}

declare const NSDocumentRevisionsRevertProgressOverlayWindow: cocoa.classes.NSDocumentRevisionsRevertProgressOverlayWindow;
