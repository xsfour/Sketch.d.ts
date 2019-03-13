/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHapticFeedbackManager<T = any> extends NSObject {}
  namespace classes {
    export interface NSHapticFeedbackManager<T = any> extends NSObject {
      alloc<R = NSHapticFeedbackManager>(): R;
      new: <R = NSHapticFeedbackManager>() => R;
      _requestVisuallySynchronizedPerformance_feedbackPattern<R = void, P0 = unknown, P1 = number>(__requestVisuallySynchronizedPerformance: P0, _feedbackPattern: P1): R;
      defaultPerformer<R = unknown>(): R;
    }
  }
}

declare const NSHapticFeedbackManager: cocoa.classes.NSHapticFeedbackManager;
