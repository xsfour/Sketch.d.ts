/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragToSelectGestureRecognizer<T = any> extends cocoa.MSDragGestureRecognizer {
    selectionRect<R = cocoa.CGRect>(): R;
    initialSelection<R = cocoa.NSArray>(): R;
    setInitialSelection<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    selectionExtensionMask<R = number>(): R;
    setSelectionExtensionMask<R = void, P0 = number>(_v: P0): R;
    extendSelection<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDragToSelectGestureRecognizer<T = any> extends cocoa.classes.MSDragGestureRecognizer {
      alloc<R = MSDragToSelectGestureRecognizer>(): R;
      new: <R = MSDragToSelectGestureRecognizer>() => R;
    }
  }
}

declare const MSDragToSelectGestureRecognizer: cocoa.classes.MSDragToSelectGestureRecognizer;
