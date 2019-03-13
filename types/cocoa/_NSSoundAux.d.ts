/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSoundAux<T = any> extends NSObject {}
  namespace classes {
    export interface _NSSoundAux<T = any> extends NSObject {
      alloc<R = _NSSoundAux>(): R;
      new: <R = _NSSoundAux>() => R;
    }
  }
}
