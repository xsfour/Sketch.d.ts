/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAlignmentFeedbackFilterPreparedContext<T = any> extends cocoa.NSObject, cocoa.NSAlignmentFeedbackTokenProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSAlignmentFeedbackFilterPreparedContext<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSAlignmentFeedbackTokenProtocol {
      alloc<R = _NSAlignmentFeedbackFilterPreparedContext>(): R;
      new: <R = _NSAlignmentFeedbackFilterPreparedContext>() => R;
    }
  }
}
