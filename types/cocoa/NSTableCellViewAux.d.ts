/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableCellViewAux<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSTableCellViewAux<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTableCellViewAux>(): R;
      new: <R = NSTableCellViewAux>() => R;
    }
  }
}

declare const NSTableCellViewAux: cocoa.classes.NSTableCellViewAux;
