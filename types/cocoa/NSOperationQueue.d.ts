/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOperationQueue<T = any> extends cocoa.NSObject {
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    addObserver_forKeyPath_options_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = void>(_addObserver: P0, _forKeyPath: P1, _options: P2, _context: P3): R;
    description<R = unknown>(): R;
    __graphDescription<R = unknown>(): R;
    waitUntilAllOperationsAreFinished<R = void>(): R;
    cancelAllOperations<R = void>(): R;
    setOvercommitsOperations<R = void, P0 = boolean>(_setOvercommitsOperations: P0): R;
    overcommitsOperations<R = boolean>(): R;
    addOperationWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_addOperationWithBlock: P0): R;
    addOperations_waitUntilFinished<R = void, P0 = unknown, P1 = boolean>(_addOperations: P0, _waitUntilFinished: P1): R;
    addOperation<R = void, P0 = unknown>(_addOperation: P0): R;
    dealloc<R = void>(): R;
    _fc_addUncancellableOperationForReactorID_block<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__fc_addUncancellableOperationForReactorID: P0, _block: P1): R;
    _fc_addUncancellableOperationWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(__fc_addUncancellableOperationWithBlock: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    underlyingQueue<R = cocoa.OS_dispatch_queue>(): R;
    setUnderlyingQueue<R = void, P0 = cocoa.OS_dispatch_queue>(_v: P0): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    suspended<R = boolean>(): R;
    setSuspended<R = void, P0 = boolean>(_v: P0): R;
    maxConcurrentOperationCount<R = number>(): R;
    setMaxConcurrentOperationCount<R = void, P0 = number>(_v: P0): R;
    operationCount<R = number>(): R;
    operations<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSOperationQueue<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSOperationQueue>(): R;
      new: <R = NSOperationQueue>() => R;
      mainQueue<R = unknown>(): R;
      currentQueue<R = unknown>(): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSOperationQueue: cocoa.classes.NSOperationQueue;
