/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorCheckmarkCell<T = any> extends cocoa.MSInspectorButtonCell {
    mixedImage<R = unknown>(): R;
    onImage<R = unknown>(): R;
    checkmarkSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface MSInspectorCheckmarkCell<T = any> extends cocoa.classes.MSInspectorButtonCell {
      alloc<R = MSInspectorCheckmarkCell>(): R;
      new: <R = MSInspectorCheckmarkCell>() => R;
    }
  }
}

declare const MSInspectorCheckmarkCell: cocoa.classes.MSInspectorCheckmarkCell;
