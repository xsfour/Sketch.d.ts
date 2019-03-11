/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSmallCheckmarkCell<T = any> extends cocoa.MSInspectorCheckmarkCell {}
  namespace classes {
    export interface MSInspectorSmallCheckmarkCell<T = any> extends cocoa.classes.MSInspectorCheckmarkCell {
      alloc<R = MSInspectorSmallCheckmarkCell>(): R;
      new: <R = MSInspectorSmallCheckmarkCell>() => R;
    }
  }
}

declare const MSInspectorSmallCheckmarkCell: cocoa.classes.MSInspectorSmallCheckmarkCell;
