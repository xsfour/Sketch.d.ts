/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationSink<T = any> extends NSObject, NSObserverProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservationSink<T = any> extends NSObject, NSObserverProtocol {
      alloc<R = NSObservationSink>(): R;
      new: <R = NSObservationSink>() => R;
      handleErrorsWithBlock<R = unknown, P0 = CDUnknownBlockType>(_handleErrorsWithBlock: P0): R;
      handleValuesWithBlock<R = unknown, P0 = CDUnknownBlockType>(_handleValuesWithBlock: P0): R;
    }
  }
}

declare const NSObservationSink: cocoa.classes.NSObservationSink;
