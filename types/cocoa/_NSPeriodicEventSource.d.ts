/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPeriodicEventSource<T = any> extends cocoa.NSObject {
    addTimerToModes<R = void>(): R;
  }
  namespace classes {
    export interface _NSPeriodicEventSource<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPeriodicEventSource>(): R;
      new: <R = _NSPeriodicEventSource>() => R;
    }
  }
}
