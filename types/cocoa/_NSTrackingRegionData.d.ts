/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTrackingRegionData<T = any> extends NSObject {}
  namespace classes {
    export interface _NSTrackingRegionData<T = any> extends NSObject {
      alloc<R = _NSTrackingRegionData>(): R;
      new: <R = _NSTrackingRegionData>() => R;
    }
  }
}
