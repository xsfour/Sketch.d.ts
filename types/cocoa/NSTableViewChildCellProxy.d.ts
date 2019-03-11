/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewChildCellProxy<T = any> extends cocoa.NSTableViewCellProxy {
    realElementRect<R = cocoa.CGRect>(): R;
    initWithRow_tableColumn_realElement<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithRow: P0, _tableColumn: P1, _realElement: P2): R;
  }
  namespace classes {
    export interface NSTableViewChildCellProxy<T = any> extends cocoa.classes.NSTableViewCellProxy {
      alloc<R = NSTableViewChildCellProxy>(): R;
      new: <R = NSTableViewChildCellProxy>() => R;
    }
  }
}

declare const NSTableViewChildCellProxy: cocoa.classes.NSTableViewChildCellProxy;
