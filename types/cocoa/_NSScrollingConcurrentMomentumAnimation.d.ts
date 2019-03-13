/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentMomentumAnimation<T = any> extends _NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    initWithMomentumCalculator<R = unknown, P0 = unknown>(_initWithMomentumCalculator: P0): R;
    momentumCalculator<R = _NSScrollingMomentumCalculator>(): R;
    setMomentumCalculator<R = void, P0 = _NSScrollingMomentumCalculator>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentMomentumAnimation<T = any> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentMomentumAnimation>(): R;
      new: <R = _NSScrollingConcurrentMomentumAnimation>() => R;
    }
  }
}
