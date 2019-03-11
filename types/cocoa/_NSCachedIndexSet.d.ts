/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCachedIndexSet<T = any> extends cocoa.NSIndexSet {}
  namespace classes {
    export interface _NSCachedIndexSet<T = any> extends cocoa.classes.NSIndexSet {
      alloc<R = _NSCachedIndexSet>(): R;
      new: <R = _NSCachedIndexSet>() => R;
    }
  }
}
