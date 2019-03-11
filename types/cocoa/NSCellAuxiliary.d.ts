/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellAuxiliary<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSCellAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCellAuxiliary>(): R;
      new: <R = NSCellAuxiliary>() => R;
    }
  }
}

declare const NSCellAuxiliary: cocoa.classes.NSCellAuxiliary;
