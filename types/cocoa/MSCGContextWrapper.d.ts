/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCGContextWrapper<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithContextRef<R = unknown, P0 = cocoa.CGContext>(_initWithContextRef: P0): R;
    contextRef<R = cocoa.CGContext>(): R;
  }
  namespace classes {
    export interface MSCGContextWrapper<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSCGContextWrapper>(): R;
      new: <R = MSCGContextWrapper>() => R;
      wrapperWithContext<R = unknown, P0 = cocoa.CGContext>(_wrapperWithContext: P0): R;
    }
  }
}

declare const MSCGContextWrapper: cocoa.classes.MSCGContextWrapper;
