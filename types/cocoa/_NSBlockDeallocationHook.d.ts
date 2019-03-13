/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockDeallocationHook<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSBlockDeallocationHook<T = any> extends NSObject {
      alloc<R = _NSBlockDeallocationHook>(): R;
      new: <R = _NSBlockDeallocationHook>() => R;
      withBlock<R = unknown, P0 = CDUnknownBlockType>(_withBlock: P0): R;
    }
  }
}
