/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableColumnAuxiliary<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace classes {
    export interface _NSTableColumnAuxiliary<T = any> extends NSObject {
      alloc<R = _NSTableColumnAuxiliary>(): R;
      new: <R = _NSTableColumnAuxiliary>() => R;
    }
  }
}
