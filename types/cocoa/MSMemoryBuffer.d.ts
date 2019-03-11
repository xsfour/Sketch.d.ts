/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMemoryBuffer<T = any> extends cocoa.NSObject {
    zerofill<R = void, P0 = number>(_zerofill: P0): R;
    dealloc<R = void>(): R;
    initWithSize<R = unknown, P0 = number>(_initWithSize: P0): R;
    bytes<R = void>(): R;
    size<R = number>(): R;
  }
  namespace classes {
    export interface MSMemoryBuffer<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSMemoryBuffer>(): R;
      new: <R = MSMemoryBuffer>() => R;
    }
  }
}

declare const MSMemoryBuffer: cocoa.classes.MSMemoryBuffer;
