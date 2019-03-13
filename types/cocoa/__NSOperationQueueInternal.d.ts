/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSOperationQueueInternal<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface __NSOperationQueueInternal<T = any> extends NSObject {
      alloc<R = __NSOperationQueueInternal>(): R;
      new: <R = __NSOperationQueueInternal>() => R;
    }
  }
}
