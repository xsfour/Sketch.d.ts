/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClassicMapTable<T = any> extends cocoa.NSMapTable {
    count<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSClassicMapTable<T = any> extends cocoa.classes.NSMapTable {
      alloc<R = NSClassicMapTable>(): R;
      new: <R = NSClassicMapTable>() => R;
    }
  }
}

declare const NSClassicMapTable: cocoa.classes.NSClassicMapTable;
