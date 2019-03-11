/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragSegmentGestureRecognizer<T = any> extends cocoa.MSDragGestureRecognizer {
    offset<R = number>(): R;
    setOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSDragSegmentGestureRecognizer<T = any> extends cocoa.classes.MSDragGestureRecognizer {
      alloc<R = MSDragSegmentGestureRecognizer>(): R;
      new: <R = MSDragSegmentGestureRecognizer>() => R;
    }
  }
}

declare const MSDragSegmentGestureRecognizer: cocoa.classes.MSDragSegmentGestureRecognizer;
