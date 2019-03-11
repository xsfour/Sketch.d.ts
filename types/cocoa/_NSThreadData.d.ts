/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThreadData<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSThreadData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSThreadData>(): R;
      new: <R = _NSThreadData>() => R;
    }
  }
}
