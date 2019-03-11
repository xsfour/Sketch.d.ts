/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateDeleteItem<T = any> extends cocoa.NSTableUpdateItem2 {
    dealloc<R = void>(): R;
    viewToDelete<R = cocoa.NSTableRowView>(): R;
    setViewToDelete<R = void, P0 = cocoa.NSTableRowView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableUpdateDeleteItem<T = any> extends cocoa.classes.NSTableUpdateItem2 {
      alloc<R = NSTableUpdateDeleteItem>(): R;
      new: <R = NSTableUpdateDeleteItem>() => R;
    }
  }
}

declare const NSTableUpdateDeleteItem: cocoa.classes.NSTableUpdateDeleteItem;
