/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableCellViewAux<T = any> extends NSObject {}
  namespace classes {
    export interface NSTableCellViewAux<T = any> extends NSObject {
      alloc<R = NSTableCellViewAux>(): R;
      new: <R = NSTableCellViewAux>() => R;
    }
  }
}

declare const NSTableCellViewAux: cocoa.classes.NSTableCellViewAux;
