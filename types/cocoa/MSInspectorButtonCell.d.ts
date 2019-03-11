/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface MSInspectorButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSInspectorButtonCell>(): R;
      new: <R = MSInspectorButtonCell>() => R;
    }
  }
}

declare const MSInspectorButtonCell: cocoa.classes.MSInspectorButtonCell;
