/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyFilePromiseCoordinator<T = any> extends cocoa.NSObject {
    _resolvePendingMatches<R = void>(): R;
    run<R = void>(): R;
    runUntilDone<R = void>(): R;
    quit<R = void>(): R;
    enqueueTargetUrls<R = boolean, P0 = unknown>(_enqueueTargetUrls: P0): R;
    waitForPromisedURLsToBeWrittenToDisk_error<R = boolean, P0 = unknown, P1 = unknown>(_waitForPromisedURLsToBeWrittenToDisk: P0, _error: P1): R;
    _main<R = void>(): R;
    dealloc<R = void>(): R;
    completionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    pathReadyForReadingHandler<R = cocoa.CDUnknownBlockType>(): R;
    setPathReadyForReadingHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    destinationUrl<R = cocoa.NSURL>(): R;
    setDestinationUrl<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    remainingTargetUrls<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface _NSLegacyFilePromiseCoordinator<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSLegacyFilePromiseCoordinator>(): R;
      new: <R = _NSLegacyFilePromiseCoordinator>() => R;
    }
  }
}
