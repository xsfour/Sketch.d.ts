/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtleSeparatorInspectorItem<T = any> extends cocoa.MSInspectorItem {}
  namespace classes {
    export interface MSSubtleSeparatorInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSSubtleSeparatorInspectorItem>(): R;
      new: <R = MSSubtleSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSSubtleSeparatorInspectorItem: cocoa.classes.MSSubtleSeparatorInspectorItem;
