/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableColumnBinder<T = any> extends cocoa.NSViewStateBinder {
    tableColumn_didChangeToWidth<R = void, P0 = unknown, P1 = number>(_tableColumn: P0, _didChangeToWidth: P1): R;
    _updateTableColumn_withWidth<R = void, P0 = unknown, P1 = unknown>(__updateTableColumn: P0, _withWidth: P1): R;
    _shouldProcessObservations<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTableColumnBinder<T = any> extends cocoa.classes.NSViewStateBinder {
      alloc<R = NSTableColumnBinder>(): R;
      new: <R = NSTableColumnBinder>() => R;
    }
  }
}

declare const NSTableColumnBinder: cocoa.classes.NSTableColumnBinder;
