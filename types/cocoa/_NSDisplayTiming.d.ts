/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayTiming<T = any> extends cocoa.NSDisplayTiming {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    initWithAnchorTime_interval_latency<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithAnchorTime: P0, _interval: P1, _latency: P2): R;
  }
  namespace classes {
    export interface _NSDisplayTiming<T = any> extends cocoa.classes.NSDisplayTiming {
      alloc<R = _NSDisplayTiming>(): R;
      new: <R = _NSDisplayTiming>() => R;
    }
  }
}
