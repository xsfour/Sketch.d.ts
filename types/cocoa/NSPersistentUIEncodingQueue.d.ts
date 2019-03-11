/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIEncodingQueue<T = any> extends cocoa.NSObject {
    finishEnqueuedImmediatelyWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_finishEnqueuedImmediatelyWithCompletionHandler: P0): R;
    finishEnqueuedWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_finishEnqueuedWithCompletionHandler: P0): R;
    dealloc<R = void>(): R;
    operationQueue<R = cocoa.NSOperationQueue>(): R;
  }
  namespace classes {
    export interface NSPersistentUIEncodingQueue<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPersistentUIEncodingQueue>(): R;
      new: <R = NSPersistentUIEncodingQueue>() => R;
    }
  }
}

declare const NSPersistentUIEncodingQueue: cocoa.classes.NSPersistentUIEncodingQueue;
