/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentVBLPreprocessFilter<T = any> extends cocoa.NSObject {
    scrollingVBLMonitor_synchronizeForVBLSerialNumber_timestamp_updateDuration<R = void, P0 = unknown, P1 = number, P2 = number, P3 = number>(_scrollingVBLMonitor: P0, _synchronizeForVBLSerialNumber: P1, _timestamp: P2, _updateDuration: P3): R;
    scrollStateDelegate<R = cocoa._NSScrollStateEventListener>(): R;
    setScrollStateDelegate<R = void, P0 = cocoa._NSScrollStateEventListener>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentVBLPreprocessFilter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollingConcurrentVBLPreprocessFilter>(): R;
      new: <R = _NSScrollingConcurrentVBLPreprocessFilter>() => R;
    }
  }
}
