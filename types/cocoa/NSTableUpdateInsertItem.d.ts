/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateInsertItem<T = any> extends NSTableUpdateItem2 {
    dealloc<R = void>(): R;
    viewToAnimateFrom<R = NSTableRowView>(): R;
    setViewToAnimateFrom<R = void, P0 = NSTableRowView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableUpdateInsertItem<T = any> extends NSTableUpdateItem2 {
      alloc<R = NSTableUpdateInsertItem>(): R;
      new: <R = NSTableUpdateInsertItem>() => R;
    }
  }
}

declare const NSTableUpdateInsertItem: cocoa.classes.NSTableUpdateInsertItem;
