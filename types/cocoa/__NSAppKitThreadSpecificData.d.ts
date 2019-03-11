/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSAppKitThreadSpecificData<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface __NSAppKitThreadSpecificData<T = any> extends cocoa.classes.NSObject {
      alloc<R = __NSAppKitThreadSpecificData>(): R;
      new: <R = __NSAppKitThreadSpecificData>() => R;
    }
  }
}
