/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilterObservationTransformer<T = any> extends NSObservationTransformer {
    initWithBlock<R = unknown, P0 = CDUnknownBlockType>(_initWithBlock: P0): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
  }
  namespace classes {
    export interface NSFilterObservationTransformer<T = any> extends NSObservationTransformer {
      alloc<R = NSFilterObservationTransformer>(): R;
      new: <R = NSFilterObservationTransformer>() => R;
      filterWithBlock<R = unknown, P0 = CDUnknownBlockType>(_filterWithBlock: P0): R;
    }
  }
}

declare const NSFilterObservationTransformer: cocoa.classes.NSFilterObservationTransformer;
