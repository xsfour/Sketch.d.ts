/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPeriodicEventSource<T = any> extends NSObject {
    addTimerToModes<R = void>(): R;
  }
  namespace classes {
    export interface _NSPeriodicEventSource<T = any> extends NSObject {
      alloc<R = _NSPeriodicEventSource>(): R;
      new: <R = _NSPeriodicEventSource>() => R;
    }
  }
}
