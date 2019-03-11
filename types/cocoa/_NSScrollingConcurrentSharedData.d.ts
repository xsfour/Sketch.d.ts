/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentSharedData<T = any> extends cocoa.NSObject {
    threadSafePropertyAccess<R = void, P0 = cocoa.CDUnknownBlockType>(_threadSafePropertyAccess: P0): R;
    dealloc<R = void>(): R;
    initWithConstantData<R = unknown, P0 = unknown>(_initWithConstantData: P0): R;
  }
  namespace classes {
    export interface _NSScrollingConcurrentSharedData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScrollingConcurrentSharedData>(): R;
      new: <R = _NSScrollingConcurrentSharedData>() => R;
    }
  }
}
