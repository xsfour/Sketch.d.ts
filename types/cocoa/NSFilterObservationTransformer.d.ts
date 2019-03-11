/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilterObservationTransformer<T = any> extends cocoa.NSObservationTransformer {
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
  }
  namespace classes {
    export interface NSFilterObservationTransformer<T = any> extends cocoa.classes.NSObservationTransformer {
      alloc<R = NSFilterObservationTransformer>(): R;
      new: <R = NSFilterObservationTransformer>() => R;
      filterWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_filterWithBlock: P0): R;
    }
  }
}

declare const NSFilterObservationTransformer: cocoa.classes.NSFilterObservationTransformer;
