/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellPrivateData<T = any> extends NSObject {
    dealloc<R = void>(): R;
    trackFillColor<R = NSColor>(): R;
    setTrackFillColor<R = void, P0 = NSColor>(_v: P0): R;
    tickMarkProminence<R = NSMutableDictionary>(): R;
    setTickMarkProminence<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSliderCellPrivateData<T = any> extends NSObject {
      alloc<R = _NSSliderCellPrivateData>(): R;
      new: <R = _NSSliderCellPrivateData>() => R;
    }
  }
}
