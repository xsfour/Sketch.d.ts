/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBObjectDataAuxilary<T = any> extends NSObject {}
  namespace classes {
    export interface NSIBObjectDataAuxilary<T = any> extends NSObject {
      alloc<R = NSIBObjectDataAuxilary>(): R;
      new: <R = NSIBObjectDataAuxilary>() => R;
    }
  }
}

declare const NSIBObjectDataAuxilary: cocoa.classes.NSIBObjectDataAuxilary;
