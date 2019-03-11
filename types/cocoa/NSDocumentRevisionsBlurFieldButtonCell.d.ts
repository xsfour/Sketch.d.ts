/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsBlurFieldButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface NSDocumentRevisionsBlurFieldButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSDocumentRevisionsBlurFieldButtonCell>(): R;
      new: <R = NSDocumentRevisionsBlurFieldButtonCell>() => R;
    }
  }
}

declare const NSDocumentRevisionsBlurFieldButtonCell: cocoa.classes.NSDocumentRevisionsBlurFieldButtonCell;
