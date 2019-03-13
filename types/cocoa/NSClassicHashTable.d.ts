/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSClassicHashTable<T = any> extends NSHashTable {
    allObjects<R = unknown>(): R;
    count<R = number>(): R;
    insertItem<R = void, P0 = void>(_insertItem: P0): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSClassicHashTable<T = any> extends NSHashTable {
      alloc<R = NSClassicHashTable>(): R;
      new: <R = NSClassicHashTable>() => R;
    }
  }
}

declare const NSClassicHashTable: cocoa.classes.NSClassicHashTable;
