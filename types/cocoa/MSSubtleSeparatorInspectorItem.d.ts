/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtleSeparatorInspectorItem<T = any> extends MSInspectorItem {}
  namespace classes {
    export interface MSSubtleSeparatorInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSSubtleSeparatorInspectorItem>(): R;
      new: <R = MSSubtleSeparatorInspectorItem>() => R;
    }
  }
}

declare const MSSubtleSeparatorInspectorItem: cocoa.classes.MSSubtleSeparatorInspectorItem;
