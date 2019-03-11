/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFixedPanGestureRecognizer<T = any> extends cocoa.NSPanGestureRecognizer {}
  namespace classes {
    export interface MSFixedPanGestureRecognizer<T = any> extends cocoa.classes.NSPanGestureRecognizer {
      alloc<R = MSFixedPanGestureRecognizer>(): R;
      new: <R = MSFixedPanGestureRecognizer>() => R;
    }
  }
}

declare const MSFixedPanGestureRecognizer: cocoa.classes.MSFixedPanGestureRecognizer;
