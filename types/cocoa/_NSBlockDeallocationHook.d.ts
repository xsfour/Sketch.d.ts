/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockDeallocationHook<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSBlockDeallocationHook<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSBlockDeallocationHook>(): R;
      new: <R = _NSBlockDeallocationHook>() => R;
      withBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_withBlock: P0): R;
    }
  }
}
