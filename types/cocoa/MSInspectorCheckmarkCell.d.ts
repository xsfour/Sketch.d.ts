/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorCheckmarkCell<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
    mixedImage<R = unknown>(): R;
    onImage<R = unknown>(): R;
    checkmarkSize<R = CGSize>(): R;
  }
  namespace MSInspectorCheckmarkCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButtonCell {
      alloc<R = MSInspectorCheckmarkCell>(): R;
      new: <R = MSInspectorCheckmarkCell>() => R;
    }
  }
}

declare const MSInspectorCheckmarkCell: cocoa.MSInspectorCheckmarkCell.CLASS;
