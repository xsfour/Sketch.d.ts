/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateInsertItem<T = any> extends cocoa.NSTableUpdateItem2 {
    dealloc<R = void>(): R;
    viewToAnimateFrom<R = cocoa.NSTableRowView>(): R;
    setViewToAnimateFrom<R = void, P0 = cocoa.NSTableRowView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableUpdateInsertItem<T = any> extends cocoa.classes.NSTableUpdateItem2 {
      alloc<R = NSTableUpdateInsertItem>(): R;
      new: <R = NSTableUpdateInsertItem>() => R;
    }
  }
}

declare const NSTableUpdateInsertItem: cocoa.classes.NSTableUpdateInsertItem;
