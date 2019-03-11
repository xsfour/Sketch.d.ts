/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMapObservationTransformer<T = any> extends cocoa.NSObservationTransformer {
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    initWithBlock_tag<R = unknown, P0 = unknown, P1 = number>(_initWithBlock: P0, _tag: P1): R;
  }
  namespace classes {
    export interface NSMapObservationTransformer<T = any> extends cocoa.classes.NSObservationTransformer {
      alloc<R = NSMapObservationTransformer>(): R;
      new: <R = NSMapObservationTransformer>() => R;
    }
  }
}

declare const NSMapObservationTransformer: cocoa.classes.NSMapObservationTransformer;
