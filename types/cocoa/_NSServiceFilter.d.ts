/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceFilter<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    _setMenuLocations<R = void, P0 = unknown>(__setMenuLocations: P0): R;
    serviceCategory<R = number>(): R;
    dataDetectorTypes<R = unknown>(): R;
    isRequiredContext<R = boolean>(): R;
    desiredFilterMask<R = number>(): R;
    hasDataDetectorTypes<R = boolean>(): R;
    description<R = unknown>(): R;
    descriptionForTracking<R = unknown>(): R;
    _descriptionInnards<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSServiceFilter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSServiceFilter>(): R;
      new: <R = _NSServiceFilter>() => R;
      isCJKInputSourceEnabled<R = boolean>(): R;
    }
  }
}
