/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorInspectorItem<T = any> extends cocoa.MSInspectorItem {}
  namespace classes {
    export interface MSSeparatorInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSSeparatorInspectorItem>(): R;
      new: <R = MSSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSSeparatorInspectorItem: cocoa.classes.MSSeparatorInspectorItem;
