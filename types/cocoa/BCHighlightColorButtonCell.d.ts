/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHighlightColorButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface BCHighlightColorButtonCell<T = any> extends NSButtonCell {
      alloc<R = BCHighlightColorButtonCell>(): R;
      new: <R = BCHighlightColorButtonCell>() => R;
    }
  }
}

declare const BCHighlightColorButtonCell: cocoa.classes.BCHighlightColorButtonCell;
