/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuHighlightView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
  }
  namespace classes {
    export interface NSMenuHighlightView<T = any> extends NSView {
      alloc<R = NSMenuHighlightView>(): R;
      new: <R = NSMenuHighlightView>() => R;
    }
  }
}

declare const NSMenuHighlightView: cocoa.classes.NSMenuHighlightView;
