/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceRequestorInfo<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithRequestor<R = unknown, P0 = unknown>(_initWithRequestor: P0): R;
  }
  namespace classes {
    export interface _NSServiceRequestorInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSServiceRequestorInfo>(): R;
      new: <R = _NSServiceRequestorInfo>() => R;
    }
  }
}
