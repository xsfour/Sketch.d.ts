/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBalancedModelObservingTracker<T = any> extends cocoa._NSModelObservingTracker {}
  namespace classes {
    export interface _NSBalancedModelObservingTracker<T = any> extends cocoa.classes._NSModelObservingTracker {
      alloc<R = _NSBalancedModelObservingTracker>(): R;
      new: <R = _NSBalancedModelObservingTracker>() => R;
    }
  }
}
