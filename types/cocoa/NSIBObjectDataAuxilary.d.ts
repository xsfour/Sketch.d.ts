/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBObjectDataAuxilary<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSIBObjectDataAuxilary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSIBObjectDataAuxilary>(): R;
      new: <R = NSIBObjectDataAuxilary>() => R;
    }
  }
}

declare const NSIBObjectDataAuxilary: cocoa.classes.NSIBObjectDataAuxilary;
