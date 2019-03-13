/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeDocumentButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface NSThemeDocumentButtonCell<T = any> extends NSButtonCell {
      alloc<R = NSThemeDocumentButtonCell>(): R;
      new: <R = NSThemeDocumentButtonCell>() => R;
    }
  }
}

declare const NSThemeDocumentButtonCell: cocoa.classes.NSThemeDocumentButtonCell;
