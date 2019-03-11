/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOutlineViewReserved<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSOutlineViewReserved<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSOutlineViewReserved>(): R;
      new: <R = _NSOutlineViewReserved>() => R;
    }
  }
}
