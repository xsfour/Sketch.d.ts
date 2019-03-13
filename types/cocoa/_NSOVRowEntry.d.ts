/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOVRowEntry<T = any> extends NSObject {}
  namespace classes {
    export interface _NSOVRowEntry<T = any> extends NSObject {
      alloc<R = _NSOVRowEntry>(): R;
      new: <R = _NSOVRowEntry>() => R;
    }
  }
}
