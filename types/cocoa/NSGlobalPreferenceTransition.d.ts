/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGlobalPreferenceTransition<T = any> extends cocoa.NSObject {
    waitForTransitionWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_waitForTransitionWithCompletionHandler: P0): R;
    postChangeNotification_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_postChangeNotification: P0, _completionHandler: P1): R;
    _invalidate<R = void>(): R;
    dealloc<R = void>(): R;
    initTransition<R = unknown>(): R;
  }
  namespace classes {
    export interface NSGlobalPreferenceTransition<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSGlobalPreferenceTransition>(): R;
      new: <R = NSGlobalPreferenceTransition>() => R;
      transition<R = unknown>(): R;
    }
  }
}

declare const NSGlobalPreferenceTransition: cocoa.classes.NSGlobalPreferenceTransition;
