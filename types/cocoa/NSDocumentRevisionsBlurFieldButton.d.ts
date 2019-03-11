/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsBlurFieldButton<T = any> extends cocoa.NSButton {}
  namespace classes {
    export interface NSDocumentRevisionsBlurFieldButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = NSDocumentRevisionsBlurFieldButton>(): R;
      new: <R = NSDocumentRevisionsBlurFieldButton>() => R;
    }
  }
}

declare const NSDocumentRevisionsBlurFieldButton: cocoa.classes.NSDocumentRevisionsBlurFieldButton;
