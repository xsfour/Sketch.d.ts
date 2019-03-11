/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOVRowEntry<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSOVRowEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSOVRowEntry>(): R;
      new: <R = _NSOVRowEntry>() => R;
    }
  }
}
