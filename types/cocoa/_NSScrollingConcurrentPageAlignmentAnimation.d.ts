/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentPageAlignmentAnimation<T = any> extends cocoa._NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    destinationOrigin<R = cocoa.CGPoint>(): R;
    setDestinationOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    initialOrigin<R = cocoa.CGPoint>(): R;
    setInitialOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentPageAlignmentAnimation<T = any> extends cocoa.classes._NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentPageAlignmentAnimation>(): R;
      new: <R = _NSScrollingConcurrentPageAlignmentAnimation>() => R;
    }
  }
}
