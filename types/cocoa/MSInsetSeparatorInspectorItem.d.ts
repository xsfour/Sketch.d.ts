/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsetSeparatorInspectorItem<T = any> extends cocoa.MSSeparatorInspectorItem {}
  namespace classes {
    export interface MSInsetSeparatorInspectorItem<T = any> extends cocoa.classes.MSSeparatorInspectorItem {
      alloc<R = MSInsetSeparatorInspectorItem>(): R;
      new: <R = MSInsetSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSInsetSeparatorInspectorItem: cocoa.classes.MSInsetSeparatorInspectorItem;
