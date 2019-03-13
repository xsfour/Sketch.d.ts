/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStyleOverrideInspectorItem<T = any> extends MSStyleOverrideInspectorItem {
    menuObjectProvider<R = unknown>(): R;
  }
  namespace classes {
    export interface MSTextStyleOverrideInspectorItem<T = any> extends MSStyleOverrideInspectorItem {
      alloc<R = MSTextStyleOverrideInspectorItem>(): R;
      new: <R = MSTextStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSTextStyleOverrideInspectorItem: cocoa.classes.MSTextStyleOverrideInspectorItem;
