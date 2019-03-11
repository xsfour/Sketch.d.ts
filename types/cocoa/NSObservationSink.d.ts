/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationSink<T = any> extends cocoa.NSObject, cocoa.NSObserverProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservationSink<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSObserverProtocol {
      alloc<R = NSObservationSink>(): R;
      new: <R = NSObservationSink>() => R;
      handleErrorsWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_handleErrorsWithBlock: P0): R;
      handleValuesWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_handleValuesWithBlock: P0): R;
    }
  }
}

declare const NSObservationSink: cocoa.classes.NSObservationSink;
