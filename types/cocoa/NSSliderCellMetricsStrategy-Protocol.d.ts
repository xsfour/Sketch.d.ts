/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderCellMetricsStrategyProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCopyingProtocol {
    rectOfMaxValueImageFlipped<R = cocoa.CGRect, P0 = boolean>(_rectOfMaxValueImageFlipped: P0): R;
    rectOfMinValueImageFlipped<R = cocoa.CGRect, P0 = boolean>(_rectOfMinValueImageFlipped: P0): R;
    rectOfTickMarkForValue_knobRect_barRect<R = cocoa.CGRect, P0 = number, P1 = cocoa.CGRect, P2 = cocoa.CGRect>(_rectOfTickMarkForValue: P0, _knobRect: P1, _barRect: P2): R;
    knobAlignmentRectInsets<R = cocoa.NSEdgeInsets>(): R;
    knobRectFlipped_value_knobValueRangeRect<R = cocoa.CGRect, P0 = boolean, P1 = number, P2 = cocoa.CGRect>(_knobRectFlipped: P0, _value: P1, _knobValueRangeRect: P2): R;
    knobValueRangeRect<R = cocoa.CGRect, P0 = boolean>(_knobValueRangeRect: P0): R;
    barRectFlipped<R = cocoa.CGRect, P0 = boolean>(_barRectFlipped: P0): R;
    alignmentRectInsets<R = cocoa.NSEdgeInsets>(): R;
    cellSizeForBounds<R = cocoa.CGSize, P0 = cocoa.CGRect>(_cellSizeForBounds: P0): R;
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSSliderCellMetricsStrategyProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCopyingProtocol {  }
  }
}

declare const NSSliderCellMetricsStrategyProtocol: cocoa.classes.NSSliderCellMetricsStrategyProtocol;
