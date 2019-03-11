/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSegue<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    perform<R = void>(): R;
    _prepare<R = void>(): R;
    initWithIdentifier_source_destination<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithIdentifier: P0, _source: P1, _destination: P2): R;
    dealloc<R = void>(): R;
    prepareHandler<R = cocoa.CDUnknownBlockType>(): R;
    setPrepareHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    performHandler<R = cocoa.CDUnknownBlockType>(): R;
    setPerformHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    destinationController<R = unknown>(): R;
    sourceController<R = unknown>(): R;
    identifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSStoryboardSegue<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSStoryboardSegue>(): R;
      new: <R = NSStoryboardSegue>() => R;
      segueWithIdentifier_source_destination_performHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_segueWithIdentifier: P0, _source: P1, _destination: P2, _performHandler: P3): R;
    }
  }
}

declare const NSStoryboardSegue: cocoa.classes.NSStoryboardSegue;
