/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsBlurFieldButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface NSDocumentRevisionsBlurFieldButtonCell<T = any> extends NSButtonCell {
      alloc<R = NSDocumentRevisionsBlurFieldButtonCell>(): R;
      new: <R = NSDocumentRevisionsBlurFieldButtonCell>() => R;
    }
  }
}

declare const NSDocumentRevisionsBlurFieldButtonCell: cocoa.classes.NSDocumentRevisionsBlurFieldButtonCell;
