/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewBuffer<T = any> extends NSObject {
    restore<R = boolean>(): R;
    cacheRect<R = boolean, P0 = CGRect>(_cacheRect: P0): R;
    validate<R = void>(): R;
    invalidate<R = void>(): R;
    isValid<R = boolean>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
  }
  namespace classes {
    export interface NSViewBuffer<T = any> extends NSObject {
      alloc<R = NSViewBuffer>(): R;
      new: <R = NSViewBuffer>() => R;
    }
  }
}

declare const NSViewBuffer: cocoa.classes.NSViewBuffer;
