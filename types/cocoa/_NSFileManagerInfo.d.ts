/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFileManagerInfo<T = any> extends NSObject {}
  namespace classes {
    export interface _NSFileManagerInfo<T = any> extends NSObject {
      alloc<R = _NSFileManagerInfo>(): R;
      new: <R = _NSFileManagerInfo>() => R;
    }
  }
}
