/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorAltButtonCell<T = any> extends cocoa.MSAltButtonCell {}
  namespace classes {
    export interface MSInspectorAltButtonCell<T = any> extends cocoa.classes.MSAltButtonCell {
      alloc<R = MSInspectorAltButtonCell>(): R;
      new: <R = MSInspectorAltButtonCell>() => R;
    }
  }
}

declare const MSInspectorAltButtonCell: cocoa.classes.MSInspectorAltButtonCell;
