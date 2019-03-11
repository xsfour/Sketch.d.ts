/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentVBLMonitor<T = any> extends cocoa.NSObject {
    remove<R = void>(): R;
    suspend<R = void>(): R;
    resume<R = void>(): R;
    _synchronizeForVBLSerialNumber_timestamp_updateDuration<R = void, P0 = number, P1 = number, P2 = number>(__synchronizeForVBLSerialNumber: P0, _timestamp: P1, _updateDuration: P2): R;
    _updateScrollAnimation<R = void>(): R;
    _checkCursorTargeting<R = void>(): R;
    dealloc<R = void>(): R;
    initWithConstantData<R = unknown, P0 = unknown>(_initWithConstantData: P0): R;
    mainThreadSynchronizer<R = cocoa._NSScrollingConcurrentMainThreadSynchronizer>(): R;
    setMainThreadSynchronizer<R = void, P0 = cocoa._NSScrollingConcurrentMainThreadSynchronizer>(_v: P0): R;
    preprocessFilter<R = cocoa._NSScrollingConcurrentVBLPreprocessFilter>(): R;
    setPreprocessFilter<R = void, P0 = cocoa._NSScrollingConcurrentVBLPreprocessFilter>(_v: P0): R;
    constantData<R = cocoa._NSScrollingConcurrentConstantData>(): R;
    setConstantData<R = void, P0 = cocoa._NSScrollingConcurrentConstantData>(_v: P0): R;
    sharedData<R = cocoa._NSScrollingConcurrentSharedData>(): R;
    setSharedData<R = void, P0 = cocoa._NSScrollingConcurrentSharedData>(_v: P0): R;
    scrollStateDelegate<R = cocoa._NSScrollStateEventListener>(): R;
    setScrollStateDelegate<R = void, P0 = cocoa._NSScrollStateEventListener>(_v: P0): R;
    cursorTargetFrame<R = cocoa.CGRect>(): R;
    setCursorTargetFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentVBLMonitor<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollingConcurrentVBLMonitor>(): R;
      new: <R = _NSScrollingConcurrentVBLMonitor>() => R;
    }
  }
}
