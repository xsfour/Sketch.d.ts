/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsBlurFieldButton<T = any> extends NSButton {}
  namespace classes {
    export interface NSDocumentRevisionsBlurFieldButton<T = any> extends NSButton {
      alloc<R = NSDocumentRevisionsBlurFieldButton>(): R;
      new: <R = NSDocumentRevisionsBlurFieldButton>() => R;
    }
  }
}

declare const NSDocumentRevisionsBlurFieldButton: cocoa.classes.NSDocumentRevisionsBlurFieldButton;
