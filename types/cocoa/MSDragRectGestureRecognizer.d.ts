/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragRectGestureRecognizer<T = any> extends cocoa.MSDragGestureRecognizer {
    constrainProportions<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDragRectGestureRecognizer<T = any> extends cocoa.classes.MSDragGestureRecognizer {
      alloc<R = MSDragRectGestureRecognizer>(): R;
      new: <R = MSDragRectGestureRecognizer>() => R;
    }
  }
}

declare const MSDragRectGestureRecognizer: cocoa.classes.MSDragRectGestureRecognizer;
