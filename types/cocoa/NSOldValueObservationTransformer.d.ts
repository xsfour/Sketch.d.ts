/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOldValueObservationTransformer<T = any> extends cocoa.NSObservationTransformer {
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
  }
  namespace classes {
    export interface NSOldValueObservationTransformer<T = any> extends cocoa.classes.NSObservationTransformer {
      alloc<R = NSOldValueObservationTransformer>(): R;
      new: <R = NSOldValueObservationTransformer>() => R;
      oldValuesTransformer<R = unknown>(): R;
    }
  }
}

declare const NSOldValueObservationTransformer: cocoa.classes.NSOldValueObservationTransformer;
