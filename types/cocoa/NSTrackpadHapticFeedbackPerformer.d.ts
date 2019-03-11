/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackpadHapticFeedbackPerformer<T = any> extends cocoa.NSObject, cocoa.NSHapticFeedbackPerformerProtocol {
    _performFeedbackPattern<R = void, P0 = number>(__performFeedbackPattern: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTrackpadHapticFeedbackPerformer<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSHapticFeedbackPerformerProtocol {
      alloc<R = NSTrackpadHapticFeedbackPerformer>(): R;
      new: <R = NSTrackpadHapticFeedbackPerformer>() => R;
    }
  }
}

declare const NSTrackpadHapticFeedbackPerformer: cocoa.classes.NSTrackpadHapticFeedbackPerformer;
