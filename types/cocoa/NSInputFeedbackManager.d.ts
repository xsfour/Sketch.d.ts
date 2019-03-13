/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputFeedbackManager<T = any> extends NSObject {}
  namespace classes {
    export interface NSInputFeedbackManager<T = any> extends NSObject {
      alloc<R = NSInputFeedbackManager>(): R;
      new: <R = NSInputFeedbackManager>() => R;
      defaultPerformer<R = unknown>(): R;
    }
  }
}

declare const NSInputFeedbackManager: cocoa.classes.NSInputFeedbackManager;
