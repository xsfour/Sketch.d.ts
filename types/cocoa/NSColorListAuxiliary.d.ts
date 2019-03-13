/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorListAuxiliary<T = any> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSColorListAuxiliary<T = any> extends NSObject {
      alloc<R = NSColorListAuxiliary>(): R;
      new: <R = NSColorListAuxiliary>() => R;
    }
  }
}

declare const NSColorListAuxiliary: cocoa.classes.NSColorListAuxiliary;
