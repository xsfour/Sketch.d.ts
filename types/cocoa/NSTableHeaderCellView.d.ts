/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableHeaderCellView<T = any> extends cocoa.NSView {
    _commonInit<R = void>(): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
    tableHeaderView<R = cocoa.NSTableHeaderView>(): R;
    setTableHeaderView<R = void, P0 = cocoa.NSTableHeaderView>(_v: P0): R;
    cell<R = cocoa.NSCell>(): R;
    setCell<R = void, P0 = cocoa.NSCell>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableHeaderCellView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTableHeaderCellView>(): R;
      new: <R = NSTableHeaderCellView>() => R;
    }
  }
}

declare const NSTableHeaderCellView: cocoa.classes.NSTableHeaderCellView;
