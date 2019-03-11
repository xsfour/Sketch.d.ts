/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerMainThreadUnblockerEntry<T = any> extends cocoa.NSObject {
    transferBlockingInterruptersToUnblocker<R = void, P0 = unknown>(_transferBlockingInterruptersToUnblocker: P0): R;
    whenPendingInterruptersHaveCompletedInvokeBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_whenPendingInterruptersHaveCompletedInvokeBlock: P0): R;
    enqueueBlockingInterrupter<R = void, P0 = cocoa.CDUnknownBlockType>(_enqueueBlockingInterrupter: P0): R;
    _invokeInterrupter<R = void, P0 = cocoa.CDUnknownBlockType>(__invokeInterrupter: P0): R;
    dealloc<R = void>(): R;
    suspended<R = boolean>(): R;
    setSuspended<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentControllerMainThreadUnblockerEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDocumentControllerMainThreadUnblockerEntry>(): R;
      new: <R = NSDocumentControllerMainThreadUnblockerEntry>() => R;
      entryWithUnblocker_queue<R = unknown, P0 = cocoa.CDUnknownBlockType, P1 = unknown>(_entryWithUnblocker: P0, _queue: P1): R;
    }
  }
}

declare const NSDocumentControllerMainThreadUnblockerEntry: cocoa.classes.NSDocumentControllerMainThreadUnblockerEntry;
