/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentEventVBLPreprocessFilter<T = any> extends cocoa._NSScrollingConcurrentVBLPreprocessFilter {
    dealloc<R = void>(): R;
    initWithConstantData<R = unknown, P0 = unknown>(_initWithConstantData: P0): R;
    eventMonitor<R = cocoa._NSScrollingConcurrentEventMonitor>(): R;
    setEventMonitor<R = void, P0 = cocoa._NSScrollingConcurrentEventMonitor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentEventVBLPreprocessFilter<T = any> extends cocoa.classes._NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentEventVBLPreprocessFilter>(): R;
      new: <R = _NSScrollingConcurrentEventVBLPreprocessFilter>() => R;
    }
  }
}
