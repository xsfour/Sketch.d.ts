/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGestureRecognizerTarget<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSGestureRecognizerTarget<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSGestureRecognizerTarget>(): R;
      new: <R = NSGestureRecognizerTarget>() => R;
    }
  }
}

declare const NSGestureRecognizerTarget: cocoa.classes.NSGestureRecognizerTarget;
