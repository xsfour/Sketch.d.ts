/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateDeleteItem<T = any> extends NSTableUpdateItem2 {
    dealloc<R = void>(): R;
    viewToDelete<R = NSTableRowView>(): R;
    setViewToDelete<R = void, P0 = NSTableRowView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableUpdateDeleteItem<T = any> extends NSTableUpdateItem2 {
      alloc<R = NSTableUpdateDeleteItem>(): R;
      new: <R = NSTableUpdateDeleteItem>() => R;
    }
  }
}

declare const NSTableUpdateDeleteItem: cocoa.classes.NSTableUpdateDeleteItem;
