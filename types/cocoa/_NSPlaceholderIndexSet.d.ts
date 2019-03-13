/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderIndexSet<T = any> extends NSIndexSet {}
  namespace classes {
    export interface _NSPlaceholderIndexSet<T = any> extends NSIndexSet {
      alloc<R = _NSPlaceholderIndexSet>(): R;
      new: <R = _NSPlaceholderIndexSet>() => R;
    }
  }
}
