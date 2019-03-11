/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackpadFeedbackPerformer<T = any> extends cocoa.NSObject, cocoa.NSInputFeedbackPerformerProtocol {
    _performFeedbackPattern<R = void, P0 = number>(__performFeedbackPattern: P0): R;
    _performFeedbackPattern_when<R = void, P0 = number, P1 = number>(__performFeedbackPattern: P0, _when: P1): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTrackpadFeedbackPerformer<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSInputFeedbackPerformerProtocol {
      alloc<R = NSTrackpadFeedbackPerformer>(): R;
      new: <R = NSTrackpadFeedbackPerformer>() => R;
    }
  }
}

declare const NSTrackpadFeedbackPerformer: cocoa.classes.NSTrackpadFeedbackPerformer;
