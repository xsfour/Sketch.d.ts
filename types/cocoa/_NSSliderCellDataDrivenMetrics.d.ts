/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellDataDrivenMetrics<T = any> extends NSObject, NSSliderCellMetricsStrategyProtocol {
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSliderCellDataDrivenMetrics<T = any> extends NSObject, NSSliderCellMetricsStrategyProtocol {
      alloc<R = _NSSliderCellDataDrivenMetrics>(): R;
      new: <R = _NSSliderCellDataDrivenMetrics>() => R;
    }
  }
}
