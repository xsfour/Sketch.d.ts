/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAlignmentFeedbackFilterPreparedContext<T = any> extends NSObject, NSAlignmentFeedbackTokenProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSAlignmentFeedbackFilterPreparedContext<T = any> extends NSObject, NSAlignmentFeedbackTokenProtocol {
      alloc<R = _NSAlignmentFeedbackFilterPreparedContext>(): R;
      new: <R = _NSAlignmentFeedbackFilterPreparedContext>() => R;
    }
  }
}
