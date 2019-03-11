/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNotificationObservable<T = any> extends cocoa.NSObservationSource {
    initWithName_object<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _object: P1): R;
  }
  namespace classes {
    export interface NSNotificationObservable<T = any> extends cocoa.classes.NSObservationSource {
      alloc<R = NSNotificationObservable>(): R;
      new: <R = NSNotificationObservable>() => R;
      observableWithName_object<R = unknown, P0 = unknown, P1 = unknown>(_observableWithName: P0, _object: P1): R;
    }
  }
}

declare const NSNotificationObservable: cocoa.classes.NSNotificationObservable;
