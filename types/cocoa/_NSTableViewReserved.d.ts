/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewReserved<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    highlightedTableColumn<R = NSTableColumn>(): R;
    setHighlightedTableColumn<R = void, P0 = NSTableColumn>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTableViewReserved<T = any> extends NSObject {
      alloc<R = _NSTableViewReserved>(): R;
      new: <R = _NSTableViewReserved>() => R;
    }
  }
}
