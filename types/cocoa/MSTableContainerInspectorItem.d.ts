/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTableContainerInspectorItem<T = any> extends MSInspectorItem {
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
  }
  namespace classes {
    export interface MSTableContainerInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSTableContainerInspectorItem>(): R;
      new: <R = MSTableContainerInspectorItem>() => R;
    }
  }
}

declare const MSTableContainerInspectorItem: cocoa.classes.MSTableContainerInspectorItem;
