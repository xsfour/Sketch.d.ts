/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCachedIndexSet<T = any> extends NSIndexSet {}
  namespace classes {
    export interface _NSCachedIndexSet<T = any> extends NSIndexSet {
      alloc<R = _NSCachedIndexSet>(): R;
      new: <R = _NSCachedIndexSet>() => R;
    }
  }
}
