/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTrackingRegionData<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSTrackingRegionData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTrackingRegionData>(): R;
      new: <R = _NSTrackingRegionData>() => R;
    }
  }
}
