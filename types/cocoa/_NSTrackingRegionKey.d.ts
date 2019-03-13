/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTrackingRegionKey<T = any> extends NSObject {
    hash<R = number>(): R;
    initWithTrackingID_windowID<R = unknown, P0 = number, P1 = number>(_initWithTrackingID: P0, _windowID: P1): R;
  }
  namespace classes {
    export interface _NSTrackingRegionKey<T = any> extends NSObject {
      alloc<R = _NSTrackingRegionKey>(): R;
      new: <R = _NSTrackingRegionKey>() => R;
    }
  }
}
