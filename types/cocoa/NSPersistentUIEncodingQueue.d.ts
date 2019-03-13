/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIEncodingQueue<T = any> extends NSObject {
    finishEnqueuedImmediatelyWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishEnqueuedImmediatelyWithCompletionHandler: P0): R;
    finishEnqueuedWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishEnqueuedWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    operationQueue<R = NSOperationQueue>(): R;
  }
  namespace classes {
    export interface NSPersistentUIEncodingQueue<T = any> extends NSObject {
      alloc<R = NSPersistentUIEncodingQueue>(): R;
      new: <R = NSPersistentUIEncodingQueue>() => R;
    }
  }
}

declare const NSPersistentUIEncodingQueue: cocoa.classes.NSPersistentUIEncodingQueue;
