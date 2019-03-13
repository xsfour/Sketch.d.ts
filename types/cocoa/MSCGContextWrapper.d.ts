/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCGContextWrapper<T = any> extends NSObject {
    dealloc<R = void>(): R;
    initWithContextRef<R = unknown, P0 = CGContext>(_initWithContextRef: P0): R;
    contextRef<R = CGContext>(): R;
  }
  namespace classes {
    export interface MSCGContextWrapper<T = any> extends NSObject {
      alloc<R = MSCGContextWrapper>(): R;
      new: <R = MSCGContextWrapper>() => R;
      wrapperWithContext<R = unknown, P0 = CGContext>(_wrapperWithContext: P0): R;
    }
  }
}

declare const MSCGContextWrapper: cocoa.classes.MSCGContextWrapper;
