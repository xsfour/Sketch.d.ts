/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGroupPrivateData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSGroupPrivateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSGroupPrivateData>(): R;
      new: <R = _NSGroupPrivateData>() => R;
    }
  }
}
