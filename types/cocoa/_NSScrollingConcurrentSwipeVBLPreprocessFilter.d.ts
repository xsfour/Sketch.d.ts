/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentSwipeVBLPreprocessFilter<T = any> extends cocoa._NSScrollingConcurrentEventVBLPreprocessFilter {
    gestureAxis<R = number>(): R;
    setGestureAxis<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentSwipeVBLPreprocessFilter<T = any> extends cocoa.classes._NSScrollingConcurrentEventVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentSwipeVBLPreprocessFilter>(): R;
      new: <R = _NSScrollingConcurrentSwipeVBLPreprocessFilter>() => R;
    }
  }
}
