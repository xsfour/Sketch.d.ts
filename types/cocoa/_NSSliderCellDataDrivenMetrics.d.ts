/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellDataDrivenMetrics<T = any> extends cocoa.NSObject, cocoa.NSSliderCellMetricsStrategyProtocol {
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSliderCellDataDrivenMetrics<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSliderCellMetricsStrategyProtocol {
      alloc<R = _NSSliderCellDataDrivenMetrics>(): R;
      new: <R = _NSSliderCellDataDrivenMetrics>() => R;
    }
  }
}
