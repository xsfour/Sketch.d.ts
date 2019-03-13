/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorButtonCell<T = any> extends NSButtonCell {}
  namespace classes {
    export interface MSInspectorButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSInspectorButtonCell>(): R;
      new: <R = MSInspectorButtonCell>() => R;
    }
  }
}

declare const MSInspectorButtonCell: cocoa.classes.MSInspectorButtonCell;
