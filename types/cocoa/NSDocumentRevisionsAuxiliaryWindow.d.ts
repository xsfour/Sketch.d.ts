/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsAuxiliaryWindow<T = any> extends NSWindow {
    customAccessibilityParent<R = unknown>(): R;
    setCustomAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsAuxiliaryWindow<T = any> extends NSWindow {
      alloc<R = NSDocumentRevisionsAuxiliaryWindow>(): R;
      new: <R = NSDocumentRevisionsAuxiliaryWindow>() => R;
    }
  }
}

declare const NSDocumentRevisionsAuxiliaryWindow: cocoa.classes.NSDocumentRevisionsAuxiliaryWindow;
