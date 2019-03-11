/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerStyleOverrideInspectorItem<T = any> extends cocoa.MSStyleOverrideInspectorItem {
    menuObjectProvider<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerStyleOverrideInspectorItem<T = any> extends cocoa.classes.MSStyleOverrideInspectorItem {
      alloc<R = MSLayerStyleOverrideInspectorItem>(): R;
      new: <R = MSLayerStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSLayerStyleOverrideInspectorItem: cocoa.classes.MSLayerStyleOverrideInspectorItem;
