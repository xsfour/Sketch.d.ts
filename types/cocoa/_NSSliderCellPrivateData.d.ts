/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellPrivateData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    trackFillColor<R = cocoa.NSColor>(): R;
    setTrackFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    tickMarkProminence<R = cocoa.NSMutableDictionary>(): R;
    setTickMarkProminence<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSliderCellPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSliderCellPrivateData>(): R;
      new: <R = _NSSliderCellPrivateData>() => R;
    }
  }
}
