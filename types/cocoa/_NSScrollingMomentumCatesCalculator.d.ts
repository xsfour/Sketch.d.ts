/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumCatesCalculator<T = any> extends _NSScrollingMomentumCalculatorBase {
    durationUntilStop<R = number>(): R;
  }
  namespace classes {
    export interface _NSScrollingMomentumCatesCalculator<T = any> extends _NSScrollingMomentumCalculatorBase {
      alloc<R = _NSScrollingMomentumCatesCalculator>(): R;
      new: <R = _NSScrollingMomentumCatesCalculator>() => R;
    }
  }
}
