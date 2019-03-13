/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellAuxiliary<T = any> extends NSObject {}
  namespace classes {
    export interface NSCellAuxiliary<T = any> extends NSObject {
      alloc<R = NSCellAuxiliary>(): R;
      new: <R = NSCellAuxiliary>() => R;
    }
  }
}

declare const NSCellAuxiliary: cocoa.classes.NSCellAuxiliary;
