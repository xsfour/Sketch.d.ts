/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLongClickGestureRecognizer<T = any> extends cocoa.NSGestureRecognizer {
    allowableMovement<R = number>(): R;
    setAllowableMovement<R = void, P0 = number>(_v: P0): R;
    minimumPressDuration<R = number>(): R;
    setMinimumPressDuration<R = void, P0 = number>(_v: P0): R;
    buttonMask<R = number>(): R;
    setButtonMask<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSLongClickGestureRecognizer<T = any> extends cocoa.classes.NSGestureRecognizer {
      alloc<R = NSLongClickGestureRecognizer>(): R;
      new: <R = NSLongClickGestureRecognizer>() => R;
    }
  }
}

declare const NSLongClickGestureRecognizer: cocoa.classes.NSLongClickGestureRecognizer;
