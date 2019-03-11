/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationTransformer<T = any> extends cocoa.NSObservationSource, cocoa.NSObserverProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSObservationTransformer<T = any> extends cocoa.classes.NSObservationSource, cocoa.classes.NSObserverProtocol {
      alloc<R = NSObservationTransformer>(): R;
      new: <R = NSObservationTransformer>() => R;
      mapErrorsWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_mapErrorsWithBlock: P0): R;
      mapValuesWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_mapValuesWithBlock: P0): R;
    }
  }
}

declare const NSObservationTransformer: cocoa.classes.NSObservationTransformer;
