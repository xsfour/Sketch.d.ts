/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWrapperCellView<T = any> extends cocoa.NSView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    wantsDefaultClipping<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _enclosingTableView<R = unknown>(): R;
    allowsVibrancy<R = boolean>(): R;
    cell<R = cocoa.NSCell>(): R;
    setCell<R = void, P0 = cocoa.NSCell>(_v: P0): R;
    groupRowStyle<R = boolean>(): R;
    setGroupRowStyle<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSWrapperCellView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSWrapperCellView>(): R;
      new: <R = NSWrapperCellView>() => R;
      cellClass<R = unknown>(): R;
    }
  }
}

declare const NSWrapperCellView: cocoa.classes.NSWrapperCellView;
