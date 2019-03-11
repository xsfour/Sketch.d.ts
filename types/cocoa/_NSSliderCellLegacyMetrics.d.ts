/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellLegacyMetrics<T = any> extends cocoa.NSObject, cocoa.NSSliderCellMetricsStrategyProtocol {
    _oldGetBarBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__oldGetBarBounds: P0): R;
    _orthogonalTickMarkInset<R = number>(): R;
    _primaryTickMarkInset<R = number>(): R;
    _postBarLength<R = number>(): R;
    _preBarLength<R = number>(): R;
    _knobPointOverhang<R = number>(): R;
    _knobTailOverhang<R = number>(): R;
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSSliderCellLegacyMetrics<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSliderCellMetricsStrategyProtocol {
      alloc<R = _NSSliderCellLegacyMetrics>(): R;
      new: <R = _NSSliderCellLegacyMetrics>() => R;
      requiresLegacyMetricsForSlider<R = boolean, P0 = unknown>(_requiresLegacyMetricsForSlider: P0): R;
    }
  }
}
