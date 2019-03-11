/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayTiming<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    submissionTimeBeforeTime<R = number, P0 = number>(_submissionTimeBeforeTime: P0): R;
    submissionTimeAfterTime<R = number, P0 = number>(_submissionTimeAfterTime: P0): R;
    displayTimeForSubmissionTime<R = number, P0 = number>(_displayTimeForSubmissionTime: P0): R;
    submissionTimeForDisplayTime<R = number, P0 = number>(_submissionTimeForDisplayTime: P0): R;
    displayTimeBeforeTime<R = number, P0 = number>(_displayTimeBeforeTime: P0): R;
    displayTimeAfterTime<R = number, P0 = number>(_displayTimeAfterTime: P0): R;
  }
  namespace classes {
    export interface NSDisplayTiming<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSDisplayTiming>(): R;
      new: <R = NSDisplayTiming>() => R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
      displayTimingsForActiveScreens<R = unknown>(): R;
      displayTimingForScreenNumber<R = unknown, P0 = number>(_displayTimingForScreenNumber: P0): R;
      displayTimingWithAnchorTime_interval<R = unknown, P0 = number, P1 = number>(_displayTimingWithAnchorTime: P0, _interval: P1): R;
      displayTimingWithAnchorTime_interval_latency<R = unknown, P0 = number, P1 = number, P2 = number>(_displayTimingWithAnchorTime: P0, _interval: P1, _latency: P2): R;
    }
  }
}

declare const NSDisplayTiming: cocoa.classes.NSDisplayTiming;
