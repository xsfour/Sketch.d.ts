/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentPageAlignmentAnimation<T = any> extends _NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    destinationOrigin<R = CGPoint>(): R;
    setDestinationOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    initialOrigin<R = CGPoint>(): R;
    setInitialOrigin<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentPageAlignmentAnimation<T = any> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentPageAlignmentAnimation>(): R;
      new: <R = _NSScrollingConcurrentPageAlignmentAnimation>() => R;
    }
  }
}
