/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileCoordinatorAccessorBlockCompletion<T = any> extends cocoa.NSObject {
    decrement<R = void>(): R;
    increment<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSFileCoordinatorAccessorBlockCompletion<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFileCoordinatorAccessorBlockCompletion>(): R;
      new: <R = NSFileCoordinatorAccessorBlockCompletion>() => R;
      completionWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_completionWithBlock: P0): R;
    }
  }
}

declare const NSFileCoordinatorAccessorBlockCompletion: cocoa.classes.NSFileCoordinatorAccessorBlockCompletion;
