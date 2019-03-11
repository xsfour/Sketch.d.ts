/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewReserved<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    highlightedTableColumn<R = cocoa.NSTableColumn>(): R;
    setHighlightedTableColumn<R = void, P0 = cocoa.NSTableColumn>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTableViewReserved<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTableViewReserved>(): R;
      new: <R = _NSTableViewReserved>() => R;
    }
  }
}
