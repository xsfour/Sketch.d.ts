/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMagnificationGestureRecognizer<T = any> extends cocoa.NSGestureRecognizer {
    setTranslation_inView<R = void, P0 = cocoa.CGPoint, P1 = unknown>(_setTranslation: P0, _inView: P1): R;
    translationInView<R = cocoa.CGPoint, P0 = unknown>(_translationInView: P0): R;
    magnification<R = number>(): R;
    setMagnification<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSMagnificationGestureRecognizer<T = any> extends cocoa.classes.NSGestureRecognizer {
      alloc<R = NSMagnificationGestureRecognizer>(): R;
      new: <R = NSMagnificationGestureRecognizer>() => R;
    }
  }
}

declare const NSMagnificationGestureRecognizer: cocoa.classes.NSMagnificationGestureRecognizer;
