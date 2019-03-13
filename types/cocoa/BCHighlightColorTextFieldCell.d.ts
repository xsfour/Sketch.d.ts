/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHighlightColorTextFieldCell<T = any> extends NSTextFieldCell {
    cxx_destruct<R = void>(): R;
    highlightColor<R = NSColor>(): R;
    setHighlightColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface BCHighlightColorTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = BCHighlightColorTextFieldCell>(): R;
      new: <R = BCHighlightColorTextFieldCell>() => R;
    }
  }
}

declare const BCHighlightColorTextFieldCell: cocoa.classes.BCHighlightColorTextFieldCell;
