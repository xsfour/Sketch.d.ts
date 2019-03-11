/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSoundAux<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSSoundAux<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSoundAux>(): R;
      new: <R = _NSSoundAux>() => R;
    }
  }
}
