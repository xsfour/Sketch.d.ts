/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumBasCalculator<T = any> extends _NSScrollingMomentumCalculatorBase {
    _cacheResultsForDurationInMs<R = void, P0 = number>(__cacheResultsForDurationInMs: P0): R;
    durationUntilStop<R = number>(): R;
  }
  namespace classes {
    export interface _NSScrollingMomentumBasCalculator<T = any> extends _NSScrollingMomentumCalculatorBase {
      alloc<R = _NSScrollingMomentumBasCalculator>(): R;
      new: <R = _NSScrollingMomentumBasCalculator>() => R;
    }
  }
}
